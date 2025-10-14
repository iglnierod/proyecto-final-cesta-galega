import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';
import { hashPassword } from '@/app/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, sex, birthDate, province, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, y password son necesarios' },
        { status: 400 }
      );
    }

    const existing = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existing) {
      return NextResponse.json({ error: 'Email ya registrado' }, { status: 400 });
    }

    const birthDateParsed = new Date(birthDate);
    const hashedPass = await hashPassword(password);
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        sex,
        province,
        birt_date: birthDateParsed,
        password: hashedPass,
      },
    });

    return NextResponse.json({ user: newUser }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to process request' }, { status: 500 });
  }
}
