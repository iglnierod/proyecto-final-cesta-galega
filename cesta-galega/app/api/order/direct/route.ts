import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { DirectOrderCreateSchema } from '@/app/lib/order/order.schema';
import { createOrder } from '@/app/lib/order/order.repo';
import { toOrderDTO } from '@/app/lib/order/order.mapper';

export async function POST(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = DirectOrderCreateSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }

    const { productId, quantity } = parsed.data;

    const order = await createOrder({
      status: 'Directo',
      shippingAddress: '',
      paymentMethod: 'Tarjeta',
      userId: decoded.userId,
      items: [{ productId, quantity }],
    });

    const dto = toOrderDTO(order);

    return NextResponse.json({ order: dto }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao crear o pedido directo' }, { status: 500 });
  }
}