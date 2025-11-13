import { z } from 'zod';

export const ProductCreateSchema = z.object({
  businessId: z.number().int().positive(),
  name: z.string().min(1),
  description: z.string().optional().default(''),
  price: z.number().nonnegative(),
  discounted: z.boolean().default(false),
  discount: z.number().min(0).max(99).default(0),
  image: z.string().default('##'),
  categoryIds: z.number().int().array().default([]),
  enabled: z.boolean().default(true),
});

export const ProductUpdateSchema = ProductCreateSchema.partial().extend({
  id: z.number().int().positive(),
});

// 🔹 DTO “ligero” para la lista
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

// 🔹 DTO “completo” con empresa (para preview/detalle)
export const ProductWithBusinessDTO = ProductDTO.extend({
  business: z.object({
    id: z.number().int(),
    name: z.string(),
    province: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
  }),
  // categories: z.array(z.object({ id: z.number(), name: z.string() })).optional(),
});

export type ProductCreateInput = z.infer<typeof ProductCreateSchema>;
export type ProductUpdateInput = z.infer<typeof ProductUpdateSchema>;
export type ProductDTO = z.infer<typeof ProductDTO>;
export type ProductWithBusinessDTO = z.infer<typeof ProductWithBusinessDTO>;
