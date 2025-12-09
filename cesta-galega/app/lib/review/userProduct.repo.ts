import prisma from '@/app/lib/prisma';
import { ProductReviewCreateInput } from '@/app/lib/review/userProduct.schema';

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
