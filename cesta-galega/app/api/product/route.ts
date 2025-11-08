import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { BusinessSelectPublic } from '@/app/lib/selects/businessSelect';
import { CategorySelectPublic } from '@/app/lib/selects/CategorySelectPublic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');

    const where = businessId ? { businessId: Number(businessId) } : {};

    const products = await prisma.product.findMany({
      where,
      include: {
        business: BusinessSelectPublic,
        categories: CategorySelectPublic,
      },
      orderBy: [{ createdAt: 'desc' }],
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, description, businessId, image, categoryIds } = body;

    if (!name || !description || !businessId || !image || !categoryIds) {
      return NextResponse.json(
        { error: 'Name, description, businessId y categoryIds son necesarios ' },
        { status: 400 }
      );
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        description,
        image,
        business: { connect: { id: businessId } },
        categories: categoryIds
          ? {
              connect: categoryIds.map((id: number) => ({ id })),
            }
          : undefined,
      },
      include: {
        business: BusinessSelectPublic,
        categories: CategorySelectPublic,
      },
    });

    return NextResponse.json({ newProduct }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Error al crear el producto' }, { status: 500 });
  }
}
