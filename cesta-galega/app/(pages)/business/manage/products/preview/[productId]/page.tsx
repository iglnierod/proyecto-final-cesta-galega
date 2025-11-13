import ProductPreview from '@/app/components/ProductPreview';
import prisma from '@/app/lib/prisma';
import { notFound } from 'next/navigation';
import { BusinessSelectPublic } from '@/app/lib/selects/businessSelect';

export const dynamic = 'force-dynamic'; // Eviar cachee del navegador
export default async function ProductPreviewPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  const id = Number(productId);

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
    include: {
      business: BusinessSelectPublic,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <section className="max-w-[1200px] grid grid-cols-1 justify-items-center">
      <ProductPreview product={product} />
    </section>
  );
}
