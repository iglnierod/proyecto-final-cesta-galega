'use client';
import { useEffect, useState } from 'react';
import { Product } from '@/app/generated/prisma';
import AddProductButton from '@/app/components/AddProductButton';
import ProductsTable from '@/app/components/ProductsTable';
import { useAlert } from '@/app/context/AlertContext';

export default function ManageProductsClient({ businessId }: { businessId: number }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();

  // Obtener productos de la API
  async function getProducts() {
    setLoading(true);
    try {
      const res = await fetch(`/api/product?businessId=${businessId}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? 'Erro ao cargar produtos');
      setProducts(data);
    } catch (err) {
      showAlert('Erro ao cargar os produtos', 'error');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [businessId]);

  // Cuando se crea un producto nuevo
  function handleProductCreated(p: Product) {
    const plainProduct = JSON.parse(JSON.stringify(p));
    setProducts((prev) => [plainProduct.newProduct, ...prev]);
  }

  // Cuando se elimina un producto
  function handleProductDeleted(productId: number) {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
  }

  return (
    <section className="grid grid-cols-1 justify-items-center p-4">
      <div className="flex flex-col gap-3 w-full max-w-[1100px]">
        <h1 className="text-3xl font-bold">Xestionar produtos</h1>

        <AddProductButton businessId={businessId} onCreated={handleProductCreated} />

        <ProductsTable products={products} loading={loading} onDelete={handleProductDeleted} />
      </div>
    </section>
  );
}
