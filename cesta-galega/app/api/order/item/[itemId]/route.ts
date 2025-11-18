import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import { NextResponse } from 'next/server';
import { OderProductStatusUpdateSchema } from '@/app/lib/order/order.schema';
import { updateOrderProductStatusForBusiness } from '@/app/lib/order/order.repo';
import { toBusinessOrderItemDTO } from '@/app/lib/order/order.mapper';

export async function PATCH(request: Request, { params }: { params: Promise<{ itemId: string }> }) {
  try {
    const { itemId } = await params;
    const id = Number(itemId);

    const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;
    const { businessId } = decoded;

    if (!businessId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const body = await request.json();
    const { status } = OderProductStatusUpdateSchema.parse(body);

    const updated = await updateOrderProductStatusForBusiness(businessId, id, status);

    const dto = toBusinessOrderItemDTO(updated);

    return NextResponse.json(dto);
  } catch (err: any) {
    return NextResponse.json(err.message || 'Erro ao actualizar o produto do pedido');
  }
}
