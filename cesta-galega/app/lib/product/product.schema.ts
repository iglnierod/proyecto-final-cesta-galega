import { z } from 'zod';
import { CategoryDTO } from '@/app/lib/category/category.schema';

export const ProductCreateSchema = z.object({
  businessId: z.number().int().positive(),
  name: z.string().min(5, 'O nome do produto debe ter 5 caracteres'),
  description: z.string().min(15, 'A descrición debe ter 15 caracteres'),
  price: z
    .number('O prezo non pode estar valeiro')
    .nonnegative('O prezo debe ser positivo e maior a 1 €')
    .min(1, 'O prezo debe ser como mínimo de 1 €')
    .max(9999, 'O prezo máximo é de 9999 €'),
  discounted: z.boolean().default(false),
  discount: z
    .number('O desconto non pode estar valeiro')
    .min(0, 'O desconto mínimo é de 0 %')
    .max(99, 'O máximo desconto posible é de 99 %')
    .default(0),
  image: z.string().min(1, 'Debe engadir unha imaxe ao produto'),
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

export const ProductWithCategoriesDTO = ProductDTO.extend({
  categories: z.array(CategoryDTO).default([]),
});

export type ProductWithCategoriesDTO = z.infer<typeof ProductWithCategoriesDTO>;

export const ProductWithBusinessDTO = ProductDTO.extend({
  business: z.object({
    id: z.number().int(),
    name: z.string(),
    province: z.string().nullable().optional(),
    city: z.string().nullable().optional(),
  }),
  categories: z.array(CategoryDTO).default([]),
});

export type ProductWithBusinessDTO = z.infer<typeof ProductWithBusinessDTO>;
