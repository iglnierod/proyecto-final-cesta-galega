// app/api/product/route.ts
// app/api/product/route.ts
import { NextResponse } from 'next/server';
import { createProduct, getFilteredProducts } from '@/app/lib/product/product.repo';
import {
  toProductWithBusinessDTO,
  toProductWithCategoriesDTO,
} from '@/app/lib/product/product.mapper';
import { ProductCreateSchema } from '@/app/lib/product/product.schema';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const businessIdParam = searchParams.get('businessId');
    const search = searchParams.get('search') ?? '';
    const category = searchParams.get('category');
    const sort = searchParams.get('sort') ?? '';

    const minPriceParam = searchParams.get('minPrice');
    const maxPriceParam = searchParams.get('maxPrice');

    const filterParam = searchParams.get('filter'); // 'news', 'discounts' o null
    const filter =
      filterParam === 'newness' || filterParam === 'discount' ? filterParam : undefined;

    let businessId: number | undefined = undefined;
    if (businessIdParam) {
      const parsed = Number(businessIdParam);
      if (Number.isNaN(parsed)) {
        return NextResponse.json({ error: 'businessId non é válido' }, { status: 400 });
      }
      businessId = parsed;
    }

    const minPrice = minPriceParam ? Number(minPriceParam) : undefined;
    const maxPrice = maxPriceParam ? Number(maxPriceParam) : undefined;

    if (minPriceParam && Number.isNaN(minPrice)) {
      return NextResponse.json({ error: 'minPrice non é válido' }, { status: 400 });
    }

    if (maxPriceParam && Number.isNaN(maxPrice)) {
      return NextResponse.json({ error: 'maxPrice non é válido' }, { status: 400 });
    }

    const products = await getFilteredProducts({
      businessId,
      search,
      category,
      sort,
      minPrice,
      maxPrice,
      filter,
    });

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
