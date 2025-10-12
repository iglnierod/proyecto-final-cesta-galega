import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { saveSessionCookie, signBusiness, verifyPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  try {
    if (!email || !password) {
      return NextResponse.json({ error: 'Email y contraseña son necesarios' }, { status: 400 });
    }

    const business = await prisma.business.findUnique({
      where: { email },
    });
    if (business) {
      const correctPassword = await verifyPassword(password, business.password);
      if (correctPassword) {
        const businessToken = signBusiness({ businessId: business.id, email: business.email });
        await saveSessionCookie(businessToken, 'business');
        return NextResponse.json({ message: 'Login correcto' }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Contraseña incorrecta' }, { status: 401 });
      }
    }
    return NextResponse.json({ error: 'Email no encontrado' }, { status: 404 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
