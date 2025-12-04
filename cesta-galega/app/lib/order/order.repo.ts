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

// Helper: obter o prezo final dun produto (aplicando desconto se existe)
async function getProductFinalPrice(productId: number) {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error('Produto non dispoñible');
  }

  const unitPrice = product.discounted
    ? Math.max(0, product.price * (1 - product.discount / 100))
    : product.price;

  return { product, unitPrice };
}

// Buscar o carrito activo (Order con status "Carrito") para un usuario
export async function findActiveCartByUser(userId: number) {
  return prisma.order.findFirst({
    where: {
      userId,
      status: 'Carrito',
    },
    include: {
      OrderProduct: {
        include: {
          product: true,
        },
      },
    },
  });
}

// Crear un carrito baleiro para un usuario
export async function createEmptyCartForUser(userId: number) {
  return prisma.order.create({
    data: {
      status: 'Carrito',
      total: 0,
      // De momento deixamos a dirección e método por defecto/simple
      shippingAddress: '',
      paymentMethod: 'Tarjeta',
      userId,
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
}

// Recalcular o total dun pedido (carrito ou directo)
async function recalcOrderTotal(orderId: number) {
  const items = await prisma.orderProduct.findMany({
    where: { orderId },
  });

  const total = items.reduce((acc, item) => acc + item.subtotal, 0);

  await prisma.order.update({
    where: { id: orderId },
    data: { total },
  });
}

// Engadir (ou incrementar) un produto no carriño do usuario
export async function addItemToCart(userId: number, productId: number, quantity: number) {
  if (quantity <= 0) {
    throw new Error('A cantidade debe ser maior ca cero');
  }

  // Obter (ou crear) o carriño activo
  let cart = await findActiveCartByUser(userId);
  if (!cart) {
    cart = await createEmptyCartForUser(userId);
  }

  const { unitPrice } = await getProductFinalPrice(productId);

  // Ver se xa existe unha liña para este produto no carriño
  const existingItem = await prisma.orderProduct.findFirst({
    where: {
      orderId: cart.id,
      productId,
    },
  });

  if (existingItem) {
    const newQty = existingItem.quantity + quantity;
    const newSubtotal = newQty * unitPrice;

    await prisma.orderProduct.update({
      where: { id: existingItem.id },
      data: {
        quantity: newQty,
        unitPrice,
        subtotal: newSubtotal,
      },
    });
  } else {
    await prisma.orderProduct.create({
      data: {
        orderId: cart.id,
        productId,
        quantity,
        unitPrice,
        subtotal: unitPrice * quantity,
        status: 'Pendiente',
      },
    });
  }

  // Recalcular total do carriño
  await recalcOrderTotal(cart.id);

  // Devolver carriño actualizado
  return findActiveCartByUser(userId);
}

// Obter o carriño actual dun usuario (ou null se non existe)
export async function getCartForUser(userId: number) {
  const cart = await findActiveCartByUser(userId);
  return cart ?? null;
}
