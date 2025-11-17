'use client';

import { useRouter } from 'next/navigation';
import { OrderProductStatusEnum } from '@/app/lib/order/order.schema';

export default function BusinessOrdersTable({
  items,
  loading,
  error,
  onStatusChange,
}: {
  items: any[];
  loading: boolean;
  error: string | null;
  onStatusChange: (id: number, status: string) => void;
}) {
  const router = useRouter();

  return (
    <div className="border-base-content/25 w-full rounded-lg border">
      <div className="overflow-x-auto">
        <table className="table">
          {/* CABECERA */}
          <thead>
            <tr className="bg-blue-50">
              <th className="font-bold">Pedido</th>
              <th className="font-bold">Cliente</th>
              <th className="font-bold">Produto</th>
              <th className="font-bold">Cant.</th>
              <th className="font-bold">Prezo</th>
              <th className="font-bold">Subtotal</th>
              <th className="font-bold">Estado</th>
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
            ) : items.length !== 0 ? (
              items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <span className="font-semibold">#{item.orderId}</span>
                    <br />
                    <span className="text-xs opacity-60">
                      {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                  </td>

                  <td>{item.customerName}</td>

                  <td>{item.productName}</td>

                  <td>{item.quantity}</td>

                  <td>{item.unitPrice.toFixed(2)} €</td>

                  <td className="font-semibold">{item.subtotal.toFixed(2)} €</td>

                  {/* SELECTOR DE ESTADO */}
                  <td>
                    <select
                      className="select select-sm select-bordered"
                      defaultValue={item.status}
                      onChange={(e) => onStatusChange(item.id, e.target.value)}
                    >
                      {OrderProductStatusEnum.options.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* ACCIONES */}
                  <td className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => router.push(`/business/manage/orders/${item.orderId}`)}
                      title="Ver pedido completo"
                      className="btn btn-circle btn-text btn-sm"
                      aria-label="Ver pedido"
                    >
                      <span className="icon-[tabler--eye] size-5"></span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
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
