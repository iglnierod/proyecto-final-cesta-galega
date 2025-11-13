'use client';
import { FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { mutate } from 'swr';

// Schemas y tipos del dominio de producto
import {
  ProductCreateInput,
  ProductCreateSchema,
  ProductWithBusinessDTO,
} from '@/app/lib/product/product.schema';

// Componente de formulario para crear/editar produtos
export default function ProductForm({
  create,
  businessId,
  product,
  onSuccess,
}: {
  create: boolean;
  businessId: number | undefined;
  product?: ProductWithBusinessDTO; // Produto que se edita (DTO da API)
  onSuccess?: (p: ProductWithBusinessDTO) => void;
}) {
  // Estado do formulario alineado co ProductCreateInput
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

  // Rellenar o formulario se chega un produto (modo edición)
  useEffect(() => {
    if (product) {
      setFormData({
        businessId: businessId ?? product.business.id,
        name: product.name,
        description: product.description ?? '',
        price: product.price,
        discounted: product.discounted,
        discount: product.discount,
        image: product.image ?? '',
        categoryIds: [],
        enabled: product.enabled,
      });
    } else {
      // Se é creación e cambia o businessId, actualizalo
      setFormData((prev) => ({
        ...prev,
        businessId: businessId ?? prev.businessId,
      }));
    }
  }, [product, businessId]);

  // Xestión do submit do formulario
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Validar datos co novo schema
    const result = ProductCreateSchema.safeParse(formData);
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
        body: JSON.stringify(result.data),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? 'Erro ao gardar o produto');

      // A API responde { product: {...} } segundo o mapper
      const saved: ProductWithBusinessDTO = data.product as ProductWithBusinessDTO;
      onSuccess?.(saved);

      // Revalidar lista con SWR
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
            <span className="text-red-500">*</span>
          </label>
          <textarea
            id="description"
            value={formData.description}
            placeholder="Escriba aquí a descrición do produto..."
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
              min={0}
              max={9999}
              step={0.01}
              value={formData.price}
              onChange={(e) => {
                const n = e.currentTarget.valueAsNumber;
                setFormData({ ...formData, price: Number.isNaN(n) ? 0 : n });
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
                discount: e.target.checked ? formData.discount : 0,
              })
            }
            className="checkbox checkbox-primary"
          />
          <label className="label-text text-base" htmlFor="discounted">
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
              min={0}
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

        {/* BOTÓNS */}
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

        {/* Mensaxe de erro */}
        {errorMsg && <p className="col-span-3 text-error text-sm mt-2 text-center">{errorMsg}</p>}
      </form>
    </section>
  );
}
