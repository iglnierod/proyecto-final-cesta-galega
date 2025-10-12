import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { saveSessionCookie, signUser, verifyPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  try {
    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son necesarios' }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      const correctPassword = await verifyPassword(password, user.password);
      if (correctPassword) {
        const userToken = signUser({ userId: user.id, email: user.email });
        await saveSessionCookie(userToken);
        return NextResponse.json({ message: 'Login correcto' }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }
    } else {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
