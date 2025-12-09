import prisma from '@/app/lib/prisma';
import { ProductReviewCreateInput } from '@/app/lib/review/userProduct.schema';

// Crea ou actualiza a valoración dun produto a partir dun pedido
export async function createOrUpdateReviewFromOrderProduct(
  userId: number,
  orderId: number,
  input: ProductReviewCreateInput
) {
  const { productId, rating, title, review } = input;

  // 1. Comprobar que o pedido é do usuario e contén ese produto
  const order = await prisma.order.findFirst({
    where: {
      id: orderId,
      userId,
      status: {
        notIn: ['Carrito'], // opcional, por se non queres valorar carritos
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

  // 2. Buscar se o usuario xa ten unha valoración para este produto
  const existing = await prisma.userProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });

  if (existing) {
    // 3a. Actualizar valoración existente
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

  // 3b. Crear nova valoración
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

// Para máis adiante: obter as valoracións dun produto
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
  // 1) Comprobar que o pedido é do usuario e contén ese produto
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

  // 2) Devolver a review da táboa UserProduct (se existe)
  const review = await prisma.userProduct.findFirst({
    where: {
      userId,
      productId,
    },
  });

  return review; // pode ser null
}
