'use client';
import { FormEvent, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { mutate } from 'swr';
import imagePlaceholder from '@/public/assets/100x100.svg';

// Schemas y tipos del dominio de produto
import {
  ProductCreateInput,
  ProductCreateSchema,
  ProductWithBusinessDTO,
} from '@/app/lib/product/product.schema';
import Image from 'next/image';
import { uploadToCloudinary } from '@/app/lib/cloudinary';
import { CategoryDTO } from '@/app/lib/category/category.schema';

// Componente de formulario para crear/editar produtos
export default function ProductForm({
  create,
  businessId,
  product,
  onSuccessAction,
}: {
  create: boolean;
  businessId: number | undefined;
  product?: ProductWithBusinessDTO;
  onSuccessAction?: (p: ProductWithBusinessDTO) => void;
}) {
  // Estado do formulario alineado co ProductCreateInput
  const [formData, setFormData] = useState<ProductCreateInput>({
    businessId: businessId ?? 1,
    name: '',
    description: '',
    price: 0,
    discounted: false,
    discount: 0,
    image: '',
    categoryIds: [],
    enabled: true,
  });

  const [productFile, setProductFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Rellenar o formulario se chega un produto (modo edición)
  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch('/api/category');
        const data = await res.json();
        setCategories(data.categories || []);
      } catch (err: any) {
        console.error('Erro cargando categorías: ', err);
      }
    }

    if (product) {
      setFormData({
        businessId: businessId ?? product.business.id,
        name: product.name,
        description: product.description ?? '',
        price: product.price,
        discounted: product.discounted,
        discount: product.discount,
        image: product.image ?? '',
        categoryIds: product.categories.map((c) => c.id),
        enabled: product.enabled, // aquí ya coges el valor real en edición
      });
    } else {
      // Se é creación e cambia o businessId, actualizalo
      setFormData((prev) => ({
        ...prev,
        businessId: businessId ?? prev.businessId,
      }));
    }

    loadCategories();
  }, [product, businessId]);

  // Xestión do submit do formulario
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      // Validar datos co novo schema
      if (productFile) {
        formData.image = '##';
      }
      const result = ProductCreateSchema.safeParse(formData);
      if (!result.success) {
        const error = result.error.issues[0];
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      let imageUrl = formData.image;

      if (productFile) {
        imageUrl = await uploadToCloudinary(productFile);
      }

      const method = create ? 'POST' : 'PUT';
      const url = create ? `/api/product` : `/api/product/${product?.id}`;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...result.data, image: imageUrl }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? 'Erro ao gardar o produto');

      // A API responde { product: {...} } segundo o mapper
      const saved: ProductWithBusinessDTO = data.product as ProductWithBusinessDTO;
      onSuccessAction?.(saved);

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
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-1 justify-between w-full">
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
                setFormData({ ...formData, discount: n });
              }}
              className="grow"
            />
            <span className="icon-[tabler--percentage] text-base-content/80 my-auto ms-3 size-5 shrink-0"></span>
          </div>
        </div>

        {/* IMAXE DO PRODUTO */}
        <div className="col-span-3">
          <label className="text-left label-text block mb-2">
            Imaxe do produto<span className="text-red-500">*</span>
          </label>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* IMAXE SELECCIONADA OU IMAXE EN BD */}
            <Image
              src={previewUrl ? previewUrl : product?.image ? product.image : imagePlaceholder}
              width={140}
              height={140}
              alt="Imaxe do produto"
              className="rounded-lg border border-base-content/20 object-cover"
            />

            <div className="flex flex-col gap-3 w-full">
              {/* Input de ficheiro */}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setProductFile(file);

                  if (file) {
                    const url = URL.createObjectURL(file);
                    setPreviewUrl(url);
                  } else {
                    setPreviewUrl(null);
                  }
                }}
                className="
                  block w-full text-sm text-base-content
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-semibold
                  file:bg-primary file:text-primary-content
                  hover:file:bg-primary/80
                  cursor-pointer
                  border border-base-content/20 rounded-lg
                  p-2
                "
              />
            </div>
          </div>
        </div>

        {/* PRODUTO ACTIVO */}
        <div className="col-span-3 mt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-primary"
              checked={formData.enabled}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  enabled: e.target.checked,
                })
              }
            />
            <span className="label-text text-base">Produto activo e visible para os usuarios</span>
          </label>
        </div>

        <div className="col-span-3 flex justify-center text-left pb-10 ">
          <div className="w-full overflow-x-auto overflow-y-auto max-h-[300px] rounded-lg p-4 border border-gray-300 flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-2">Categorías</h3>
            <p className="text-base-content/70 text-sm mb-4">
              Selecciona as categorías do produto, esto axudará aos usuarios na búsqueda.
            </p>

            <table className="table max-w-[500px]">
              <thead>
                <tr className="border-b border-base-300">
                  <th className="w-24 text-center">Seleccionado</th>
                  <th>Nome</th>
                </tr>
              </thead>

              <tbody>
                {categories && categories.length ? (
                  categories.map((c) => (
                    <tr key={c.id} className="hover:bg-base-200/40 transition">
                      <td className="text-center">
                        <input
                          type="checkbox"
                          className="checkbox checkbox-primary checkbox-sm"
                          checked={formData.categoryIds.includes(c.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({
                                ...formData,
                                categoryIds: [...formData.categoryIds, c.id],
                              });
                            } else {
                              setFormData({
                                ...formData,
                                categoryIds: formData.categoryIds.filter((id) => id !== c.id),
                              });
                            }
                          }}
                        />
                      </td>
                      <td className="font-medium">{c.name}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="text-center py-3 text-base-content/60">
                      Sen categorías dispoñibles
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mensaxe de erro */}
        {errorMsg && <p className="col-span-3 text-error text-sm mt-2 text-center">{errorMsg}</p>}

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
            {loading ? <span className="loading loading-dots loading-xl"></span> : <span></span>}
          </button>
        </div>
      </form>
    </section>
  );
}
