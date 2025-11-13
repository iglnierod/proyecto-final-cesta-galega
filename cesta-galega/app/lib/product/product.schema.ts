import { z } from 'zod';

export const ProductCreateSchema = z.object({
  businessId: z.number().int().positive(),
  name: z.string().min(5, 'O nome do produto debe ter 5 caracteres'),
  description: z.string().min(15, 'A descrición debe ter 15 caracteres'),
  price: z
    .number()
    .nonnegative()
    .min(1, 'O prezo debe ser como mínimo de 1€')
    .max(9999, 'O prezo máximo é de 9999 €'),
  discounted: z.boolean().default(false),
  discount: z.number().min(0).max(99).default(0),
  image: z.string().optional().default('##'),
  categoryIds: z.number().int().array().default([]),
  enabled: z.boolean().default(true),
});

export type ProductCreateInput = z.infer<typeof ProductCreateSchema>;

export const ProductUpdateSchema = ProductCreateSchema.partial().extend({
  id: z.number().int().positive(),
});

export type ProductUpdateInput = z.infer<typeof ProductUpdateSchema>;

export const ProductDTO = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable().optional(),
  price: z.number(),
  discounted: z.boolean(),
  discount: z.number(),
  enabled: z.boolean(),
  image: z.string().nullable().optional(),
});

export type ProductDTO = z.infer<typeof ProductDTO>;

export const ProductWithBusinessDTO = ProductDTO.extend({
  business: z.object({
    id: z.number().int(),
    name: z.string(),
    province: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
  }),
  // categories: z.array(z.object({ id: z.number(), name: z.string() })).optional(),
});

export type ProductWithBusinessDTO = z.infer<typeof ProductWithBusinessDTO>;
