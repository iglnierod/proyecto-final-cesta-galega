import { BusinessEditSchema } from '@/app/lib/business/business.schema';
import { NextResponse } from 'next/server';
import { updateBusiness } from '@/app/lib/business/business.repo';
import { toBusinessDTO } from '@/app/lib/business/business.mapper';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ businessId: string }> }
) {
  try {
    const { businessId } = await params;
    const id = Number(businessId);

    if (Number.isNaN(id)) {
      return NextResponse.json({ error: 'ID de empresa non válido' }, { status: 400 });
    }

    const body = await request.json();
    const input = BusinessEditSchema.parse(body);

    const updated = await updateBusiness(id, input);

    const dto = toBusinessDTO(updated);

    return NextResponse.json({ business: dto });
  } catch (err: any) {
    if (err?.name === 'ZodError') {
      const first = err.issues?.[0];
      return NextResponse.json({ error: first?.message ?? 'Datos non válidos' }, { status: 400 });
    }
    console.error(err);
    return NextResponse.json({ error: 'Erro ao procesar a petición' }, { status: 500 });
  }
}
