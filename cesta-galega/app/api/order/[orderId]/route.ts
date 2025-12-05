import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { getOrderForUserCheckout } from '@/app/lib/order/order.repo';
import { toCheckoutOrderDTO } from '@/app/lib/order/order.mapper';

export async function GET(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  try {
    const { orderId } = await params;
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const id = Number(orderId);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'Pedido non válido' }, { status: 400 });
    }

    const order = await getOrderForUserCheckout(decoded.userId, id);

    if (!order) {
      return NextResponse.json({ error: 'Pedido non atopado' }, { status: 404 });
    }

    const dto = toCheckoutOrderDTO(order);
    return NextResponse.json({ order: dto }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao obter o pedido' }, { status: 500 });
  }
}
