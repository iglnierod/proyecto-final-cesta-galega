// app/shop/product/[productId]/page.tsx

import ProductPage from '@/app/components/ProductPage';
import { notFound } from 'next/navigation';
import { findProductByIdWithBusiness } from '@/app/lib/product/product.repo';
import { isCookieValid } from '@/app/lib/auth';

export const dynamic = 'force-dynamic'; // Evitar cacheo del navegador

export default async function ProductPageWrapper({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  let loggedIn = false;
  if (await isCookieValid()) loggedIn = true;
  const { productId } = await params;

  // Buscar el producto por ID
  const product = await findProductByIdWithBusiness(Number(productId));

  if (!product) {
    notFound();
  }

  return (
    <section className="py-8">
      {/* Pasamos el producto al componente para mostrarlo al usuario */}
      <ProductPage product={product} isUserLoggedIn={loggedIn} />
    </section>
  );
}
