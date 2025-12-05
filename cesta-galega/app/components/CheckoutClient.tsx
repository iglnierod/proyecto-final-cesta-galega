'use client';

import { FormEvent, useState } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import {
  CheckoutOrderDTO,
  OrderCheckoutFormInput,
  OrderCheckoutFormSchema,
} from '@/app/lib/order/order.schema';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type CheckoutApiResponse = {
  order: CheckoutOrderDTO;
};

export default function CheckoutClient({ orderId }: { orderId: number }) {
  const router = useRouter();

  const { data, error, isLoading } = useSWR<CheckoutApiResponse>(`/api/order/${orderId}`, fetcher);

  const order = data?.order ?? null;
  const items = order?.items ?? [];
  const productsTotal = order?.total ?? items.reduce((acc, it) => acc + it.subtotal, 0);

  const shippingCost = 3.99;
  const grandTotal = productsTotal + shippingCost;

  const [formData, setFormData] = useState<OrderCheckoutFormInput>({
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    paymentMethod: 'Tarjeta',
  });

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      if (!order || items.length === 0) {
        setErrorMsg('Non hai produtos neste pedido.');
        setLoading(false);
        return;
      }

      // ✅ Validar co schema de Zod, igual que en ProductForm
      const result = OrderCheckoutFormSchema.safeParse(formData);
      if (!result.success) {
        const error = result.error.issues[0];
        setErrorMsg(error.message);
        setLoading(false);
        return;
      }

      const safeData = result.data;

      // Construír shippingAddress para o backend
      const shippingAddress = `${safeData.fullName}
${safeData.address}
${safeData.postalCode} ${safeData.city}
${safeData.province}`;

      const res = await fetch(`/api/order/${orderId}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          shippingAddress,
          paymentMethod: safeData.paymentMethod,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error ?? 'Produciuse un erro ao procesar o pedido.');
      }

      // Compra simulada → rediriximos á tenda (ou páxina de obrigado se a creas)
      router.push('/shop');
    } catch (err: any) {
      console.error(err?.message ?? err);
      setErrorMsg(err?.message ?? 'Produciuse un erro inesperado ao procesar o pedido.');
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-12">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (error || !order) {
    return <p className="text-error text-center mt-8">Non se puido cargar o pedido.</p>;
  }

  if (items.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-base-content/70 mb-4">Este pedido non ten produtos.</p>
        <button className="btn btn-primary" onClick={() => router.push('/shop')}>
          Ir á tenda
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
      {/* Columna esquerda: formulario */}
      <section className="w-full md:w-2/3">
        <form
          onSubmit={handleSubmit}
          className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm p-6 space-y-6"
        >
          <h2 className="font-semibold text-lg">
            Datos de envío ({order.status === 'Carrito' ? 'pedido desde carriño' : 'compra directa'}
            )
          </h2>

          {errorMsg && (
            <div className="alert alert-soft alert-error text-sm">
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Nome */}
          <div className="space-y-1">
            <label htmlFor="fullName" className="label-text text-sm font-medium">
              Nome completo
            </label>
            <input
              id="fullName"
              className="input w-full"
              placeholder="Nome e apelidos"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>

          {/* Enderezo */}
          <div className="space-y-1">
            <label htmlFor="address" className="label-text text-sm font-medium">
              Enderezo
            </label>
            <textarea
              id="address"
              className="textarea w-full min-h-24"
              placeholder="Rúa, número, piso..."
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>

          {/* Cidade / Provincia */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="city" className="label-text text-sm font-medium">
                Cidade
              </label>
              <input
                id="city"
                className="input w-full"
                placeholder="Cidade"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="province" className="label-text text-sm font-medium">
                Provincia
              </label>
              <input
                id="province"
                className="input w-full"
                placeholder="Provincia"
                value={formData.province}
                onChange={(e) => setFormData({ ...formData, province: e.target.value })}
              />
            </div>
          </div>

          {/* Código postal */}
          <div className="space-y-1 max-w-xs">
            <label htmlFor="postalCode" className="label-text text-sm font-medium">
              Código postal
            </label>
            <input
              id="postalCode"
              className="input w-full"
              placeholder="12345"
              value={formData.postalCode}
              onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            />
          </div>

          {/* Método de pago */}
          <div className="space-y-2">
            <p className="label-text text-sm font-medium">Método de pago</p>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                className="radio radio-primary"
                checked={formData.paymentMethod === 'Tarjeta'}
                onChange={() => setFormData({ ...formData, paymentMethod: 'Tarjeta' })}
              />
              <span className="text-sm">Tarxeta (simulación)</span>
            </label>
          </div>

          <div className="pt-2">
            <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={loading}>
              {loading ? 'Procesando pedido...' : 'Confirmar compra'}
            </button>
          </div>
        </form>
      </section>

      {/* Columna dereita: resumo do pedido */}
      <aside className="w-full md:w-1/3">
        <div className="card bg-base-100 border border-base-300 rounded-2xl shadow-sm p-4 space-y-4">
          <h2 className="font-semibold text-lg">Resumo do pedido</h2>

          <div className="space-y-2 text-sm max-h-64 overflow-auto pr-1">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between gap-2">
                <span className="line-clamp-1">
                  {item.quantity}× {item.product.name}
                </span>
                <span>{item.subtotal.toFixed(2)} €</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Produtos</span>
              <span>{productsTotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-base-content/70">
              <span>Gastos de envío</span>
              <span>{shippingCost.toFixed(2)} €</span>
            </div>
            <div className="border-t border-base-300 pt-2 mt-2 flex justify-between font-semibold">
              <span>Total</span>
              <span>{grandTotal.toFixed(2)} €</span>
            </div>
          </div>

          <p className="text-xs text-base-content/70">
            Nesta fase a compra é unha simulación, non se realiza ningún pago real.
          </p>
        </div>
      </aside>
    </div>
  );
}
