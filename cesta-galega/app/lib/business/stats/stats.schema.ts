import { z } from 'zod';

export const TopProductTypeObj = z.object({
  productId: z.number(),
  name: z.string(),
  totalSold: z.number(),
  totalRevenue: z.number(),
});
export type TopProductType = z.infer<typeof TopProductTypeObj>;

export const CartItemTypeObj = z.object({
  productId: z.number(),
  name: z.string(),
  inCarts: z.number(),
});
export type CartItemType = z.infer<typeof CartItemTypeObj>;

export const SalesByProvinceTypeObj = z.object({
  province: z.string(),
  totalOrders: z.number(),
  totalRevenue: z.number(),
});
export type SalesByProvinceType = z.infer<typeof SalesByProvinceTypeObj>;

export const RevenueByDayTypeObj = z.object({
  date: z.string(),
  total: z.number(),
});
export type RevenueByDayType = z.infer<typeof RevenueByDayTypeObj>;

export const BusinessStatsTypeObj = z.object({
  topProducts: TopProductTypeObj.array(),
  cartItems: CartItemTypeObj.array(),
  salesByProvince: SalesByProvinceTypeObj.array(),
  lastMonthRevenue: RevenueByDayTypeObj.array(),
});
export type BusinessStatsType = z.infer<typeof BusinessStatsTypeObj>;
