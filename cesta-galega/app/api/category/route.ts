import { NextResponse } from 'next/server';
import { getCategories } from '@/app/lib/category/category.repo';
import { toCategoryDTO } from '@/app/lib/category/category.mapper';

export async function GET(request: Request) {
  try {
    const categories = await getCategories();

    return NextResponse.json({
      categories: categories.map((c) => toCategoryDTO(c)),
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: 'Erro ao obter as categorías' }, { status: 500 });
  }
}
