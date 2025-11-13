import { z } from 'zod';

export const BusinessTypeEnum = z.enum(['S.L', 'S.A', 'AUTONOMO', 'COOPERATIVA']);
export type BusinessType = z.infer<typeof BusinessTypeEnum>;

export const BusinessRegisterSchema = z.object({
  name: z.string('Debe introducir un nome').min(5, 'O nome debe ter 5 caracteres').trim(),
  email: z.email('Formato do mail non válido').trim().toLowerCase(),
  businessType: BusinessTypeEnum.default('S.L'),
  phoneNumber: z.string().regex(/^\d{3} \d{3} \d{3}/, 'O teléfono debe ter formato XXX XXX XXX'),
  address: z.string().min(10, 'O enderezo debe tener 10 caracteres'),
  city: z.string('Debe introducir a cidade'),
  province: z.string('Debe introducir a provincia'),
  postalCode: z
    .string()
    .min(5, { message: 'O código postal debe tener 5 caracteres' })
    .regex(/^\d\d\d\d\d/, 'O código postal debe ter 5 digitos númericos'),
  password: z.string().min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type BusinessRegisterInput = z.infer<typeof BusinessRegisterSchema>;

export const BusinessLoginSchema = z.object({
  email: z.email('O formato do correo non é válido'),
  password: z.string('O contrasinal é obrigatorio').min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type BusinessLoginInput = z.infer<typeof BusinessRegisterSchema>;

export const BusinessDTO = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  businessType: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
  createdAt: z.string(),
});

export type BusinessDTO = z.infer<typeof BusinessDTO>;
