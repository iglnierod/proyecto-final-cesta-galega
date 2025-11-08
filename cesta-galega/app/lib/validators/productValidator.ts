import { z } from 'zod';

const productFields = {
  name: z.string().trim().min(1, { message: 'El nombre es obligatorio' }).max(120),
  description: z.string().trim().min(1, { message: 'La descripción es obligatoria' }).max(2000),
  // Mejor que .min(0): valida URL o path relativo (ajusta si solo usas URL)
  image: z.string().min(0) /* TODO */,
  businessId: z.coerce
    .number()
    .int()
    .positive({ message: 'businessId debe ser un entero positivo' }),
  categoryIds: z.array(z.coerce.number().int().positive()).optional().default([]),
};

export const productCreateSchema = z.object({
  name: productFields.name,
  description: productFields.description,
  image: productFields.image,
  businessId: productFields.businessId,
  categoryIds: productFields.categoryIds, // opcional; si viene vacío, no conecta nada
});

export const productEditSchema = z.object({
  name: productFields.name.optional(),
  description: productFields.description.optional(),
  image: productFields.image.optional(),
  businessId: z.never().optional(),
  categoryIds: productFields.categoryIds.optional(),
});
