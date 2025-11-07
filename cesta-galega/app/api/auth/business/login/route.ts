import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { saveSessionCookie, signBusiness, verifyPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  // Obtener datos enviados en los parámetros
  const body = await request.json();
  const { email, password } = body;

  try {
    // Verificar que los datos necesarios existen
    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son necesarios' }, { status: 400 });
    }

    // Buscar si el email ya está usado
    const business = await prisma.business.findUnique({
      where: { email },
    });
    if (business) {
      // Verificar contraseña
      const correctPassword = await verifyPassword(password, business.password);
      if (correctPassword) {
        // Si email y contraseña correctos crea token JWT y almacena en las cookies
        const businessToken = signBusiness({ businessId: business.id, email: business.email });
        await saveSessionCookie(businessToken, 'business');
        return NextResponse.json({ message: 'Login correcto' }, { status: 200 });
      } else {
        // Si la contraseña no es correcta devolver error
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }
    }
    // Si el email no existe en la bd devolver error
    return NextResponse.json({ error: 'Email no encontrado' }, { status: 404 });
  } catch (err) {
    // Si salta algún fallo devolver error
    console.error(err);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
