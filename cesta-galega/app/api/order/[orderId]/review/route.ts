// app/api/order/[orderId]/review/route.ts
import { NextResponse } from 'next/server';
import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import {
  createOrUpdateReviewFromOrderProduct,
  getReviewFromOrderProduct,
} from '@/app/lib/review/userProduct.repo';
import {
  ProductReviewCreateSchema,
  ProductReviewDTOSchema,
} from '@/app/lib/review/userProduct.schema';

const OrderReviewBodySchema = ProductReviewCreateSchema;

export async function POST(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const { orderId } = await params;
    const id = Number(orderId);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'orderId non válido' }, { status: 400 });
    }

    const body = await request.json();
    const parsed = OrderReviewBodySchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }

    const created = await createOrUpdateReviewFromOrderProduct(decoded.userId, id, parsed.data);

    const dto = ProductReviewDTOSchema.safeParse({
      id: created.id,
      productId: created.productId,
      userId: created.userId,
      title: created.title,
      review: created.review,
      rating: created.rating,
      createdAt: created.createdAt.toISOString(),
    });

    if (!dto.success) {
      const first = dto.error.issues[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }

    return NextResponse.json({ review: dto.data }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    const msg = err?.message ?? 'Erro ao gardar a valoración';

    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

export async function GET(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const { orderId } = await params;
    const id = Number(orderId);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'orderId non válido' }, { status: 400 });
    }

    const url = new URL(request.url);
    const productIdParam = url.searchParams.get('productId');

    if (!productIdParam) {
      return NextResponse.json({ error: 'Falta productId' }, { status: 400 });
    }

    const productId = Number(productIdParam);
    if (Number.isNaN(productId)) {
      return NextResponse.json({ error: 'productId non válido' }, { status: 400 });
    }

    const existing = await getReviewFromOrderProduct(decoded.userId, id, productId);

    if (!existing) {
      return NextResponse.json({ review: null }, { status: 200 });
    }

    const dto = ProductReviewDTOSchema.safeParse({
      id: existing.id,
      productId: existing.productId,
      userId: existing.userId,
      title: existing.title,
      review: existing.review,
      rating: existing.rating,
      createdAt: existing.createdAt.toISOString(),
    });

    if (!dto.success) {
      const first = dto.error.issues[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }

    return NextResponse.json({ review: dto.data }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    const msg = err?.message ?? 'Erro ao obter a valoración';

    return NextResponse.json({ error: msg }, { status: 400 });
  }
}
