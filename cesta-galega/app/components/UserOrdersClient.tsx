'use client';

import useSWR from 'swr';
import Link from 'next/link';
import Image from 'next/image';
import { OrderDTO, OrderProductDTO } from '@/app/lib/order/order.schema';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useAlert } from '@/app/context/AlertContext';
import ReviewForm from '@/app/components/ReviewForm';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type OrdersApiResponse = {
  orders: OrderDTO[];
};

type OrderItemWithImage = OrderProductDTO & {
  productImage?: string | null;
  payed?: boolean;
};

type OrderWithItemsAndImage = Omit<OrderDTO, 'items'> & {
  items: OrderItemWithImage[];
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function orderStatusBadgeClasses(status: OrderDTO['status']) {
  switch (status) {
    case 'Pagado':
      return 'badge badge-soft badge-success';
    case 'Directo':
      return 'badge badge-soft badge-info';
    case 'Carrito':
      return 'badge badge-soft badge-warning';
    default:
      return 'badge badge-soft badge-ghost';
  }
}

function itemStatusBadgeClasses(status: OrderProductDTO['status']) {
  switch (status) {
    case 'Pendiente':
      return 'badge badge-soft badge-warning';
    case 'Aceptado':
    case 'Preparando':
    case 'Enviado':
      return 'badge badge-soft badge-info';
    case 'Cancelado':
      return 'badge badge-soft badge-error';
    default:
      return 'badge badge-soft badge-ghost';
  }
}

export default function UserOrdersClient() {
  const { data, error, isLoading, mutate } = useSWR<OrdersApiResponse>('/api/order/user', fetcher);

  const rawOrders = data?.orders ?? [];
  const orders = rawOrders as OrderWithItemsAndImage[];

  const MySwal = withReactContent(Swal);
  const { showAlert } = useAlert();

  const handleOpenReviewModal = (orderId: number, productId: number, productName: string) => {
    void MySwal.fire({
      title: `Valorar ${productName}`,
      html: (
        <ReviewForm
          orderId={orderId}
          productId={productId}
          productName={productName}
          onSuccessAction={async () => {
            showAlert('Grazas pola túa valoración!', 'success');
            await mutate();
          }}
        />
      ),
      showConfirmButton: false,
      width: 800,
    });
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-12">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-error text-center mt-8">Houbo un erro ao cargar os pedidos.</p>;
  }

  if (!orders.length) {
    return (
      <div className="mt-8 text-center space-y-4">
        <p className="text-base-content/70">Aínda non tes pedidos realizados.</p>
        <Link href="/shop" className="btn btn-primary">
          Ir á tenda
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6 w-full max-w-4xl mx-auto px-2 space-y-6">
      {orders.map((order) => (
        <article
          key={order.id}
          className="card bg-base-100 border border-base-300 rounded-lg shadow-sm p-4 sm:p-5 space-y-4"
        >
          {/* Cabeceira do pedido */}
          <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="font-semibold text-lg">Pedido #{order.id}</h2>
              <p className="text-xs text-base-content/70">
                Realizado o {formatDate(order.createdAt)}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-1">
              <span className={orderStatusBadgeClasses(order.status)}>{order.status}</span>
              <p className="text-sm font-medium">Total: {order.total.toFixed(2)} €</p>
            </div>
          </header>

          {/* Lista de produtos do pedido */}
          <div className="border-t border-base-200 pt-3 space-y-3 text-sm">
            {order.items.map((item) => {
              const productHref = `/shop/product/${item.productId}`;
              const imgSrc = item.productImage ?? '';
              const hasImage = !!imgSrc;
              const canReview = item.status === 'Enviado' && item.payed;

              const StatusAndActions = (
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <span className={itemStatusBadgeClasses(item.status)}>{item.status}</span>

                  {canReview && (
                    <button
                      type="button"
                      className="btn btn-ghost btn-xs mt-1"
                      onClick={() =>
                        handleOpenReviewModal(order.id, item.productId, item.productName)
                      }
                    >
                      Valorar produto
                    </button>
                  )}
                </div>
              );

              if (hasImage) {
                return (
                  <div key={item.id} className="flex flex-col sm:flex-row sm:items-center gap-3">
                    {/* Imaxe do produto */}
                    <Link
                      href={productHref}
                      className="relative w-full max-w-[80px] h-[80px] rounded-md bg-base-200 overflow-hidden shrink-0"
                    >
                      <Image src={imgSrc} alt={item.productName} fill className="object-cover" />
                    </Link>

                    {/* Info principal */}
                    <div className="flex-1 flex flex-col gap-1">
                      <Link href={productHref} className="font-medium hover:underline line-clamp-2">
                        {item.quantity}× {item.productName}
                      </Link>
                      <p className="text-xs text-base-content/70">
                        Prezo unidade: {item.unitPrice.toFixed(2)} € — Subtotal:{' '}
                        {item.subtotal.toFixed(2)} €
                      </p>
                    </div>

                    {/* Estado / pago / valorar */}
                    {StatusAndActions}
                  </div>
                );
              }

              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex-1 flex flex-col gap-1">
                    <Link href={productHref} className="font-medium hover:underline line-clamp-2">
                      {item.quantity}× {item.productName}
                    </Link>
                    <p className="text-xs text-base-content/70">
                      Prezo unidade: {item.unitPrice.toFixed(2)} € — Subtotal:{' '}
                      {item.subtotal.toFixed(2)} €
                    </p>
                  </div>

                  {/* Estado / pago / valorar */}
                  {StatusAndActions}
                </div>
              );
            })}
          </div>
        </article>
      ))}
    </div>
  );
}
