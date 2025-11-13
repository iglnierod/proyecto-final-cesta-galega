import { NextResponse } from 'next/server';
import { UserRegisterSchema } from '@/app/lib/user/user.schema';
import { createUser, findUserByEmail } from '@/app/lib/user/user.repo';
import { hashPassword } from '@/app/lib/auth';
import { toUserDTO } from '@/app/lib/user/user.mapper';

export async function POST(request: Request) {
  try {
    // Obtener datos de la petición
    const body = await request.json();
    const input = UserRegisterSchema.parse(body);

    // Obtener si el email ya está en uso
    const existing = await findUserByEmail(input.email);
    if (existing) {
      // Si está en uso devolver error
      return NextResponse.json({ error: 'Email xa rexistrado' }, { status: 400 });
    }

    // Hashear contraseña para almacenarla en la base de datos
    const passwordHash = await hashPassword(input.password);

    const created = await createUser({
      name: input.name,
      email: input.email,
      sex: input.sex,
      birthDate: new Date(input.birthDate),
      province: input.province,
      passwordHash,
    });

    const user = toUserDTO(created);

    return NextResponse.json({ user }, { status: 201 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao procesar a petición' }, { status: 500 });
  }
}
