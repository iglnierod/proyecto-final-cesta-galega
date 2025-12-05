'use client';

import { useRouter } from 'next/navigation';
import useSWR, { mutate } from 'swr';
import Image from 'next/image';
import { useAlert } from '@/app/context/AlertContext';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type CartClientProps = {
  loggedIn: boolean;
};

type CartItem = {
  id: number;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  product: {
    id: number;
    name: string;
    image: string | null;
  };
};

type Cart = {
  id: number;
  total: number;
  OrderProduct: CartItem[];
};

export default function CartClient({ loggedIn }: CartClientProps) {
  const router = useRouter();
  const { showAlert } = useAlert();

  const { data, error, isLoading } = useSWR<{ cart: Cart | null }>('/api/cart', fetcher);

  const cart = data?.cart ?? null;
  const items: CartItem[] = cart?.OrderProduct ?? [];

  const productsTotal = cart?.total ?? items.reduce((acc, item) => acc + item.subtotal, 0);

  const shippingCost = 3.99;
  const grandTotal = productsTotal + shippingCost;

  const handleUpdateQuantity = async (itemId: number, newQty: number) => {
    if (newQty < 1) return;
    const res = await fetch('/api/cart', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderProductId: itemId, quantity: newQty }),
    });
    if (res.ok) {
      showAlert('Actualizando cantidade...', 'info');
      mutate('/api/cart');
    }
  };

  const handleRemoveItem = async (itemId: number) => {
    const res = await fetch('/api/cart', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ orderProductId: itemId }),
    });
    if (res.ok) {
      showAlert('Eliminando do carro...', 'info');
      mutate('/api/cart');
    }
  };

  const handleCheckout = () => {
    console.log('ir a realizar a compra');
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-12">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-error text-center mt-8">Houbo un erro ao cargar o carriño.</p>;
  }

  if (!cart || items.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-base-content/70 mb-4">O teu carriño está baleiro.</p>
        <button className="btn btn-primary" onClick={() => router.push('/shop')}>
          Ir á tenda
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-col md:flex-row gap-6 w-full max-w-7xl mx-auto">
      {/* Columna esquerda: lista de produtos */}
      <section className="w-full md:w-2/3 space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-stretch justify-between gap-4 p-4 border border-base-300 rounded-2xl bg-base-100/80 shadow-sm"
          >
            {/* Bloque esquerdo: imaxe + info básica */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-base-200 overflow-hidden shrink-0">
                {item.product.image ? (
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs text-base-content/60">
                    Sen imaxe
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center gap-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                  {item.product.name}
                </h3>
                <p className="text-xs sm:text-sm text-base-content/70">
                  Prezo unidade: {item.unitPrice.toFixed(2)} €
                </p>
              </div>
            </div>

            {/* Bloque dereito: cantidade + prezo + papelera */}
            <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between gap-3 sm:gap-2 min-w-[180px]">
              {/* Cantidade */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="btn btn-xs btn-outline rounded"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  className="input input-xs w-16 text-center rounded"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, Math.max(1, Number(e.target.value) || 1))
                  }
                  disabled={true}
                />
                <button
                  type="button"
                  className="btn btn-xs btn-outline rounded"
                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              {/* Prezo + papelera */}
              <div className="flex items-center gap-3">
                <span className="font-semibold text-sm sm:text-base">
                  {item.subtotal.toFixed(2)} €
                </span>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  title="Eliminar produto"
                  className="btn btn-circle btn-text btn-sm"
                  aria-label="Eliminar produto"
                >
                  <span className="icon-[tabler--trash] size-5 text-base-content"></span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Columna dereita: resumo de gastos */}
      <aside className="w-full md:w-1/3">
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 space-y-4">
          <h2 className="font-semibold text-lg">Resumo do pedido</h2>

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

          <button type="button" className="btn btn-primary w-full mt-2" onClick={handleCheckout}>
            Ir a realizar a compra
          </button>
        </div>
      </aside>
    </div>
  );
}
