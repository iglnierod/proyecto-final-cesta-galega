import { getAuthTokenDecoded, isCookieValid, JwtPayloadBusiness } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import { BusinessDTO } from '@/app/lib/business/business.schema';
import { findBusinessByEmail } from '@/app/lib/business/business.repo';
import { toBusinessDTO } from '@/app/lib/business/business.mapper';
import { getBusinessDashboardStats, getBusinessRecentOrderLines } from '@/app/lib/order/order.repo';
import { getLatestReviewsForBusiness } from '@/app/lib/review/userProduct.repo';
import {
  BusinessDashboardStatsType,
  BusinessRecentOrderLineType,
  BusinessReviewSummaryType,
} from '@/app/lib/business/stats/stats.schema';

function formatCurrency(v: number) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(v);
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function itemStatusBadgeClasses(status: string) {
  switch (status) {
    case 'Pendiente':
      return 'badge badge-soft badge-warning';
    case 'Aceptado':
    case 'Preparando':
      return 'badge badge-soft badge-info';
    case 'Enviado':
      return 'badge badge-soft badge-primary';
    case 'Recibido':
      return 'badge badge-soft badge-success';
    case 'Cancelado':
      return 'badge badge-soft badge-error';
    default:
      return 'badge badge-soft badge-ghost';
  }
}

export default async function BusinessDashboard() {
  const loggedIn = await isCookieValid();
  if (!loggedIn) redirect('/business/login');

  const businessDecoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  const getBusiness = async () => {
    const res = await findBusinessByEmail(businessDecoded.email);
    if (res) {
      return toBusinessDTO(res);
    }
    redirect('/business/login');
  };

  const business: BusinessDTO = await getBusiness();

  const [stats, latestReviews, recentOrders]: [
    BusinessDashboardStatsType,
    BusinessReviewSummaryType[],
    BusinessRecentOrderLineType[],
  ] = await Promise.all([
    getBusinessDashboardStats(businessDecoded.businessId),
    getLatestReviewsForBusiness(businessDecoded.businessId, 2),
    getBusinessRecentOrderLines(businessDecoded.businessId, 5),
  ]);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-6 space-y-6">
      {/* CABECEIRA */}
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold">
            Benvido, <span className="text-primary">{business.name}</span>
          </h1>
          <p className="text-sm text-base-content/70">Resumo rápido da actividade da túa tenda.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="badge badge-soft badge-success text-xs">Conta verificada</span>
          {/* 🔻 Eliminado o badge de "60% perfil completado" */}
        </div>
      </header>

      {/* STATS RÁPIDAS */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Ingresos últimos 7 días */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-base-content/70">Ingresos últimos 7 días</p>
          <p className="text-2xl font-bold">{formatCurrency(stats.last7DaysRevenue)}</p>
          <p className="text-xs text-base-content/60">Suma de pedidos pagados nesta semana.</p>
        </div>

        {/* Pedidos pendentes */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-base-content/70">Liñas de pedido pendentes</p>
          <p className="text-2xl font-bold">{stats.pendingOrderLines}</p>
          <p className="text-xs text-base-content/60">
            Produtos en estados Pendente / Aceptado / Preparando.
          </p>
        </div>

        {/* Produtos activos */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 flex flex-col gap-2">
          <p className="text-xs font-semibold text-base-content/70">Produtos activos</p>
          <p className="text-2xl font-bold">{stats.activeProducts}</p>
          <p className="text-xs text-base-content/60">
            Produtos visibles na tenda (non eliminados).
          </p>
        </div>
      </section>

      {/* ÚLTIMOS PRODUTOS PEDIDOS */}
      <section className="mt-2 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Últimos produtos pedidos</h2>
        </div>

        {recentOrders.length === 0 ? (
          <p className="text-sm text-base-content/70">Aínda non tes pedidos rexistrados.</p>
        ) : (
          <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-3 sm:p-4">
            <div className="space-y-2 text-sm">
              {recentOrders.map((item) => (
                <article
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-base-200 last:border-b-0"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-base-content/60">Pedido #{item.orderId}</p>
                    <p className="font-medium truncate">
                      {item.quantity}×{' '}
                      <a
                        href={`/business/manage/products/preview/${item.productId}`}
                        className="hover:underline"
                      >
                        {item.productName}
                      </a>
                    </p>
                    <p className="text-xs text-base-content/60">{formatDate(item.createdAt)}</p>
                  </div>

                  <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                    <span className={itemStatusBadgeClasses(item.status)}>{item.status}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ÚLTIMAS VALORACIÓNS */}
      <section className="mt-4 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Últimas valoracións de usuarios</h2>
        </div>

        {latestReviews.length === 0 ? (
          <p className="text-sm text-base-content/70">
            Aínda non tes valoracións nos teus produtos.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-3">
            {latestReviews.map((rev) => (
              <article
                key={rev.id}
                className="border border-base-300 rounded-lg bg-base-100/80 p-3 sm:p-4 text-sm space-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="space-y-1">
                    <p className="text-xs text-base-content/70">
                      Produto:{' '}
                      <a
                        href={`/shop/product/${rev.productId}`}
                        className="font-semibold hover:underline"
                      >
                        {rev.productName}
                      </a>
                    </p>
                    <h3 className="font-semibold line-clamp-1">{rev.title}</h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="badge badge-soft badge-warning text-xs">
                      {rev.rating.toFixed(1)} / 5
                    </span>
                    <span className="text-xs text-base-content/60">
                      {formatDate(rev.createdAt)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-base-content/60">{rev.userName}</p>

                <p className="text-sm text-base-content/80 whitespace-pre-line mt-1">
                  {rev.review}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </section>
  );
}
