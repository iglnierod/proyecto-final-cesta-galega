'use client';
import { ProductDTO } from '@/app/lib/product/product.schema';
import ProductGridItem from '@/app/components/ProductGridItem';

export default function ProductsGrid({
  products,
  addButtonDisabled = true,
  isBusinessView = false,
}: {
  products: ProductDTO[];
  addButtonDisabled?: boolean;
  isBusinessView?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {products.map((product) => (
        <ProductGridItem
          product={product}
          key={product.id}
          addButtonDisabled={addButtonDisabled}
          isBusinessView={isBusinessView}
        />
      ))}
    </div>
  );
}
