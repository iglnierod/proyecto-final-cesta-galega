import ProductPreview from '@/app/components/ProductPreview';
import { notFound } from 'next/navigation';
import { findProductByIdWithBusiness } from '@/app/lib/product/product.repo';

export const dynamic = 'force-dynamic'; // Eviar cachee del navegador
export default async function ProductPreviewPage({
  params,
}: {
  params: Promise<{ productId: number }>;
}) {
  const { productId } = await params;
  const id = Number(productId);

  const product = await findProductByIdWithBusiness(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="">
      <ProductPreview product={product} />
    </section>
  );
}
