import ProductsTable from '@/app/components/ProductsTable';

export default function ManageProductsPage() {
  return (
    <section className="grid grid-cols-1 justify-items-center p-4">
      <div className="flex flex-col gap-3 w-full max-w-[1100px]">
        <h1 className="text-3xl font-bold">Xestionar produtos</h1>
        <ProductsTable />
      </div>
    </section>
  );
}
