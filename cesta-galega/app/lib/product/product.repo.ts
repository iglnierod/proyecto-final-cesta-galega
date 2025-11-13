// lib/product/product.repo.ts

// Selects tipados y reutilizables
import { Prisma } from '@/app/generated/prisma';
import { prisma } from '@/app/lib/prisma';

export const productLiteSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  price: true,
  discounted: true,
  discount: true,
  enabled: true,
  image: true,
});

export type ProductLite = Prisma.ProductGetPayload<{ select: typeof productLiteSelect }>;

export const productWithBusinessInclude = Prisma.validator<Prisma.ProductInclude>()({
  business: {
    select: { id: true, name: true, province: true, city: true },
  },
  // categories: { select: { id: true, name: true }},
});

export type ProductWithBusiness = Prisma.ProductGetPayload<{
  include: typeof productWithBusinessInclude;
}>;

export async function findProductsByBusiness(businessId: number) {
  return prisma.product.findMany({
    where: { businessId, deleted: false },
    select: productLiteSelect,
    orderBy: { createdAt: 'desc' },
  });
}

export async function findProductByIdWithBusiness(id: number) {
  return prisma.product.findUnique({
    where: { id },
    include: productWithBusinessInclude,
  });
}

export async function createProduct(data: Prisma.ProductCreateInput) {
  // o usa los campos que aceptas exactamente desde ProductCreateInput -> map
  return prisma.product.create({ data, include: productWithBusinessInclude });
}

export async function updateProduct(id: number, data: Prisma.ProductUpdateInput) {
  return prisma.product.update({ where: { id }, data, include: productWithBusinessInclude });
}
