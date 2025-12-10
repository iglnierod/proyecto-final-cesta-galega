'use client';

import useSWR from 'swr';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BusinessStatsType } from '@/app/lib/business/stats/stats.schema';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type BusinessStatsApiResponse = {
  stats: BusinessStatsType;
};

const PIE_COLORS = ['#0ea5e9', '#22c55e', '#f97316', '#eab308', '#ec4899', '#6366f1'];

const currency = (v: number) =>
  new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v);

export default function BusinessStatsClient({ businessId }: { businessId: number }) {
  const { data, error, isLoading } = useSWR<BusinessStatsApiResponse>(
    '/api/business/stats',
    fetcher
  );

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-12">
        <span className="loading loading-spinner text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-error text-center mt-8">
        Houbo un erro ao cargar as estatísticas da tenda.
      </p>
    );
  }

  if (!data?.stats) {
    return (
      <p className="text-base-content/70 text-center mt-8">
        Non se atoparon estatísticas para esta tenda.
      </p>
    );
  }

  const { topProducts, cartItems, salesByProvince, lastMonthRevenue } = data.stats;

  const revenueSorted = [...lastMonthRevenue].sort((a, b) => a.date.localeCompare(b.date));
  const totalLastMonth = revenueSorted.reduce((acc, d) => acc + d.total, 0);

  return (
    <section className="w-full max-w-5xl mx-auto space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Estatísticas da tenda</h1>
        <p className="text-sm text-base-content/70">
          Resumo visual de vendas, carriños e rendemento recente.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1) Produtos máis vendidos */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 space-y-3">
          <h2 className="font-semibold text-lg">Produtos máis vendidos</h2>
          {topProducts.length === 0 ? (
            <p className="text-sm text-base-content/70">Aínda non hai vendas rexistradas.</p>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topProducts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" hide />
                  <YAxis />
                  <Tooltip
                    formatter={(value: any, name: any) =>
                      name === 'totalSold' ? [`${value} uds`, 'Unidades vendidas'] : value
                    }
                  />
                  <Legend />
                  <Bar
                    dataKey="totalSold"
                    name="Unidades vendidas"
                    fill="#0ea5e9"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* 2) Produtos en carriños */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 space-y-3">
          <h2 className="font-semibold text-lg">Produtos en carriños</h2>
          {cartItems.length === 0 ? (
            <p className="text-sm text-base-content/70">
              Actualmente non hai produtos en carriños de usuarias/os.
            </p>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={cartItems}
                  layout="vertical"
                  margin={{ left: 80, right: 16, top: 8, bottom: 8 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip
                    formatter={(value: any) => [`${value} carriños`, 'En carriños']}
                    labelFormatter={(label: any) => label}
                  />
                  <Legend />
                  <Bar dataKey="inCarts" name="En carriños" fill="#22c55e" radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* 3) Vendas por provincia */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 space-y-3">
          <h2 className="font-semibold text-lg">Vendas por provincia</h2>
          {salesByProvince.length === 0 ? (
            <p className="text-sm text-base-content/70">
              Aínda non hai datos de vendas por provincia.
            </p>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    formatter={(value: any, _name: any, entry: any) => {
                      const v = value as number;
                      return [currency(v), entry.payload.province];
                    }}
                  />
                  <Legend />
                  <Pie
                    data={salesByProvince}
                    dataKey="totalRevenue"
                    nameKey="province"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={(entry) => entry.payload.province}
                  >
                    {salesByProvince.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* 4) Ingresos últimos 30 días */}
        <div className="card bg-base-100 border border-base-300 rounded-xl shadow-sm p-4 space-y-3">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold text-lg">Ingresos últimos 30 días</h2>
            <p className="text-xs text-base-content/70">
              Total: <span className="font-semibold">{currency(totalLastMonth)}</span>
            </p>
          </div>

          {revenueSorted.length === 0 ? (
            <p className="text-sm text-base-content/70">
              Non hai ingresos rexistrados nos últimos 30 días.
            </p>
          ) : (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueSorted}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="date"
                    tickFormatter={(d: string) => d.slice(5)} // mostra só MM-DD
                  />
                  <YAxis />
                  <Tooltip
                    formatter={(value: any) => [currency(value as number), 'Ingresos']}
                    labelFormatter={(label: any) => `Data: ${label}`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="total"
                    name="Ingresos"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={{ r: 3, strokeWidth: 1 }}
                    activeDot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
