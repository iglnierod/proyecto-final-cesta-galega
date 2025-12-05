import { z } from 'zod';
import {
  BusinessOrderItemDTO,
  CheckoutOrderDTO,
  OrderDTO,
  OrderProductDTO,
  OrderProductStatus,
} from './order.schema';
import { Order, OrderProduct, Product, User } from '@/app/generated/prisma';

type OrderWithRelations = Order & {
  OrderProduct: (OrderProduct & { product: Product })[];
  user?: User | null;
};

type OrderProductWithRelations = OrderProduct & {
  product: Product;
  order: Order & { user: User };
};

export function toOrderDTO(order: OrderWithRelations): z.infer<typeof OrderDTO> {
  const items: z.infer<typeof OrderProductDTO>[] = order.OrderProduct.map((op) => ({
    id: op.id,
    productId: op.productId,
    productName: op.product.name,
    quantity: op.quantity,
    unitPrice: op.unitPrice,
    subtotal: op.subtotal,
    status: op.status as z.infer<typeof OrderProductDTO>['status'],
  }));

  return {
    id: order.id,
    status: order.status as z.infer<typeof OrderDTO>['status'],
    total: order.total,
    shippingAddress: order.shippingAddress,
    paymentMethod: order.paymentMethod as z.infer<typeof OrderDTO>['paymentMethod'],
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
    userId: order.userId,
    items,
  };
}

export function toBusinessOrderItemDTO(
  item: OrderProductWithRelations
): z.infer<typeof BusinessOrderItemDTO> {
  return {
    id: item.id,
    orderId: item.orderId,
    productName: item.product.name,
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    subtotal: item.subtotal,
    status: item.status as OrderProductStatus,
    customerName: item.order.user.name,
    createdAt: item.order.createdAt.toISOString(),
  };
}

export function toCheckoutOrderDTO(order: OrderWithRelations): z.infer<typeof CheckoutOrderDTO> {
  return {
    id: order.id,
    status: order.status as z.infer<typeof CheckoutOrderDTO>['status'],
    total: order.total,
    // Se na BD pode ser null, normalizamos a cadea baleira
    shippingAddress: order.shippingAddress ?? '',
    paymentMethod: order.paymentMethod as z.infer<typeof CheckoutOrderDTO>['paymentMethod'],
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
    userId: order.userId,
    items: order.OrderProduct.map((op) => ({
      id: op.id,
      productId: op.productId,
      quantity: op.quantity,
      unitPrice: op.unitPrice,
      subtotal: op.subtotal,
      status: op.status as OrderProductStatus,
      product: {
        id: op.product.id,
        name: op.product.name,
        image: op.product.image,
      },
    })),
  };
}
