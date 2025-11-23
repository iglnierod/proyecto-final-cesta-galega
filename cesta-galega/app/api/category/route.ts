import { NextResponse } from 'next/server';
import { getCategories, getCategoriesByBusiness } from '@/app/lib/category/category.repo';
import { toCategoryDTO } from '@/app/lib/category/category.mapper';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');

    let categories;

    if (businessId) {
      // categorías usadas por la empresa
      categories = await getCategoriesByBusiness(Number(businessId));
    } else {
      // todas las categorías de la app
      categories = await getCategories();
    }

    return NextResponse.json({
      categories: categories.map((c) => toCategoryDTO(c)),
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Erro ao obter as categorías' }, { status: 500 });
  }
}
