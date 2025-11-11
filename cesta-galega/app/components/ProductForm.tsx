'use client';
import { FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import { ProductCreateInput } from '@/app/lib/types/product';
import { productCreateSchema } from '@/app/lib/validators/productValidator';
import { Product } from '@/app/generated/prisma';

export default function ProductForm({
  create,
  businessId,
  onSuccess,
}: {
  create: boolean;
  businessId: number | undefined;
  onSuccess?: (p: Product) => void;
}) {
  // Formulario inicial de creación de producto
  const [formData, setFormData] = useState<ProductCreateInput>({
    businessId: businessId ?? 1,
    name: '',
    description: '',
    price: 0,
    discounted: false,
    discount: 0,
    image: '##',
    categoryIds: [],
    enabled: true,
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevenir acción por defecto y reestablecer error y loading
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Verificación de datos del formulario
    const result = productCreateSchema.safeParse(formData);
    if (!result.success) {
      // Si falla devolver error
      const error = result.error.issues[0];
      setErrorMsg(error.message);
      setLoading(false);
    }

    try {
      // Hacer petición POST para crear un producto
      const res = await fetch(`/api/product`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Obtener datos devueltos por la API
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? 'Error al registrar la empresa');
      }
      // Enviar nuevo producto a la función heredada para añadirlo a la lista
      onSuccess?.(data);
      setLoading(false);
      Swal.close();
    } catch (err: any) {
      console.error(err.message || 'Erro inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8 justify-between w-full">
        {/* NOMBRE */}
        <div className="text-left col-span-3">
          <label form="name" className="label-text">
            Nome
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Nome do produto"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input rounded"
            required
          />
        </div>
        {/* DESCRIPCIÓN */}
        <div className="text-left col-span-3">
          <label form="description" className="label-text">
            Descrición
          </label>
          <textarea
            id="description"
            placeholder="Escriba aqui a descrición do produto..."
            rows={5}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="textarea"
            aria-label="Textarea"
          ></textarea>
        </div>
        {/* PRECIO */}
        <div className="text-left">
          <label className="label-text">
            Prezo
            <span className="text-red-500">*</span>
          </label>
          <div className="input rounded">
            <input
              type="number"
              placeholder="00,00"
              id="price"
              min={1}
              max={9999}
              step={0.01}
              onChange={(e) => {
                const n = e.currentTarget.valueAsNumber; // NaN si está vacío o inválido
                setFormData({ ...formData, price: n });
              }}
              className="grow"
            />
            <label className="sr-only" htmlFor="trailingIconDefault">
              Euro
            </label>
            <span className="icon-[tabler--currency-euro] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
          </div>
        </div>
        {/* DESCUENTO */}
        <div className="flex justify-center items-center gap-1 py-7 ">
          <input
            type="checkbox"
            id="discounted"
            onChange={(e) => setFormData({ ...formData, discounted: e.target.checked })}
            className="checkbox checkbox-primary"
          />
          <label className="label-text text-base" htmlFor="checkboxDefault">
            Aplicar desconto
          </label>
        </div>
        {/* % DESCUENTO */}
        <div className="text-left">
          <label className="label-text">Desconto</label>
          <div className="input rounded">
            <input
              type="number"
              id="discount"
              disabled={!formData.discounted}
              min={0.05}
              max={99}
              step={0.01}
              placeholder="10,00"
              onChange={(e) => {
                const n = e.currentTarget.valueAsNumber; // NaN si está vacío o inválido
                setFormData({ ...formData, discount: Number.isNaN(n) ? 0 : n });
              }}
              className="grow"
            />
            <label className="sr-only" htmlFor="trailingIconDefault">
              Porcentaxe
            </label>
            <span className="icon-[tabler--percentage] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-8">
          {/* BOTÓN DE CERRAR */}
          <button
            type="button"
            onClick={() => {
              Swal.close();
            }}
            className="btn btn-secondary rounded"
          >
            Cancelar
          </button>
          {/* BOTÓN DE CREAR */}
          <button type="submit" className="btn btn-primary rounded">
            Crear
          </button>
        </div>
      </form>
    </section>
  );
}
