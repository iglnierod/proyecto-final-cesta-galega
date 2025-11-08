import prisma from '@/app/lib/prisma';
import { NextResponse } from 'next/server';
import { productCreateSchema } from '@/app/lib/validators/productValidator';
import { BusinessSelectPublic } from '@/app/lib/selects/businessSelect';
import { CategorySelectPublic } from '@/app/lib/selects/CategorySelectPublic';

// Devolver datos de producto
export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    // Obtener id de producto enviada por parametros
    const { productId } = await params;
    const id = Number(productId);

    // Obtener datos de producto con ese id
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        business: BusinessSelectPublic,
        categories: CategorySelectPublic,
      },
    });

    // Si el producto no se encuentra
    if (!product) {
      return NextResponse.json({ error: 'Producto non atopado' }, { status: 404 });
    }

    // Devolver datos del producto
    return NextResponse.json({ product });
  } catch (error) {
    // Si falla algo devolver error
    console.log(error);
    return NextResponse.json({ error: 'Error no fetch do producto' }, { status: 500 });
  }
}

// Actualizar producto
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  try {
    // Obtener id de producto enviado por parametros
    const { productId } = await params;
    const id = Number(productId);

    // Obtener datos de producto de la peticion y verificar los datos con zod
    const body = await request.json();
    const parsed = productCreateSchema.safeParse(body);

    // Si los datos no son validos
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos non válidos', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    // Obtener datos de body
    const { name, description, image, businessId, categoryIds = [] } = parsed.data;

    // Actualizar producto y obtener los nuevos datos
    const updated = await prisma.product.update({
      where: { id },
      data: {
        name,
        description,
        image,
        business: { connect: { id: businessId } },
        categories: {
          set: categoryIds.map((cid: number) => ({ id: cid })),
        },
      },
      select: {
        id: true,
        name: true,
        description: true,
        image: true,
        createdAt: true,
        business: BusinessSelectPublic,
        categories: CategorySelectPublic,
      },
    });

    // Devolver producto actualizado
    return NextResponse.json({ product: updated });
  } catch (error) {
    // Si falla algo enviar error
    console.error(error);
    return NextResponse.json({ error: 'Error ao actualizar o producto' }, { status: 500 });
  }
}
