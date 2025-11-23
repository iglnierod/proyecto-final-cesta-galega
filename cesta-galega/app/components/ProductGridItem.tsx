'use client';
import { ProductDTO } from '@/app/lib/product/product.schema';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ProductGridItem({
  product,
  addButtonDisabled = false,
}: {
  product: ProductDTO;
  addButtonDisabled?: boolean;
}) {
  const finalPrice = product.discounted
    ? Math.max(0, product.price * (1 - product.discount / 100))
    : product.price;

  const router = useRouter();
  return (
    <div
      key={product.id}
      className="card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition"
    >
      {/* Imagen del producto */}
      <figure className="relative w-full h-64 bg-base-200 rounded-t-xl overflow-hidden">
        <Image src={product.image ?? ''} alt={product.name} fill className="object-cover" />
      </figure>

      {/* Contenido */}
      <div className="card-body p-4 space-y-3">
        {/* Nombre */}
        <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>

        {/* Precio */}
        <div className="flex items-center gap-2">
          {product.discounted ? (
            <>
              <span className="text-xl font-bold text-primary">{finalPrice.toFixed(2)} €</span>
              <span className="line-through text-base-content/60">
                {product.price.toFixed(2)} €
              </span>
              <span className="badge badge-soft badge-info">-{product.discount}%</span>
            </>
          ) : (
            <span className="text-xl font-bold">{product.price.toFixed(2)} €</span>
          )}
        </div>

        {/* Acciones */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            className="btn btn-secondary btn-sm rounded"
            onClick={() => router.push(`/business/manage/products/preview/${product.id}`)}
          >
            Ver
          </button>

          <button
            className="btn btn-primary btn-sm rounded"
            disabled={addButtonDisabled}
            onClick={() => console.log('add to cart')}
          >
            Engadir
          </button>
        </div>
      </div>
    </div>
  );
}
