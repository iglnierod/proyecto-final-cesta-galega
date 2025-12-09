import { NextResponse } from 'next/server';
import { findReviewsForProduct } from '@/app/lib/review/userProduct.repo';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;
  const id = Number(productId);

  if (Number.isNaN(id) || id <= 0) {
    return NextResponse.json({ error: 'ID do produto non válida' }, { status: 400 });
  }

  try {
    const reviews = await findReviewsForProduct(id);

    if (!reviews.length) {
      return NextResponse.json({
        reviews: [],
        averageRating: 0,
        totalReviews: 0,
      });
    }

    const mapped = reviews.map((r) => ({
      id: r.id,
      title: r.title,
      review: r.review,
      rating: r.rating,
      createdAt: r.createdAt.toISOString(),
      userName: r.user.name,
    }));

    const totalReviews = mapped.length;
    const averageRating = mapped.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

    return NextResponse.json({
      reviews: mapped,
      averageRating,
      totalReviews,
    });
  } catch (err) {
    console.error('Erro ao obter as valoracións do produto', err);
    return NextResponse.json({ error: 'Erro ao obter as valoracións do produto' }, { status: 500 });
  }
}
