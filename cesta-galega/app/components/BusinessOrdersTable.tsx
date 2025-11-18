'use client';

import { useRouter } from 'next/navigation';
import { OrderProductStatusEnum } from '@/app/lib/order/order.schema';

export default function BusinessOrdersTable({
  items,
  loading,
  error,
  onStatusChangeAction,
}: {
  items: any[];
  loading: boolean;
  error: string | null;
  onStatusChangeAction: (id: number, status: string) => void;
}) {
  const router = useRouter();

  return (
    <div className="border-base-content/25 w-full rounded-lg border">
      {/* Habilitar scroll horizontal en pantallas pequeñas */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* HEADER */}
          <thead>
            <tr className="bg-blue-50">
              <th className="font-bold">Pedido</th>
              <th className="font-bold">Cliente</th>
              <th className="font-bold">Produto</th>
              <th className="font-bold">Cant.</th>
              <th className="font-bold">Prezo</th>
              <th className="font-bold">Subtotal</th>
              <th className="font-bold">Estado</th>
            </tr>
          </thead>

          <tbody>
            {/* Mostrar error si la carga falla */}
            {error && (
              <tr>
                <td colSpan={10} className="text-center text-error">
                  {error}
                </td>
              </tr>
            )}

            {/* Mostrar animación de carga si está cargando */}
            {loading && !error ? (
              <tr>
                <td colSpan={15} className="text-center">
                  <span className="loading loading-spinner text-primary"></span>
                </td>
              </tr>
            ) : items.length !== 0 ? (
              // Renderizar todas las filas de pedidos
              items.map((item) => (
                // Renderizar fila de un pedido
                <tr key={item.id}>
                  {/* Mostrar número y fecha del pedido */}
                  <td>
                    <span className="font-semibold">#{item.orderId}</span>
                    <br />
                    <span className="text-xs opacity-60">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </td>

                  {/* Mostrar nombre del cliente */}
                  <td>{item.customerName}</td>

                  {/* Mostrar nombre del producto */}
                  <td>{item.productName}</td>

                  {/* Mostrar cantidad del producto */}
                  <td>{item.quantity}</td>

                  {/* Mostrar precio unitario */}
                  <td>{item.unitPrice.toFixed(2)} €</td>

                  {/* Mostrar subtotal del producto */}
                  <td className="font-semibold">{item.subtotal.toFixed(2)} €</td>

                  {/* Mostrar selector de estado del pedido */}
                  <td>
                    <select
                      className="select select-sm select-bordered"
                      defaultValue={item.status}
                      onChange={(e) => onStatusChangeAction(item.id, e.target.value)}
                    >
                      {OrderProductStatusEnum.options.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              // Mostrar mensaje si no hay pedidos
              <tr>
                <td className="text-center" colSpan={10}>
                  Non hai pedidos
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
