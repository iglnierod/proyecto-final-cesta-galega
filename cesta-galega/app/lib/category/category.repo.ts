import { Prisma } from '@/app/generated/prisma';
import prisma from '@/app/lib/prisma';
import { productLiteSelect } from '@/app/lib/product/product.repo';

// Select básico de categoría pública
export const categoryPublicSelect = Prisma.validator<Prisma.CategorySelect>()({
  id: true,
  name: true,
});

export type CategoryPublic = Prisma.CategoryGetPayload<{
  select: typeof categoryPublicSelect;
}>;

// Categoría + produtos (para cando queiras produtos por categoría)
export const categoryWithProductsInclude = Prisma.validator<Prisma.CategoryInclude>()({
  products: {
    select: productLiteSelect,
  },
});

export type CategoryWithProducts = Prisma.CategoryGetPayload<{
  include: typeof categoryWithProductsInclude;
}>;

// Obtener todas as categorías globais (sen info de empresa)
export async function getCategories() {
  return prisma.category.findMany({
    select: categoryPublicSelect,
    orderBy: { name: 'asc' },
  });
}

// Obtener unha categoría xunto cos seus produtos
export async function findCategoryWithProducts(id: number) {
  return prisma.category.findUnique({
    where: { id },
    include: categoryWithProductsInclude,
  });
}
