import prisma from '@/app/lib/prisma';
import {
  BusinessStatsType,
  CartItemType,
  RevenueByDayType,
  SalesByProvinceType,
  TopProductType,
} from '@/app/lib/business/stats/stats.schema';

export async function getBusinessTopProducts(
  businessId: number,
  limit: number = 5
): Promise<TopProductType[]> {
  const rows = await prisma.orderProduct.groupBy({
    by: ['productId'],
    where: {
      payed: true,
      product: {
        businessId,
      },
    },
    _sum: {
      quantity: true,
      subtotal: true,
    },
    orderBy: {
      _sum: {
        quantity: 'desc',
      },
    },
    take: limit,
  });

  const productIds = rows.map((r) => r.productId);
  if (productIds.length === 0) return [];

  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true },
  });

  const productMap = new Map(products.map((p) => [p.id, p.name]));

  return rows.map((r) => ({
    productId: r.productId,
    name: productMap.get(r.productId) ?? 'Produto',
    totalSold: r._sum.quantity ?? 0,
    totalRevenue: r._sum.subtotal ?? 0,
  }));
}

export async function getBusinessCartItems(businessId: number): Promise<CartItemType[]> {
  const rows = await prisma.orderProduct.groupBy({
    by: ['productId'],
    where: {
      product: {
        businessId,
      },
      order: {
        status: 'Carrito',
      },
    },
    _sum: {
      quantity: true,
    },
  });

  const productIds = rows.map((r) => r.productId);
  if (productIds.length === 0) return [];

  const products = await prisma.product.findMany({
    where: { id: { in: productIds } },
    select: { id: true, name: true },
  });

  const productMap = new Map(products.map((p) => [p.id, p.name]));

  return rows.map((r) => ({
    productId: r.productId,
    name: productMap.get(r.productId) ?? 'Produto',
    inCarts: r._sum.quantity ?? 0,
  }));
}

export async function getBusinessSalesByProvince(
  businessId: number
): Promise<SalesByProvinceType[]> {
  const items = await prisma.orderProduct.findMany({
    where: {
      payed: true,
      product: {
        businessId,
      },
    },
    include: {
      order: {
        include: {
          user: true,
        },
      },
    },
  });

  const map = new Map<string, SalesByProvinceType>();

  for (const item of items) {
    const province = item.order.user.province || 'Descoñecida';

    const current = map.get(province) ?? {
      province,
      totalOrders: 0,
      totalRevenue: 0,
    };

    current.totalOrders += 1; // poderías usar quantity se queres
    current.totalRevenue += item.subtotal;

    map.set(province, current);
  }

  return Array.from(map.values()).sort((a, b) => b.totalRevenue - a.totalRevenue);
}

export async function getBusinessLastMonthRevenue(
  businessId: number,
  days: number = 30
): Promise<RevenueByDayType[]> {
  const now = new Date();
  const from = new Date();
  from.setDate(now.getDate() - days);

  const items = await prisma.orderProduct.findMany({
    where: {
      payed: true,
      product: {
        businessId,
      },
      order: {
        createdAt: {
          gte: from,
        },
      },
    },
    include: {
      order: true,
    },
  });

  const map = new Map<string, number>();

  for (const item of items) {
    const dateKey = item.order.createdAt.toISOString().slice(0, 10); // YYYY-MM-DD
    const current = map.get(dateKey) ?? 0;
    map.set(dateKey, current + item.subtotal);
  }

  return Array.from(map.entries())
    .map<RevenueByDayType>(([date, total]) => ({ date, total }))
    .sort((a, b) => a.date.localeCompare(b.date));
}

export async function getBusinessStats(businessId: number): Promise<BusinessStatsType> {
  const [topProducts, cartItems, salesByProvince, lastMonthRevenue] = await Promise.all([
    getBusinessTopProducts(businessId),
    getBusinessCartItems(businessId),
    getBusinessSalesByProvince(businessId),
    getBusinessLastMonthRevenue(businessId),
  ]);

  return {
    topProducts,
    cartItems,
    salesByProvince,
    lastMonthRevenue,
  };
}
