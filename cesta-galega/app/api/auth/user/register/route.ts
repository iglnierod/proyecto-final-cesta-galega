import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  try {
    // Obtener parámetros enviados en la petición
    const body = await request.json();
    const { name, email, sex, birthDate, province, password } = body;

    // Verificar que los datos necesarios existen
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, y password son necesarios' },
        { status: 400 }
      );
    }

    // Busca si el usuario ya existe
    const existing = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existing) {
      // Si existe devuelve error
      return NextResponse.json({ error: 'Email ya registrado' }, { status: 400 });
    }

    // Modificar datos para almacenarlos correctamente
    const birthDateParsed = new Date(birthDate);
    const hashedPass = await hashPassword(password); // Hashear contraseña para almacenar

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        sex,
        province,
        birthDate: birthDateParsed,
        password: hashedPass,
      },
    });

    // Devolver nuevo usuario
    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (err) {
    // Si falla devolver error
    console.error(err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
