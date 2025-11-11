'use client';
import useSWR from 'swr';
import AddProductButton from '@/app/components/AddProductButton';
import ProductsTable from '@/app/components/ProductsTable';
import { Product } from '@/app/generated/prisma';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function ManageProductsClient({ businessId }: { businessId: number }) {
  const key = `/api/product?businessId=${businessId}`;
  const { data, isLoading, error } = useSWR<Product[]>(key, fetcher);

  return (
    <section className="grid grid-cols-1 justify-items-center p-4">
      <div className="flex flex-col gap-3 w-full max-w-[1100px]">
        <h1 className="text-3xl font-bold">Xestionar produtos</h1>

        {/* Solo necesita businessId para poder mutar con la misma key */}
        <AddProductButton businessId={businessId} />

        <ProductsTable
          businessId={businessId}
          products={data ?? []}
          loading={isLoading}
          error={error ? 'Erro ao cargar os produtos' : undefined}
        />
      </div>
    </section>
  );
}
