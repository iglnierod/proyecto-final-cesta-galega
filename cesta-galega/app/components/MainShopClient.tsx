'use client';
import ShopSearchBar from '@/app/components/ShopSearchBar';
import ProductsGrid from '@/app/components/ProductsGrid';
import ShopFiltersColumn from '@/app/components/ShopFilterColumn';
import { useState } from 'react';
import useSWR from 'swr';
import { ProductDTO } from '@/app/lib/product/product.schema';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MainShopClient({ loggedIn }: { loggedIn: boolean }) {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string>('');

  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (sort) params.set('sort', sort);

  const queryString = params.toString();
  const key = `/api/product${queryString ? `?${queryString}` : ''}`;

  const { data, error, isLoading } = useSWR<{ products: ProductDTO[] }>(key, fetcher);

  const products = data?.products ?? [];

  return (
    <div className="flex flex-col">
      {/* BARRA DE BUSQUEDA Y FILTROS */}
      <ShopSearchBar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="mt-6 flex flex-col gap-4 md:flex-row w-full">
        {/* COLUMNA DE FILTROS */}
        <ShopFiltersColumn />

        {/* GRID DE PRODUTOS */}
        <section className="w-full md:flex-1">
          {error && <p className="text-error text-sm mb-4">Erro ao cargar os produtos</p>}

          {isLoading && (
            <div className="w-full flex justify-center py-8">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )}

          {!isLoading && !error && <ProductsGrid products={products} />}
        </section>
      </div>
    </div>
  );
}
