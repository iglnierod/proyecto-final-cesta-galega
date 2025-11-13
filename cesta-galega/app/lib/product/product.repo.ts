// lib/product/product.repo.ts

// Selects tipados y reutilizables
import { Prisma } from '@/app/generated/prisma';
import { prisma } from '@/app/lib/prisma';
import { ProductCreateInput, ProductUpdateInput } from '@/app/lib/product/product.schema';

export const productLiteSelect = Prisma.validator<Prisma.ProductSelect>()({
  id: true,
  name: true,
  description: true,
  price: true,
  discounted: true,
  discount: true,
  enabled: true,
  image: true,
  deleted: true,
  createdAt: true,
});

export type ProductLite = Prisma.ProductGetPayload<{
  select: typeof productLiteSelect;
}>;

export const productWithBusinessInclude = Prisma.validator<Prisma.ProductInclude>()({
  business: {
    select: { id: true, name: true, province: true, city: true },
  },
  categories: {
    select: { id: true, name: true },
  },
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

export async function createProduct(data: ProductCreateInput) {
  const { categoryIds, ...productData } = data;

  return prisma.product.create({
    data: {
      ...productData,
      categories: categoryIds.length
        ? {
            connect: categoryIds.map((id) => ({ id })),
          }
        : undefined,
    },
    include: productWithBusinessInclude,
  });
}

export async function updateProduct(id: number, data: ProductUpdateInput) {
  const { categoryIds, ...productData } = data;

  return prisma.product.update({
    where: { id },
    data: {
      ...productData,
      ...(categoryIds
        ? {
            categories: {
              set: categoryIds.map((categoryId) => ({ id: categoryId })),
            },
          }
        : {}),
    },
    include: productWithBusinessInclude,
  });
}

export async function softDeleteProduct(id: number) {
  return prisma.product.update({
    where: { id },
    data: {
      deleted: true,
      enabled: false,
    },
    include: productWithBusinessInclude,
  });
}
