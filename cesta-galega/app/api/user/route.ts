import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { UserUpdateSchema } from '@/app/lib/user/user.schema';
import { deleteUserAccount, findUserById, updateUserProfile } from '@/app/lib/user/user.repo';
import { toUserDTO } from '@/app/lib/user/user.mapper';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json().catch(() => {});
    const parsed = UserUpdateSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }

    const input = parsed.data;

    if (input.id !== decoded.userId) {
      return NextResponse.json(
        { error: 'Non podes modificar outra conta diferente á túa' },
        { status: 403 }
      );
    }

    const existing = await findUserById(decoded.userId);
    if (!existing) {
      return NextResponse.json({ error: 'Usuario non atopado' }, { status: 404 });
    }

    const updated = await updateUserProfile(input);
    const dto = toUserDTO(updated);

    return NextResponse.json({ user: dto }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err?.message ?? 'Erro ao actualizar o usuario' },
      { status: 500 }
    );
  }
}

// 🔹 Eliminar conta do usuario logueado
export async function DELETE() {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const existing = await findUserById(decoded.userId);
    if (!existing) {
      return NextResponse.json({ error: 'Usuario non atopado' }, { status: 404 });
    }

    await deleteUserAccount(decoded.userId);

    // Opcional: aquí poderías borrar cookie/token se o fas dende este endpoint

    return NextResponse.json(
      { ok: true, message: 'Conta eliminada correctamente' },
      { status: 200 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err?.message ?? 'Erro ao eliminar a conta' },
      { status: 500 }
    );
  }
}
