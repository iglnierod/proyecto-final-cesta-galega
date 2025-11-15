'use client';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useRouter } from 'next/navigation';
import { mutate } from 'swr';

import { useAlert } from '@/app/context/AlertContext';
import ProductForm from '@/app/components/ProductForm';
import { ProductDTO, ProductWithBusinessDTO } from '@/app/lib/product/product.schema';

const MySwal = withReactContent(Swal);

export default function ProductsTable({
  products,
  loading,
  error,
  businessId,
}: {
  products: ProductDTO[];
  loading: boolean;
  error?: string;
  businessId: number;
}) {
  const { showAlert } = useAlert();
  const router = useRouter();
  const key = `/api/product?businessId=${businessId}`;

  // Eliminar producto (borrado lógico vía API)
  async function handleDelete(productId: number, name?: string) {
    const { isConfirmed } = await Swal.fire({
      title: 'Eliminar produto?',
      text: `Eliminarase o produto: ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    });

    if (!isConfirmed) return;

    try {
      const res = await fetch(`/api/product/${productId}`, { method: 'DELETE' });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) throw new Error(data?.error ?? 'Erro ao eliminar produto');

      showAlert('O produto foi eliminado correctamente', 'success');

      // Revalidar a lista
      await mutate(key);
    } catch (err) {
      console.error(err);
      showAlert('Ocorreu un erro ao eliminar o produto', 'error');
    }
  }

  // Editar producto: obter datos completos (ProductWithBusinessDTO) e abrir modal
  async function handleEditClick(productId: number) {
    try {
      // Pedir ao backend o produto completo co mapper
      const res = await fetch(`/api/product/${productId}`);
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error ?? 'Erro ao cargar o produto');
      }

      const fullProduct = data.product as ProductWithBusinessDTO;

      MySwal.fire({
        title: 'Editar produto',
        html: (
          <ProductForm
            create={false}
            businessId={businessId}
            product={fullProduct}
            onSuccessAction={() => {
              showAlert('Produto actualizado con éxito', 'success');
              mutate(key);
            }}
          />
        ),
        showConfirmButton: false,
        width: 800,
      });
    } catch (err: any) {
      console.error(err);
      showAlert(err.message ?? 'Erro ao cargar o produto', 'error');
    }
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
                      <span className="badge badge-soft badge-success">Si</span>
                    ) : (
                      <span className="badge badge-soft badge-error">Non</span>
                    )}
                  </td>
                  <td>{p.price} €</td>
                  <td>
                    {p.discounted ? (
                      <span className="badge badge-soft badge-info">{p.discount} %</span>
                    ) : (
                      <span className="badge badge-soft badge-secondary">Non</span>
                    )}
                  </td>
                  <td className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => router.push(`/business/manage/products/preview/${p.id}`)}
                      title="Ver produto"
                      className="tooltip-toggle btn btn-circle btn-text btn-sm"
                      aria-label="Ver produto"
                    >
                      <span className="icon-[tabler--eye] size-5"></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleEditClick(p.id)}
                      title="Editar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Editar produto"
                    >
                      <span className="icon-[tabler--pencil] size-5 "></span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDelete(p.id, p.name)}
                      title="Eliminar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Eliminar produto"
                    >
                      <span className="icon-[tabler--trash] size-5"></span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={10}>
                  Non hai produtos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
