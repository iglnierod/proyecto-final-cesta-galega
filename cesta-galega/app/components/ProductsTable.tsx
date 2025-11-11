'use client';
import Swal from 'sweetalert2';
import { Product } from '@/app/generated/prisma';
import { useAlert } from '@/app/context/AlertContext';

export default function ProductsTable({
  products,
  loading,
  error,
  onDelete,
}: {
  products: Product[];
  loading: boolean;
  error?: string;
  onDelete?: (productId: number) => void;
}) {
  // Lanzador de alertas de la app
  const { showAlert } = useAlert();

  // Manejar click en delete
  async function handleDelete(productId: number, name?: string) {
    // Lanzar modal de confirmación para eliminar
    const { isConfirmed } = await Swal.fire({
      title: '¿Eliminar produto?',
      text: `Eliminarase o produto: ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonAriaLabel: 'Cancelar',
      reverseButtons: true,
    });

    // Si el usuario no confirma devolver sin ejecutar nada
    if (!isConfirmed) return;

    try {
      // Hacer petición a la API para eliminar producto
      const res = await fetch(`/api/product/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      // Obtener datos de la petición
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? 'Error ao eliminar produto');

      // Si se eliminó correctamente ejecutar función heredada para eliminar de la lista
      onDelete?.(productId);
      showAlert('O produto foi eliminado correctamente', 'success');
    } catch (error) {
      console.error(error);
      showAlert('Ocorreu un erro ao eliminar o produto', 'error');
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
            {/* FILA DE ERROR */}
            {error && (
              <tr>
                <td colSpan={10} className="text-center text-error">
                  {error}
                </td>
              </tr>
            )}

            {/* SPINNER DE CARGA */}
            {loading && !error ? (
              <tr>
                <td colSpan={15} className="text-center">
                  <span className="loading loading-spinner text-primary"></span>
                </td>
              </tr>
            ) : // MOSTRAR PRODUCTOS
            products.length !== 0 ? (
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
                    {/* BOTÓN DE VER */}
                    <button
                      type="button"
                      title="Ver produto"
                      className="tooltip-toggle btn btn-circle btn-text btn-sm"
                      aria-label="Ver produto"
                    >
                      <span className="icon-[tabler--eye] size-5"></span>
                    </button>
                    {/* BOTÓN DE EDITAR */}
                    <button
                      type="button"
                      title="Editar produto"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Action button"
                    >
                      <span className="icon-[tabler--pencil] size-5 "></span>
                    </button>
                    {/* BOTÓN DE ELIMINAR */}
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
