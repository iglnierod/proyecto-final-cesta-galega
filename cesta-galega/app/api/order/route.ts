import { NextResponse } from 'next/server';
import { OrderCreateSchema } from '@/app/lib/order/order.schema';
import { createOrder, getOrdersForBusiness } from '@/app/lib/order/order.repo';
import { toBusinessOrderItemDTO, toOrderDTO } from '@/app/lib/order/order.mapper';
import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';

export async function GET(request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;
    const { businessId } = decoded;

    if (!businessId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const orderItems = await getOrdersForBusiness(businessId);

    return NextResponse.json({
      orderProducts: orderItems.map((op) => toBusinessOrderItemDTO(op)),
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao obter os produtos' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const input = OrderCreateSchema.parse(body);

    const created = await createOrder({
      status: input.status,
      userId: input.userId,
      shippingAddress: input.shippingAddress,
      paymentMethod: input.paymentMethod,
      items: input.items,
    });

    const order = toOrderDTO(created);

    return NextResponse.json({ order }, { status: 201 });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao procesar a petición' }, { status: 500 });
  }
}
