import { OrderCreateInput, OrderProductStatus } from '@/app/lib/order/order.schema';
import prisma from '@/app/lib/prisma';

export async function createOrder(data: OrderCreateInput) {
  const products = await prisma.product.findMany({
    where: {
      id: { in: data.items.map((i) => i.productId) },
    },
  });

  if (products.length !== data.items.length) {
    throw new Error('Houbo algún problema ao obter un dos produtos');
  }

  const orderProductsData = data.items.map((item) => {
    const product = products.find((p) => p.id === item.productId)!;

    const unitPrice = product.discounted
      ? Math.max(0, product.price * (1 - product.discount / 100))
      : product.price;

    const subtotal = unitPrice * item.quantity;

    return {
      productId: item.productId,
      quantity: item.quantity,
      unitPrice,
      subtotal,
      status: 'Pendiente',
    };
  });

  const total = orderProductsData.reduce((acc, item) => acc + item.subtotal, 0);

  const order = await prisma.order.create({
    data: {
      status: data.status,
      shippingAddress: data.shippingAddress,
      paymentMethod: data.paymentMethod,
      total,
      userId: data.userId,
      OrderProduct: {
        create: orderProductsData,
      },
    },
    include: {
      OrderProduct: {
        include: {
          product: true,
        },
      },
      user: true,
    },
  });

  return order;
}

export async function getOrdersForBusiness(businessId: number) {
  const items = await prisma.orderProduct.findMany({
    where: {
      product: {
        businessId,
      },
    },
    include: {
      product: true,
      order: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      id: 'desc',
    },
  });

  return items;
}

export async function updateOrderProductStatusForBusiness(
  businessId: number,
  orderProductId: number,
  status: OrderProductStatus
) {
  const existing = await prisma.orderProduct.findUnique({
    where: { id: orderProductId },
    include: {
      product: true,
      order: {
        include: {
          user: true,
        },
      },
    },
  });

  if (!existing) {
    throw new Error('Non se atopou o produto');
  }

  if (existing.product.businessId !== businessId) {
    throw new Error('Non está autorizado a actualizar o estado de este produto');
  }

  const updated = await prisma.orderProduct.update({
    where: { id: orderProductId },
    data: {
      status,
    },
    include: {
      product: true,
      order: {
        include: {
          user: true,
        },
      },
    },
  });

  return updated;
}
