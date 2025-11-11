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
  price: z
    .float64()
    .min(1, { message: 'O precio mínimo é de 1 €' })
    .max(9999, { message: 'O precio máximo é de 9999 €' }),
  discounted: z.boolean().optional(),
  discount: z
    .float64()
    .min(0, { message: 'O desconto mínmo e de 5%' })
    .max(99, { message: 'O desconto máximo é de 99%' })
    .optional(),
  categoryIds: z.array(z.coerce.number().int().positive()).optional().default([]),
};

export const productCreateSchema = z.object({
  name: productFields.name,
  description: productFields.description,
  image: productFields.image,
  businessId: productFields.businessId,
  price: productFields.price,
  discounted: productFields.discounted,
  discount: productFields.discount,
  categoryIds: productFields.categoryIds, // opcional; si viene vacío, no conecta nada
});
