import { z } from 'zod';

// Crear categoría (normalmente de empresa)
// - isGlobal: por defecto false → categoría privada da empresa
export const CategoryCreateSchema = z.object({
  name: z.string().min(3, 'O nome debe ter polo menos 3 caracteres'),
});

export type CategoryCreateInput = z.infer<typeof CategoryCreateSchema>;

// Para actualización, deixamos todos os campos opcionais + id obrigatorio
export const CategoryUpdateSchema = CategoryCreateSchema.partial().extend({
  id: z.number().int().positive(),
});

export type CategoryUpdateInput = z.infer<typeof CategoryUpdateSchema>;

// DTO público básico de categoría
export const CategoryDTO = z.object({
  id: z.number().int(),
  name: z.string(),
});

export type CategoryDTO = z.infer<typeof CategoryDTO>;

// DTO de categoría con produtos
export const CategoryWithProductsDTO = CategoryDTO.extend({
  products: z.array(
    z.object({
      id: z.number().int(),
      name: z.string(),
      price: z.number(),
      image: z.string().nullable(),
    })
  ),
});

export type CategoryWithProductsDTO = z.infer<typeof CategoryWithProductsDTO>;
