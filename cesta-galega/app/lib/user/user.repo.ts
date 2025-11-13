import { Prisma } from '@/app/generated/prisma';
import prisma from '@/app/lib/prisma';

export const userPublicSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  email: true,
  sex: true,
  birthDate: true,
  province: true,
  createdAt: true,
});

export type UserPublic = Prisma.UserGetPayload<{ select: typeof userPublicSelect }>;

export async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(data: {
  name: string;
  email: string;
  sex: string;
  birthDate: Date;
  province: string;
  passwordHash: string;
}) {
  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      sex: data.sex,
      birthDate: data.birthDate,
      province: data.province,
      password: data.passwordHash,
    },
    select: userPublicSelect,
  });
}
