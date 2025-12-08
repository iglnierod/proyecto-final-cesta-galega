'use client';

import { useState } from 'react';
import useSWR from 'swr';
import { useSearchParams } from 'next/navigation';
import ShopSearchBar from '@/app/components/ShopSearchBar';
import ProductsGrid from '@/app/components/ProductsGrid';
import ShopFiltersColumn from '@/app/components/ShopFilterColumn';
import { ProductDTO } from '@/app/lib/product/product.schema';
import { CategoryDTO } from '@/app/lib/category/category.schema';
import { BusinessDTO } from '@/app/lib/business/business.schema';
import BusinessGrid from '@/app/components/BusinessGrid';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type SearchType = 'product' | 'business';

export default function MainShopClient({ loggedIn = false }: { loggedIn?: boolean }) {
  const searchParams = useSearchParams();
  const filter = searchParams.get('filter') ?? ''; // '', 'news', 'discounts'

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');
  const [searchType, setSearchType] = useState<SearchType>('product');

  // 🔹 PRODUCTOS
  const productParams = new URLSearchParams();
  if (search && searchType === 'product') productParams.set('search', search);
  if (sort && searchType === 'product') productParams.set('sort', sort);
  if (category && searchType === 'product') productParams.set('category', category);
  if (minPrice && searchType === 'product') productParams.set('minPrice', minPrice);
  if (maxPrice && searchType === 'product') productParams.set('maxPrice', maxPrice);
  if (filter) productParams.set('filter', filter);

  const productKey =
    searchType === 'product'
      ? `/api/product${productParams.toString() ? `?${productParams.toString()}` : ''}`
      : null;

  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading,
  } = useSWR<{ products: ProductDTO[] }>(productKey, fetcher);

  const products = productsData?.products ?? [];

  const businessParams = new URLSearchParams();
  if (searchType === 'business' && search) {
    businessParams.set('search', search);
  }

  const businessKey =
    searchType === 'business'
      ? `/api/business${businessParams.toString() ? `?${businessParams.toString()}` : ''}`
      : null;

  const {
    data: businessData,
    error: businessError,
    isLoading: businessLoading,
  } = useSWR<{ businesses: BusinessDTO[] }>(businessKey, fetcher);

  const businesses = businessData?.businesses ?? [];

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useSWR<{ categories: CategoryDTO[] }>('/api/category', fetcher);

  const categories = categoriesData?.categories ?? [];

  const showingProducts = searchType === 'product';
  const showingBusinesses = searchType === 'business';

  return (
    <div className="flex flex-col">
      {/* BARRA SUPERIOR */}
      <ShopSearchBar
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
        searchType={searchType}
        onSearchTypeChange={(t) => {
          setSearchType(t);
        }}
      />

      {/* CONTENIDO PRINCIPAL */}
      <div className="mt-6 flex flex-col gap-4 md:flex-row w-full">
        {/* COLUMNA DE FILTROS (só produtos) */}
        {showingProducts && (
          <ShopFiltersColumn
            minPrice={minPrice}
            maxPrice={maxPrice}
            onMinPriceChange={setMinPrice}
            onMaxPriceChange={setMaxPrice}
            category={category}
            onCategoryChange={setCategory}
            categories={categories}
          />
        )}

        {/* GRID PRINCIPAL */}
        <section className="w-full md:flex-1">
          {/* PRODUCTOS */}
          {showingProducts && (
            <>
              {productsError && (
                <p className="text-error text-sm mb-4">Erro ao cargar os produtos</p>
              )}

              {productsLoading && (
                <div className="w-full flex justify-center py-8">
                  <span className="loading loading-spinner text-primary"></span>
                </div>
              )}

              {!productsLoading && !productsError && (
                <ProductsGrid products={products} addButtonDisabled={!loggedIn} />
              )}
            </>
          )}

          {/* EMPRESAS */}
          {showingBusinesses && (
            <>
              {businessError && (
                <p className="text-error text-sm mb-4">Erro ao cargar as empresas</p>
              )}

              {businessLoading && (
                <div className="w-full flex justify-center py-8">
                  <span className="loading loading-spinner text-primary"></span>
                </div>
              )}

              {!businessLoading && !businessError && <BusinessGrid businesses={businesses} />}
            </>
          )}
        </section>
      </div>
    </div>
  );
}
