import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { saveSessionCookie, signUser, verifyPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  // Obtener datos enviados en la petición
  const body = await request.json();
  const { email, password } = body;

  try {
    // Si no envia datos necesarios devolver error
    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son necesarios' }, { status: 400 });
    }

    // Buscar en la base de datos si el usuario ya existe
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (user) {
      // Verificar contraseña correcta
      const correctPassword = await verifyPassword(password, user.password);
      if (correctPassword) {
        // Si es correcta crea el JWT del usuario y lo amacena en las cookies del navegador
        const userToken = signUser({ userId: user.id, email: user.email });
        await saveSessionCookie(userToken);
        return NextResponse.json({ message: 'Login correcto' }, { status: 200 });
      } else {
        // Devolver error de contraseña incorrecta
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }
    } else {
      // Devolver usuario no encontrado
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }
  } catch (err) {
    // Si falla algo enviar un error
    console.error(err);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
