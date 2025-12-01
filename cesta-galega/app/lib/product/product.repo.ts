// lib/product/product.repo.ts

// Selects tipados y reutilizables
import { Prisma } from '@/app/generated/prisma';
import { prisma } from '@/app/lib/prisma'; // o de donde lo tengas
import { ProductCreateInput, ProductUpdateInput } from '@/app/lib/product/product.schema'; // Asegúrate de tener el DTO adecuado

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

export const productLiteWithCategoriesSelect = Prisma.validator<Prisma.ProductSelect>()({
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
  categories: {
    select: { id: true, name: true },
  },
});

export type ProductWithCategories = Prisma.ProductGetPayload<{
  select: typeof productLiteWithCategoriesSelect;
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
    select: productLiteWithCategoriesSelect,
    orderBy: { createdAt: 'desc' },
  });
}

export async function findProductByIdWithBusiness(id: number) {
  return prisma.product.findUnique({
    where: { id },
    include: productWithBusinessInclude,
  });
}

export async function getFilteredProducts(filters: {
  businessId?: number;
  search?: string;
  category?: string | null;
  sort?: string;
  minPrice?: number;
  maxPrice?: number;
}) {
  const { businessId, search, category, sort, minPrice, maxPrice } = filters;

  // WHERE dinámico
  const where: any = {
    deleted: false,
  };

  if (typeof businessId === 'number') {
    where.businessId = businessId;
  }

  if (search) {
    where.name = {
      contains: search,
      mode: 'insensitive',
    };
  }

  if (category) {
    where.categories = {
      some: { id: Number(category) },
    };
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    where.price = {};
    if (minPrice !== undefined) where.price.gte = minPrice;
    if (maxPrice !== undefined) where.price.lte = maxPrice;
  }

  // ORDENACIÓN
  let orderBy: any = { createdAt: 'desc' };

  if (sort === 'price_asc') orderBy = { price: 'asc' };
  if (sort === 'price_desc') orderBy = { price: 'desc' };

  // Query final
  return prisma.product.findMany({
    where,
    orderBy,
    include: {
      categories: true,
      business: true,
    },
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
