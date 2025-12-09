// app/lib/review/userProduct.schema.ts
import { z } from 'zod';

export const ProductRatingValueSchema = z
  .number('A nota é obrigatoria')
  .min(0, 'A valoración mínima é 0')
  .max(5, 'A valoración máxima é 5');

// Body completo que recibe o endpoint POST /api/order/[orderId]/review
export const ProductReviewCreateSchema = z.object({
  productId: z.number().int().positive(),
  rating: ProductRatingValueSchema,
  title: z
    .string('O título é obrigatorio')
    .min(3, 'O título debe ter polo menos 3 caracteres')
    .max(100, 'O título non pode superar 100 caracteres'),
  review: z
    .string('O comentario é obrigatorio')
    .min(10, 'A valoración debe ter polo menos 10 caracteres')
    .max(2000, 'A valoración é demasiado longa'),
});

export type ProductReviewCreateInput = z.infer<typeof ProductReviewCreateSchema>;

// DTO que devolve a API
export const ProductReviewDTOSchema = z.object({
  id: z.number().int(),
  productId: z.number().int(),
  userId: z.number().int(),
  title: z.string(),
  review: z.string(),
  rating: ProductRatingValueSchema,
  createdAt: z.string(),
});

export type ProductReviewDTO = z.infer<typeof ProductReviewDTOSchema>;

// Schema que usa o formulario en cliente (sen productId)
export const createOrderReviewSchema = ProductReviewCreateSchema.pick({
  rating: true,
  title: true,
  review: true,
});

export type CreateOrderReviewInput = z.infer<typeof createOrderReviewSchema>;
