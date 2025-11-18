'use client';

import useSWR from 'swr';
import {
  BusinessOrderItem,
  BusinessOrderItemDTO,
  OrderProductStatusEnum,
} from '@/app/lib/order/order.schema';
import BusinessOrdersTable from '@/app/components/BusinessOrdersTable';

const fetcher = async (url: string): Promise<BusinessOrderItem[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Erro ao cargar pedidos');
  }
  const data = await res.json();
  return BusinessOrderItemDTO.array().parse(data);
};

export default function BusinessOrdersPage() {
  const { data, error, isLoading, mutate } = useSWR<BusinessOrderItem[]>('/api/order', fetcher);

  async function handleStatusChange(id: number, status: string) {
    if (!OrderProductStatusEnum.options.includes(status as any)) return;

    try {
      const res = await fetch(`/api/order/item/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        throw new Error('Erro ao actualizar o estado');
      }

      await mutate();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    // Igual que la página de productos
    <section className="grid grid-cols-1 justify-items-center p-4">
      {/* Contenedor centrado con el mismo tamaño que productos */}
      <div className="flex flex-col gap-3 w-full max-w-[1100px]">
        <h1 className="text-3xl font-bold">Xestionar pedidos</h1>

        {/* Tabla de pedidos centrada e integrada igual que ProductsTable */}
        <BusinessOrdersTable
          items={data ?? []}
          loading={isLoading}
          error={error ? error.message : null}
          onStatusChangeAction={handleStatusChange}
        />
      </div>
    </section>
  );
}
