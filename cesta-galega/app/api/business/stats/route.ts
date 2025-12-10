import { NextResponse } from 'next/server';
import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import { getBusinessStats } from '@/app/lib/business/stats/stats.repo';

export async function GET(_request: Request) {
  try {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

    if (!decoded?.businessId) {
      return NextResponse.json({ error: 'Non autorizado' }, { status: 401 });
    }

    const stats = await getBusinessStats(decoded.businessId);

    return NextResponse.json({ stats }, { status: 200 });
  } catch (err: any) {
    console.error('Erro ao obter as estatísticas da empresa', err);
    return NextResponse.json(
      { error: 'Erro ao obter as estatísticas da empresa' },
      { status: 500 }
    );
  }
}
