import { NextResponse } from 'next/server';
import { saveSessionCookie, signUser, verifyPassword } from '@/app/lib/auth';
import { UserLoginSchema } from '@/app/lib/user/user.schema';
import { findUserByEmail } from '@/app/lib/user/user.repo';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validación de los datos
    const input = UserLoginSchema.parse(body);

    // Buscar usuario en la base de datos
    const user = await findUserByEmail(input.email);

    if (!user) {
      return NextResponse.json({ error: 'Usuario non atopado' }, { status: 404 });
    }

    // Verificar contraseña
    const correctPassword = await verifyPassword(input.password, user.password);
    if (!correctPassword) {
      return NextResponse.json({ error: 'Contrasinal incorrecto' }, { status: 401 });
    }

    // Crear JWT e guardarlo en las cookies
    const userToken = signUser({ userId: user.id, email: user.email, userName: user.name });
    await saveSessionCookie(userToken);

    return NextResponse.json({ message: 'Login correcto' }, { status: 200 });
  } catch (err: any) {
    // Si hay un fallo devolverlo
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao procesar a petición' }, { status: 500 });
  }
}
