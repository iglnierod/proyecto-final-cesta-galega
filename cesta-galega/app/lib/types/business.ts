import { Province } from '@/app/lib/types/shared';

export const businessType = ['S.L', 'S.A', 'AUTONOMO', 'COOPERATIVA'] as const;

export type BusinessType = (typeof businessType)[number];

export interface BusinessRegisterInput {
  name: string;
  email: string;
  businessType: BusinessType;
  phoneNumber: string;
  address: string;
  city: string;
  province: Province;
  postalCode: string;
  password: string;
}

export interface BusinessLoginInput {
  email: string;
  password: string;
}
