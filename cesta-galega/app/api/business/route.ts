import { NextResponse } from 'next/server';
import { findBusinessesForShop } from '@/app/lib/business/business.repo';
import { toBusinessDTO } from '@/app/lib/business/business.mapper';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');

    const businesses = await findBusinessesForShop(search);

    return NextResponse.json({
      businesses: businesses.map((b) => toBusinessDTO(b)),
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao obter as empresas' }, { status: 500 });
  }
}
