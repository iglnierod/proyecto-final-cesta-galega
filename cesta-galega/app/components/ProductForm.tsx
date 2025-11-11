'use client';
import { FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { ProductCreateInput } from '@/app/lib/types/product';
import { productCreateSchema } from '@/app/lib/validators/productValidator';
import { Product } from '@/app/generated/prisma';
import { mutate } from 'swr';

export default function ProductForm({
  create,
  businessId,
  product,
  onSuccess,
}: {
  create: boolean;
  businessId: number | undefined;
  product?: Product; // Producto que se edita
  onSuccess?: (p: Product) => void;
}) {
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

  // 🔹 Si llega un producto, rellenar el formulario con sus datos
  useEffect(() => {
    if (product) {
      setFormData({
        businessId: businessId ?? product.businessId,
        name: product.name ?? '',
        description: product.description ?? '',
        price: product.price ?? 0,
        discounted: product.discounted ?? false,
        discount: product.discount ?? 0,
        image: product.image ?? '##',
        categoryIds: [], // si usas categorías, mapea aquí las IDs
        enabled: product.enabled ?? true,
      });
    } else {
      // si es creación y cambia businessId, ajústalo
      setFormData((prev) => ({ ...prev, businessId: businessId ?? prev.businessId }));
    }
  }, [product, businessId]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Validar datos
    const result = productCreateSchema.safeParse(formData);
    if (!result.success) {
      const error = result.error.issues[0];
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    try {
      const method = create ? 'POST' : 'PUT';
      const url = create ? `/api/product` : `/api/product/${product?.id}`;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? 'Erro ao gardar o produto');

      // Desempaqueta por si la API responde { product: {...} }
      const saved: Product = (data?.product ?? data) as Product;
      onSuccess?.(saved);

      // Revalidar lista con swr
      if (businessId) {
        await mutate(`/api/product?businessId=${businessId}`);
      }

      Swal.close();
    } catch (err: any) {
      console.error(err.message || 'Erro inesperado');
      setErrorMsg(err.message ?? 'Erro');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8 justify-between w-full">
        {/* NOME */}
        <div className="text-left col-span-3">
          <label form="name" className="label-text">
            Nome
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            placeholder="Nome do produto"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input rounded"
            required
          />
        </div>

        {/* DESCRICIÓN */}
        <div className="text-left col-span-3">
          <label form="description" className="label-text">
            Descrición
          </label>
          <textarea
            id="description"
            value={formData.description}
            placeholder="Escriba aqui a descrición do produto..."
            rows={5}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="textarea"
            aria-label="Textarea"
          ></textarea>
        </div>

        {/* PREZO */}
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
              value={formData.price}
              onChange={(e) => {
                const n = e.currentTarget.valueAsNumber;
                setFormData({ ...formData, price: n });
              }}
              className="grow"
            />
            <span className="icon-[tabler--currency-euro] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
          </div>
        </div>

        {/* DESCONTO */}
        <div className="flex justify-center items-center gap-1 py-7 ">
          <input
            type="checkbox"
            id="discounted"
            checked={formData.discounted}
            onChange={(e) =>
              setFormData({
                ...formData,
                discounted: e.target.checked,
                // si desmarcas, deja a 0 por si estaba relleno
                discount: e.target.checked ? formData.discount : 0,
              })
            }
            className="checkbox checkbox-primary"
          />
          <label className="label-text text-base" htmlFor="checkboxDefault">
            Aplicar desconto
          </label>
        </div>

        {/* % DESCONTO */}
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
              value={formData.discount}
              onChange={(e) => {
                const n = e.currentTarget.valueAsNumber;
                setFormData({ ...formData, discount: Number.isNaN(n) ? 0 : n });
              }}
              className="grow"
            />
            <span className="icon-[tabler--percentage] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
          </div>
        </div>

        {/* BOTONES */}
        <div className="col-span-3 grid grid-cols-2 gap-8">
          <button
            type="button"
            onClick={() => Swal.close()}
            className="btn btn-secondary rounded"
            disabled={loading}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-primary rounded" disabled={loading}>
            {create ? 'Crear' : 'Gardar'}
          </button>
        </div>

        {/* Mensaje de error */}
        {errorMsg && <p className="col-span-3 text-error text-sm mt-2 text-center">{errorMsg}</p>}
      </form>
    </section>
  );
}
