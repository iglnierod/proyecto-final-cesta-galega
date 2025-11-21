'use client';
import useSWR from 'swr';
import AddProductButton from '@/app/components/AddProductButton';
import ProductsTable from '@/app/components/ProductsTable';
import { ProductWithCategoriesDTO } from '@/app/lib/product/product.schema';

// Función fetcher para SWR
const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ManageProductsClient({ businessId }: { businessId: number }) {
  const key = `/api/product?businessId=${businessId}`;

  // Esperamos que a los de la API
  const { data, isLoading, error } = useSWR<{ products: ProductWithCategoriesDTO[] }>(key, fetcher);

  console.log(data);
  const products: ProductWithCategoriesDTO[] = data?.products ?? [];

  return (
    <section className="grid grid-cols-1 justify-items-center p-4">
      <div className="flex flex-col gap-3 w-full max-w-[1400px]">
        <h1 className="text-3xl font-bold">Xestionar produtos</h1>

        {/* Solo necesita businessId para poder mutar con la misma key */}
        <AddProductButton businessId={businessId} />

        <ProductsTable
          businessId={businessId}
          products={products}
          loading={isLoading}
          error={error ? 'Erro ao cargar os produtos' : undefined}
        />
      </div>
    </section>
  );
}
