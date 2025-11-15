import { z } from 'zod';
import { ProvincesEnum } from '@/app/lib/types/shared';

export const SexEnum = z.enum(['Hombre', 'Mujer', 'Prefiero no decirlo']);
export type Sex = z.infer<typeof SexEnum>;

export const UserRegisterSchema = z.object({
  name: z.string().min(5, 'O nome debe ter 5 caracteres').trim(),
  email: z.email('Formato de mail non válido').trim().toLowerCase(),
  sex: SexEnum.default('Prefiero no decirlo'),
  birthDate: z.string('A data de nacemento non é válida'),
  province: ProvincesEnum.default('CORUÑA, A'),
  password: z.string().min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type UserRegisterInput = z.infer<typeof UserRegisterSchema>;

export const UserLoginSchema = z.object({
  email: z.email('O formato do correo non é válido'),
  password: z.string('O contrasinal é obrigatorio').min(8, 'O contrasinal debe ter 8 caracteres'),
});

export type UserLoginInput = z.infer<typeof UserLoginSchema>;

export const UserDTO = z.object({
  id: z.number().int(),
  name: z.string(),
  email: z.email(),
  sex: z.string(),
  birthDate: z.string(),
  province: z.string(),
  createdAt: z.string(),
});

export type UserDTO = z.infer<typeof UserDTO>;
