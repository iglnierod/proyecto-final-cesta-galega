'use client';
import Swal from 'sweetalert2';
import { Product } from '@/app/generated/prisma';
import { useAlert } from '@/app/context/AlertContext';
import withReactContent from 'sweetalert2-react-content';
import ProductForm from '@/app/components/ProductForm';
import { mutate } from 'swr';
import { useRouter } from 'next/navigation';

export default function ProductsTable({
  products,
  loading,
  error,
  businessId,
}: {
  products: Product[];
  loading: boolean;
  error?: string;
  businessId: number;
}) {
  const { showAlert } = useAlert();
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const key = `/api/product?businessId=${businessId}`;

  async function handleDelete(productId: number, name?: string) {
    const { isConfirmed } = await Swal.fire({
      title: '¿Eliminar produto?',
      text: `Eliminarase o produto: ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      reverseButtons: true,
    });
    if (!isConfirmed) return;

    try {
      const res = await fetch(`/api/product/${productId}`, { method: 'DELETE' });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? 'Error ao eliminar produto');
      showAlert('O produto foi eliminado correctamente', 'success');

      // Revalidar la lista
      mutate(key);
    } catch (error) {
      console.error(error);
      showAlert('Ocorreu un erro ao eliminar o produto', 'error');
    }
  }

  function handleEditClick(p: Product) {
    MySwal.fire({
      title: 'Editar produto',
      html: (
        <ProductForm
          create={false}
          businessId={businessId}
          product={p}
          onSuccess={() => {
            showAlert('Produto actualiza con éxito', 'success');
            mutate(key);
          }}
        />
      ),
      showConfirmButton: false,
      width: 800,
    });
  }

  return (
    <div className="border-base-content/25 w-full rounded-lg border">
      <div className="overflow-x-auto">
        <table className="table">
          {/* CABECERA DE LA TABLA */}
          <thead>
            <tr className="bg-blue-50">
              <th className="font-bold">Nome</th>
              <th className="font-bold">Descrición</th>
              <th className="font-bold">Dispoñible</th>
              <th className="font-bold">Prezo</th>
              <th className="font-bold">Desconto</th>
              <th className="font-bold">Accións</th>
            </tr>
          </thead>
          <tbody>
            {error && (
              <tr>
                <td colSpan={10} className="text-center text-error">
                  {error}
                </td>
              </tr>
            )}

            {loading && !error ? (
              <tr>
                <td colSpan={15} className="text-center">
                  <span className="loading loading-spinner text-primary"></span>
                </td>
              </tr>
            ) : products.length !== 0 ? (
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
                        {p.discount ? p.discount : undefined} %
                      </span>
                    ) : (
                      <span className="badge badge-soft badge-secondary">Non</span>
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => {
                        router.push(`/business/manage/products/preview/${p.id}`);
                      }}
                      title="Ver produto"
                      className="tooltip-toggle btn btn-circle btn-text btn-sm"
                      aria-label="Ver produto"
                    >
                      <span className="icon-[tabler--eye] size-5"></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEditClick(p)}
                      title="Editar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--pencil] size-5 "></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(p.id, p.name)}
                      title="Eliminar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--trash] size-5"></span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={10}>
                  Non hay produtos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
