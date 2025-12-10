// app/lib/userProduct/userProduct.repo.ts
import prisma from '@/app/lib/prisma';
import { ProductReviewCreateInput } from '@/app/lib/review/userProduct.schema';
import { BusinessReviewSummaryType } from '@/app/lib/business/stats/stats.schema';

// Crea ou actualiza a valoración dun produto a partir dun pedido
export async function createOrUpdateReviewFromOrderProduct(
  userId: number,
  orderId: number,
  input: ProductReviewCreateInput
) {
  const { productId, rating, title, review } = input;

  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId,
      status: {
        notIn: ['Carrito', 'Directo'],
      },
    },
    include: {
      OrderProduct: true,
    },
  });

  if (!order) {
    throw new Error('Non tes permiso para este pedido');
  }

  const hasProductInOrder = order.OrderProduct.some((op) => op.productId === productId);

  if (!hasProductInOrder) {
    throw new Error('O produto non pertence a este pedido');
  }

  const existing = await prisma.userProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });

  if (existing) {
    const updated = await prisma.userProduct.update({
      where: { id: existing.id },
      data: {
        rating,
        title,
        review,
      },
    });

    return updated;
  }

  const created = await prisma.userProduct.create({
    data: {
      userId,
      productId,
      rating,
      title,
      review,
    },
  });

  return created;
}

export async function getReviewsForProduct(productId: number) {
  return prisma.userProduct.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
    include: {
      user: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
}

export async function getReviewFromOrderProduct(
  userId: number,
  orderId: number,
  productId: number
) {
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId,
      status: {
        notIn: ['Carrito'], // opcional
      },
    },
    include: {
      OrderProduct: true,
    },
  });

  if (!order) {
    throw new Error('Non tes permiso para ver este pedido');
  }

  const hasProductInOrder = order.OrderProduct.some((op) => op.productId === productId);

  if (!hasProductInOrder) {
    throw new Error('O produto non pertence a este pedido');
  }

  const review = await prisma.userProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });

  return review;
}

export async function findReviewsForProduct(productId: number) {
  return prisma.userProduct.findMany({
    where: { productId },
    include: {
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
}

/* DASHBOARD */
export async function getLatestReviewsForBusiness(
  businessId: number,
  limit: number = 2
): Promise<BusinessReviewSummaryType[]> {
  const rows = await prisma.userProduct.findMany({
    where: {
      product: {
        businessId,
      },
    },
    include: {
      user: true,
      product: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: limit,
  });

  return rows.map((r) => ({
    id: r.id,
    productId: r.productId,
    productName: r.product.name,
    title: r.title,
    review: r.review,
    rating: r.rating,
    createdAt: r.createdAt.toISOString(),
    userName: r.user.name,
  }));
}
