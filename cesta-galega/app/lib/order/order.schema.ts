import { z } from 'zod';
import { ProvincesEnum } from '@/app/lib/types/shared';

export const OrderStatusEnum = z.enum(['Carrito', 'Directo', 'Pagado']);
export type OrderStatus = z.infer<typeof OrderStatusEnum>;

export const PaymentMethodEnum = z.enum(['Tarjeta']);
export type PaymentMethod = z.infer<typeof PaymentMethodEnum>;

export const OrderProductStatusEnum = z.enum([
  'Pendiente',
  'Aceptado',
  'Preparando',
  'Enviado',
  'Cancelado',
]);
export type OrderProductStatus = z.infer<typeof OrderProductStatusEnum>;

export const OrderItemInputSchema = z.object({
  productId: z.number().int(),
  quantity: z.number().int().min(1),
});
export type OrderItemInput = z.infer<typeof OrderItemInputSchema>;

export const OrderCreateSchema = z.object({
  status: OrderStatusEnum.default('Directo'),
  shippingAddress: z.string().min(5),
  paymentMethod: PaymentMethodEnum.default('Tarjeta'),
  userId: z.int(),
  items: z.array(OrderItemInputSchema).min(1),
});
export type OrderCreateInput = z.infer<typeof OrderCreateSchema>;

export const OderProductStatusUpdateSchema = z.object({
  status: OrderProductStatusEnum,
});
export type OrderProductStatusUpdateInput = z.infer<typeof OderProductStatusUpdateSchema>;

export const OrderProductDTO = z.object({
  id: z.number(),
  productId: z.number(),
  productName: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  subtotal: z.number(),
  status: OrderProductStatusEnum,
  payed: z.boolean(),
});
export type OrderProductDTO = z.infer<typeof OrderProductDTO>;

export const OrderDTO = z.object({
  id: z.number(),
  status: OrderStatusEnum,
  total: z.number(),
  shippingAddress: z.string(),
  paymentMethod: PaymentMethodEnum,
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.number(),
  items: z.array(OrderProductDTO).default([]),
});
export type OrderDTO = z.infer<typeof OrderDTO>;

export const BusinessOrderItemDTO = z.object({
  id: z.number(),
  orderId: z.number(),
  productName: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  subtotal: z.number(),
  status: OrderProductStatusEnum,
  customerName: z.string(),
  createdAt: z.string(),
  payed: z.boolean(),
});
export type BusinessOrderItem = z.infer<typeof BusinessOrderItemDTO>;

export const CartUpdateItemSchema = z.object({
  orderProductId: z.number().int(),
  quantity: z.number().int().min(1),
});
export type CartUpdateItemInput = z.infer<typeof CartUpdateItemSchema>;

export const CartRemoveItemSchema = z.object({
  orderProductId: z.number().int(),
});
export type CartRemoveItemInput = z.infer<typeof CartRemoveItemSchema>;

export const OrderCheckoutSchema = z.object({
  shippingAddress: z.string().min(5),
  paymentMethod: PaymentMethodEnum.default('Tarjeta'),
});
export type OrderCheckoutInput = z.infer<typeof OrderCheckoutSchema>;

export const DirectOrderCreateSchema = z.object({
  productId: z.number().int(),
  quantity: z.number().int().min(1),
});
export type DirectOrderCreateInput = z.infer<typeof DirectOrderCreateSchema>;

export const CheckoutOrderProductDTO = z.object({
  id: z.number(),
  productId: z.number(),
  quantity: z.number(),
  unitPrice: z.number(),
  subtotal: z.number(),
  status: OrderProductStatusEnum,
  payed: z.boolean(),
  product: z.object({
    id: z.number(),
    name: z.string(),
    image: z.string().nullable(), // para mostrar no checkout
  }),
});
export type CheckoutOrderProductDTO = z.infer<typeof CheckoutOrderProductDTO>;

export const CheckoutOrderDTO = z.object({
  id: z.number(),
  status: OrderStatusEnum,
  total: z.number(),
  shippingAddress: z.string(), // podes gardar '' mentres non se complete
  paymentMethod: PaymentMethodEnum, // por agora 'Tarjeta' por defecto
  createdAt: z.string(),
  updatedAt: z.string(),
  userId: z.number(),
  items: z.array(CheckoutOrderProductDTO),
});
export type CheckoutOrderDTO = z.infer<typeof CheckoutOrderDTO>;

// 🔹 Formulario de checkout (lado frontend)
export const OrderCheckoutFormSchema = z.object({
  address: z.string().min(5, 'O enderezo é obrigatorio'),
  city: z.string().min(2, 'A cidade é obrigatoria'),
  province: ProvincesEnum.default('CORUÑA, A'),
  postalCode: z
    .string()
    .min(5, { message: 'O código postal debe ter 5 caracteres' })
    .regex(/^\d{5}$/, 'O código postal debe ter 5 díxitos numéricos'),
  paymentMethod: PaymentMethodEnum.default('Tarjeta'),
});

export type OrderCheckoutFormInput = z.infer<typeof OrderCheckoutFormSchema>;
