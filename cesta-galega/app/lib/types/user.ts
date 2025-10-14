import { Province } from '@/app/lib/types/shared';

export type Sex = 'MALE' | 'FEMALE' | 'OTHER';

export interface UserLoginInput {
  email: string;
  password: string;
}

export interface UserRegisterInput {
  name: string;
  email: string;
  sex: Sex;
  birthDate: string;
  province: Province;
  password: string;
}
