import ProductsGrid from '@/app/components/ProductsGrid';
import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import { findProductsByBusiness } from '@/app/lib/product/product.repo';
import { toProductDTO } from '@/app/lib/product/product.mapper';

export default async function ShopPage() {
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  const res = await findProductsByBusiness(decoded.businessId);
  const products = res.map((p) => toProductDTO(p));

  return (
    <div className="flex flex-col gap-4">
      {/*  FILTROS */}
      <div className="outline outline-red-500 w-full min-h-[50px]"></div>
      <div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
}
