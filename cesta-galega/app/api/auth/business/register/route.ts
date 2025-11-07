import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  // Obtener datos de la petición
  const body = await request.json();
  const { name, email, businessType, phoneNumber, address, city, province, postalCode, password } =
    body;

  try {
    // Obtener si el email ya está en uso
    const exists = await prisma.business.findUnique({
      where: { email },
    });

    if (exists) {
      // Si está en uso devolver error
      return NextResponse.json({ error: 'El correo ya está en uso' }, { status: 400 });
    }

    // Hashear contraseña para almacenarla en la base de datos
    const hashedPassword = await hashPassword(password);
    const newBusiness = await prisma.business.create({
      data: {
        name,
        email,
        businessType,
        phoneNumber: phoneNumber,
        address,
        city,
        province,
        postalCode,
        password: hashedPassword,
      },
    });

    // Devolver datos de empresa creada
    return NextResponse.json(
      { message: 'Registro exitoso', business: { id: newBusiness.id, email: newBusiness.email } },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    // Si falla algo devolver error
    return NextResponse.json({ error: 'Fallo en el registro' }, { status: 500 });
  }
}
