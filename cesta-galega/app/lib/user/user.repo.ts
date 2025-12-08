import { Prisma } from '@/app/generated/prisma';
import prisma from '@/app/lib/prisma';
import { UserUpdateInput } from '@/app/lib/user/user.schema';

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

// Buscar usuario por id
export async function findUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

// Actualizar perfil de usuario (nome, sexo, data, provincia, etc.)
export async function updateUserProfile(data: UserUpdateInput) {
  const { id, birthDate, ...rest } = data;

  // birthDate ven como string "YYYY-MM-DD" dende o formulario
  const birthDateAsDate = new Date(birthDate);

  const updated = await prisma.user.update({
    where: { id },
    data: {
      name: rest.name,
      email: rest.email,
      sex: rest.sex,
      birthDate: birthDateAsDate,
      province: rest.province,
    },
  });

  return updated;
}

export async function deleteUserAccount(userId: number) {
  const deleted = await prisma.user.delete({
    where: { id: userId },
  });

  return deleted;
}
