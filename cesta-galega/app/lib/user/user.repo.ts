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

//  Buscar usuario por email (só activos: deleted = false)
export async function findUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email,
      deleted: false,
    },
  });
}

//  Crear usuario novo (deleted = false explícito por claridade)
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
      deleted: false, // aínda que teña default na BD, deixámolo explícito
    },
    select: userPublicSelect,
  });
}

//  Buscar usuario por id (só usuarios non eliminados)
export async function findUserById(id: number) {
  return prisma.user.findFirst({
    where: {
      id,
      deleted: false,
    },
  });
}

//  Actualizar perfil de usuario (só se non está eliminado)
export async function updateUserProfile(data: UserUpdateInput) {
  const { id, birthDate, ...rest } = data;

  // Verificamos que o usuario existe e non está marcado como deleted
  const existing = await prisma.user.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

  if (!existing) {
    throw new Error('Usuario non atopado ou xa foi eliminado');
  }

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

//  "Eliminar" conta de usuario (soft delete: deleted = true)
export async function deleteUserAccount(userId: number) {
  const deleted = await prisma.user.update({
    where: { id: userId },
    data: {
      deleted: true,
    },
  });

  return deleted;
}
