import { z } from 'zod';
import { ProvincesEnum } from '@/app/lib/types/shared';

export const BusinessTypeEnum = z.enum(['S.L', 'S.A', 'AUTONOMO', 'COOPERATIVA']);
export type BusinessType = z.infer<typeof BusinessTypeEnum>;

export const BusinessRegisterSchema = z.object({
  name: z.string('Debe introducir un nome').min(5, 'O nome debe ter 5 caracteres').trim(),
  email: z.email('Formato do mail non válido').trim().toLowerCase(),
  businessType: BusinessTypeEnum.default('S.L'),
  phoneNumber: z.string().regex(/^\d{3} \d{3} \d{3}/, 'O teléfono debe ter formato XXX XXX XXX'),
  address: z.string().min(5, 'O enderezo debe ter 5 caracteres'),
  city: z.string('Debe introducir a cidade'),
  province: ProvincesEnum.default('CORUÑA, A'),
  postalCode: z
    .string()
    .min(5, { message: 'O código postal debe ter 5 caracteres' })
    .regex(/^\d{5}$/, 'O código postal debe ter 5 díxitos numéricos'),
  password: z.string().min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type BusinessRegisterInput = z.infer<typeof BusinessRegisterSchema>;

export const BusinessLoginSchema = z.object({
  email: z.email('O formato do correo non é válido'),
  password: z.string('O contrasinal é obrigatorio').min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type BusinessLoginInput = z.infer<typeof BusinessLoginSchema>;

export const BusinessEditSchema = BusinessRegisterSchema.extend({
  id: z.number().positive(),
  description: z.string().or(z.literal('')).nullable().optional(),
  iban: z
    .string()
    .regex(/^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$/, 'O formato de IBAN debe ser AA00XXXXXXXXXXXX')
    .or(z.literal(''))
    .nullable()
    .optional(),
  instagram: z.string().or(z.literal('')).nullable().optional(),
  facebook: z.string().or(z.literal('')).nullable().optional(),
  logo: z.url('O formato da URL do logo non é válido').or(z.literal('')).nullable().optional(),
}).omit({
  password: true,
});

export type BusinessEditInput = z.infer<typeof BusinessEditSchema>;

// DTO público de empresa (por exemplo para listar/mostrar)
export const BusinessDTO = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.string(),
  description: z.string().nullable().optional(),
  businessType: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  city: z.string(),
  province: z.string(),
  postalCode: z.string(),
  iban: z.string().nullable().optional(),
  instagram: z.string().nullable().optional(),
  facebook: z.string().nullable().optional(),
  logo: z.string().nullable().optional(),
  createdAt: z.string(),
});

export type BusinessDTO = z.infer<typeof BusinessDTO>;
