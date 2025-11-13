import { NextResponse } from 'next/server';
import { hashPassword } from '@/app/lib/auth';
import { BusinessRegisterSchema } from '@/app/lib/business/business.schema';
import { createBusiness, findBusinessByEmail } from '@/app/lib/business/business.repo';
import { toBusinessDTO } from '@/app/lib/business/business.mapper';

export async function POST(request: Request) {
  try {
    // Obtener datos de la petición
    const body = await request.json();
    const input = BusinessRegisterSchema.parse(body);

    // Obtener si el email ya está en uso
    const existing = await findBusinessByEmail(input.email);

    if (existing) {
      // Si está en uso devolver error
      return NextResponse.json({ error: 'O correo xa está en uso' }, { status: 400 });
    }

    // Hashear contraseña para almacenarla en la base de datos
    const hashedPassword = await hashPassword(input.password);

    const created = await createBusiness({
      name: input.name,
      email: input.email,
      businessType: input.businessType,
      phoneNumber: input.phoneNumber,
      address: input.address,
      city: input.city,
      province: input.province,
      postalCode: input.postalCode,
      password: hashedPassword,
    });

    const business = toBusinessDTO(created);

    // Devolver datos de empresa creada
    return NextResponse.json({ business }, { status: 201 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao procesar a petición' }, { status: 500 });
  }
}
