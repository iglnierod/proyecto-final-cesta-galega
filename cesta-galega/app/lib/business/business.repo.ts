import { Prisma } from '@/app/generated/prisma';
import prisma from '@/app/lib/prisma';
import { BusinessEditInput } from '@/app/lib/business/business.schema';

export const businessPublicSelect = Prisma.validator<Prisma.BusinessSelect>()({
  id: true,
  name: true,
  email: true,
  description: true,
  businessType: true,
  phoneNumber: true,
  address: true,
  city: true,
  province: true,
  postalCode: true,
  iban: true,
  instagram: true,
  facebook: true,
  logo: true,
  createdAt: true,
});

export type BusinessPublic = Prisma.BusinessGetPayload<{
  select: typeof businessPublicSelect;
}>;

export async function findBusinessByEmail(email: string) {
  return prisma.business.findUnique({
    where: { email },
    select: businessPublicSelect,
  });
}

export async function findBusinessById(id: number) {
  return prisma.business.findUnique({
    where: { id },
    select: businessPublicSelect,
  });
}

// data pode vir do BusinessRegisterInput (+ password já hasheado, por exemplo)
export async function createBusiness(data: {
  name: string;
  email: string;
  businessType: string;
  phoneNumber: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  password: string;
}) {
  return prisma.business.create({
    data: {
      name: data.name,
      email: data.email,
      businessType: data.businessType,
      phoneNumber: data.phoneNumber,
      address: data.address,
      city: data.city,
      province: data.province,
      postalCode: data.postalCode,
      password: data.password,
    },
    select: businessPublicSelect,
  });
}

export async function updateBusiness(id: number, data: BusinessEditInput) {
  const { ...businessData } = data;
  return prisma.business.update({
    where: { id },
    data: {
      ...businessData,
    },
    select: businessPublicSelect,
  });
}
