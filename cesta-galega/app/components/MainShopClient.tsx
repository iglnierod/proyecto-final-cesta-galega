'use client';

import { useState } from 'react';
import useSWR from 'swr';
import ShopSearchBar from '@/app/components/ShopSearchBar';
import ProductsGrid from '@/app/components/ProductsGrid';
import { ProductDTO } from '@/app/lib/product/product.schema';
import { CategoryDTO } from '@/app/lib/category/category.schema';
import ShopFiltersColumn from '@/app/components/ShopFilterColumn';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function MainShopClient() {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  // Construimos los parámetros para productos
  const productParams = new URLSearchParams();
  if (search) productParams.set('search', search);
  if (sort) productParams.set('sort', sort);
  if (category) productParams.set('category', category);
  if (minPrice) productParams.set('minPrice', minPrice);
  if (maxPrice) productParams.set('maxPrice', maxPrice);

  const productKey = `/api/product${productParams.toString() ? `?${productParams.toString()}` : ''}`;

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useSWR<{ products: ProductDTO[] }>(productKey, fetcher);

  const products = productsData?.products ?? [];

  // CATEGORÍAS
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useSWR<{ categories: CategoryDTO[] }>('/api/category', fetcher);

  const categories = categoriesData?.categories ?? [];

  return (
    <div className="flex flex-col">
      {/* BARRA SUPERIOR */}
      <ShopSearchBar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row w-full">
        {/* COLUMNA DE FILTROS */}
        <ShopFiltersColumn
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinPriceChange={setMinPrice}
          onMaxPriceChange={setMaxPrice}
          category={category}
          onCategoryChange={setCategory}
          categories={categories}
        />

        {/* GRID DE PRODUTOS */}
        <section className="w-full md:flex-1">
          {productsError && <p className="text-error text-sm mb-4">Erro ao cargar os produtos</p>}

          {productsLoading && (
            <div className="w-full flex justify-center py-8">
              <span className="loading loading-spinner text-primary"></span>
            </div>
          )}

          {!productsLoading && !productsError && <ProductsGrid products={products} />}
        </section>
      </div>
    </div>
  );
}
