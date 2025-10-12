import { NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const name = searchParams.get('name');
  const province = searchParams.get('province');

  if (id) {
    const business = await prisma.business.findUnique({
      where: { id: Number(id) },
    });
    return NextResponse.json(business);
  }

  const filters: any = {};

  if (name) {
    filters.name = { contains: name, mode: 'insensitive' };
  }

  if (province) {
    filters.province = { contains: province, mode: 'insensitive' };
  }

  const businesses = await prisma.business.findMany({
    where: Object.keys(filters).length > 0 ? filters : undefined,
  });

  return NextResponse.json(businesses);
}
