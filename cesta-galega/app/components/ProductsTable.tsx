'use client';
import { useEffect, useState } from 'react';
import { Product } from '@/app/generated/prisma';

export default function ProductsTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);

  async function getProducts() {
    setLoading(true);

    try {
      const res = await fetch('/api/product?businessId=2', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        throw new Error(data?.error ?? 'Error ao cargar os produtos');
      }

      setProducts(data);
    } catch (error: any) {
      setError(error.message ?? 'Error');
      setLoading(false);
      setProducts([]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="border-base-content/25 w-full rounded-lg border">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="bg-blue-50">
              <th className="font-bold">Nome</th>
              <th className="font-bold">Descrición</th>
              <th className="font-bold">Disponible</th>
              <th className="font-bold">Precio</th>
              <th className="font-bold">Desconto</th>
              <th className="font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td colSpan={5}>error</td>
              </tr>
            )}
            {loading && !error ? (
              <tr>
                <td colSpan={5} className="text-center">
                  <span className="loading loading-spinner text-primary"></span>
                </td>
              </tr>
            ) : (
              products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>
                    {p.enabled ? (
                      <span className="badge badge-soft badge-success">Sí</span>
                    ) : (
                      <span className="badge badge-soft badge-error">Non</span>
                    )}
                  </td>
                  <td>{p.price} €</td>
                  <td>
                    {p.discounted ? (
                      <span className="badge badge-soft badge-info">
                        {p.discount ? p.discount * 100 : undefined} %
                      </span>
                    ) : (
                      <span className="badge badge-soft badge-error">Non</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      title="Ver produto"
                      className="tooltip-toggle btn btn-circle btn-text btn-sm"
                      aria-label="Ver produto"
                    >
                      <span className="icon-[tabler--eye] size-5"></span>
                    </button>
                    <button
                      type="button"
                      title="Editar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--pencil] size-5 "></span>
                    </button>
                    <button
                      type="button"
                      title="Eleiminar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--trash] size-5"></span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
