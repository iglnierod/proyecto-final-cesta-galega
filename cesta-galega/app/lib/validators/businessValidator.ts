import { z } from 'zod';

// Validación de datos del formulario de registro de empresa
export const businessRegisterSchema = z.object({
  name: z.string().min(4, { message: 'O nome da empresa debe ter mínimo 4 caracteres' }),
  email: z.email({ message: 'O email é obrigatorio' }),
  phoneNumber: z
    .string()
    .regex(/^\d{3} \d{3} \d{3}/, { message: 'O teléfono debe ter formato XXX XXX XXX' }),
  postalCode: z
    .string()
    .min(5, { message: 'O código postal debe tener 5 caracteres' })
    .regex(/^\d\d\d\d\d/, { message: 'O código postal debe ter 5 digitos númericos' }),
  password: z.string().min(4, { message: 'O contrasinal debe ter mínimo 4 caracteres' }),
});

export type BusinessRegisterSchema = z.infer<typeof businessRegisterSchema>;
