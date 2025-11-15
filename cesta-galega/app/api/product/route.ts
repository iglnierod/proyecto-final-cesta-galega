import { NextResponse } from 'next/server';
import { createProduct, findProductsByBusiness } from '@/app/lib/product/product.repo';
import {
  toProductWithBusinessDTO,
  toProductWithCategoriesDTO,
} from '@/app/lib/product/product.mapper';
import { ProductCreateSchema } from '@/app/lib/product/product.schema';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');

    if (!businessId) {
      return NextResponse.json({ error: 'businessId é necesario' }, { status: 400 });
    }

    const products = await findProductsByBusiness(Number(businessId));

    return NextResponse.json({
      products: products.map((p) => toProductWithCategoriesDTO(p)),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao obter os produtos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const json = await request.json();

    const parsed = ProductCreateSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Datos non válidos', issues: parsed.error.issues },
        { status: 400 }
      );
    }

    const product = await createProduct(parsed.data);

    return NextResponse.json({ product: toProductWithBusinessDTO(product) }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erro ao crear o produto' }, { status: 500 });
  }
}
