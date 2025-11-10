'use client';
import { useEffect, useState } from 'react';
import { Product } from '@/app/generated/prisma';
import Swal from 'sweetalert2';
import { useAlert } from '@/app/context/AlertContext';

// Componente que muestra la tabla de productos
export default function ProductsTable() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [products, setProducts] = useState<Product[]>([]);
  const { showAlert } = useAlert();

  // Obtener productos de la API y cargarlos en la lista
  async function getProducts() {
    setLoading(true);

    try {
      const res = await fetch('/api/product?businessId=2', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      // Obtener datos de la llamada
      const data = await res.json();

      if (!res.ok) {
        // Si hay un fallo en la petición enviar error
        throw new Error(data?.error ?? 'Error ao cargar os produtos');
      }

      setProducts(data);
    } catch (error: any) {
      // Mostrar error y reestablecer estados
      setError(error.message ?? 'Error');
      setLoading(false);
      setProducts([]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  // Cargar productos al cargar el componente
  useEffect(() => {
    getProducts();
  }, []);

  // Enviar petición de eliminar producto
  async function deleteProduct(productId: number) {
    try {
      const res = await fetch(`/api/product/${productId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (!res.ok) {
        // Si hubo un error en la api enviar un error
        throw new Error(data?.error ?? 'Error ao cargar os produtos');
      }
    } catch (error) {
      console.error(error);
    }
  }

  // Desplegar modal y obtener feedback de usuario
  async function handleDelete(productId: number, name?: string) {
    // Enviar modal y obtener si el usuario confirmó el delete
    const { isConfirmed } = await Swal.fire({
      title: '¿Eliminar produto?',
      text: `Eliminarase ${name}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonAriaLabel: 'Cancelar',
      reverseButtons: true,
    });

    // Si no confirmó devolver y no hacer nada
    if (!isConfirmed) return;

    try {
      // Llamar a función de eliminar producto
      await deleteProduct(productId);
      // Actualizar la lista de productos para eliminar el producto eliminado
      setProducts((prev) => prev.filter((p) => p.id !== productId));
      showAlert('O produto foi eliminado correctamente', 'success');
    } catch (error) {
      showAlert('Ocorreu un erro ao eliminar o produto', 'error');
      console.error(error);
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
            {/* FILA CON ERROR SI HAY ALGUN FALLO */}
            {error && (
              <tr>
                <td colSpan={5}>error</td>
              </tr>
            )}
            {/* MOSTRAR CARGA DE DATOS */}
            {loading && !error ? (
              <tr>
                <td colSpan={15} className="text-center">
                  <span className="loading loading-spinner text-primary"></span>
                </td>
              </tr>
            ) : // RECORRER DATOS PARA MOSTRARLOS
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
                        {p.discount ? p.discount * 100 : undefined} %
                      </span>
                    ) : (
                      <span className="badge badge-soft badge-secondary">Non</span>
                    )}
                  </td>
                  {/* BOTONES DE ACCIONES */}
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
                      title="Eleiminar produto"
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
