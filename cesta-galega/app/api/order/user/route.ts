import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { getOrdersForUser } from '@/app/lib/order/order.repo';
import { toOrderDTO } from '@/app/lib/order/order.mapper';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;

    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const orders = await getOrdersForUser(decoded.userId);
    const dto = orders.map((o) => toOrderDTO(o));

    return NextResponse.json({ orders: dto }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err?.message ?? 'Erro ao obter os pedidos' },
      { status: 500 }
    );
  }
}
