import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  const body = await request.json();
  const {
    name,
    email,
    business_type,
    phone_number,
    address,
    city,
    province,
    postal_code,
    password,
  } = body;

  try {
    const exists = await prisma.business.findUnique({
      where: { email },
    });

    if (exists) {
      return NextResponse.json({ error: 'El correo ya está en uso' }, { status: 400 });
    }

    const hashedPassword = await hashPassword(password);
    const newBusiness = await prisma.business.create({
      data: {
        name,
        email,
        business_type,
        phone_number,
        address,
        city,
        province,
        postal_code,
        password: hashedPassword,
      },
    });

    return NextResponse.json(
      { message: 'Registro exitoso', business: { id: newBusiness.id, email: newBusiness.email } },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Fallo en el registro' }, { status: 500 });
  }
}
