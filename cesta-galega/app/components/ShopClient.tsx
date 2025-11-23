'use client';

import { useEffect, useState } from 'react';
import { CategoryDTO } from '@/app/lib/category/category.schema';
import useSWR from 'swr';
import { ProductWithCategoriesDTO } from '@/app/lib/product/product.schema';
import ProductsGrid from '@/app/components/ProductsGrid';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ShopClient({ businessId }: { businessId: number }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<string>('');
  const [sort, setSort] = useState<string>('');

  const [categories, setCategories] = useState<CategoryDTO[]>([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(`/api/category?businessId=${businessId}`);
        const data = await res.json();
        setCategories(data.categories ?? []);
      } catch (err) {
        console.error('Erro ao cargar as categorías', err);
      }
    }
    loadCategories();
  }, [businessId]);

  const params = new URLSearchParams();
  params.set('businessId', String(businessId));
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  if (sort) params.set('sort', sort);

  const key = `/api/product?${params.toString()}`;

  const { data, error, isLoading } = useSWR<{ products: ProductWithCategoriesDTO[] }>(key, fetcher);

  const products = data?.products ?? [];

  return (
    <section className="flex flex-col gap-4">
      {/* BARRA DE FILTROS */}
      <div className="w-full p-4 bg-base-100 border border-base-300 rounded-xl grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Buscador por nome */}
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full rounded"
        />

        {/* Filtro por categoría */}
        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Todas as categorías</option>
          {categories.map((c) => (
            <option key={c.id} value={String(c.id)}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Ordenación por prezo */}
        <select
          className="select select-bordered w-full"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Orde por defecto</option>
          <option value="price_asc">Prezo: menor a maior</option>
          <option value="price_desc">Prezo: maior a menor</option>
        </select>
      </div>

      {/* ESTADOS DE CARGA / ERRO */}
      {error && <p className="text-error text-sm">Erro ao cargar os produtos</p>}

      {isLoading && (
        <div className="w-full flex justify-center py-8">
          <span className="loading loading-spinner text-primary"></span>
        </div>
      )}

      {/* GRID DE PRODUTOS */}
      {!isLoading && !error && <ProductsGrid products={products} />}
    </section>
  );
}
