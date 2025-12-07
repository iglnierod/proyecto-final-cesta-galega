import { getAuthTokenDecoded, JwtPayloadUser } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { OrderCheckoutSchema } from '@/app/lib/order/order.schema';
import { checkoutOrderForUser } from '@/app/lib/order/order.repo';
import { toCheckoutOrderDTO } from '@/app/lib/order/order.mapper';

export async function POST(request: Request, { params }: { params: Promise<{ orderId: string }> }) {
  try {
    const { orderId } = await params;

    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;
    if (!decoded?.userId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const id = Number(orderId);
    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'orderId non válido' }, { status: 400 });
    }

    const body = await request.json().catch(() => ({}));
    const parsed = OrderCheckoutSchema.safeParse(body);

    if (!parsed.success) {
      const first = parsed.error.issues[0];
      return NextResponse.json(
        {
          error: first?.message ?? 'Datos non válidos',
        },
        { status: 400 }
      );
    }

    const updateOrder = await checkoutOrderForUser(decoded.userId, id, parsed.data);
    const dto = toCheckoutOrderDTO(updateOrder);

    return NextResponse.json({ order: dto }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err?.message ?? 'Erro ao procesar o pago' }, { status: 500 });
  }
}
