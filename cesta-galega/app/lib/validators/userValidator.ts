import { z } from 'zod';

export const userRegisterSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obligatorio' }),
  email: z.email({ message: 'O email é obligatorio' }),
  sex: z.enum(['MALE', 'FEMALE', 'OTHER']),
  birthDate: z.string().refine(
    (val) => {
      const d = Date.parse(val);
      return !isNaN(d);
    },
    { message: 'A fecha de nacemento non é válida' }
  ),
  password: z.string().min(4, { message: 'O contrasinal debe ter mínmo 4 caracteres' }),
});

export type UserRegisterSchema = z.infer<typeof userRegisterSchema>;
