'use client';

import { Product } from '@/app/generated/prisma';

type Business = {
  id: number;
  name: string;
  address?: string;
  postalCode?: string;
  city?: string;
  province?: string;
};

type ProductPreviewData = {
  id: number;
  name: string;
  description?: string;
  image?: string;
  enabled: boolean;
  price: number;
  discounted: boolean;
  discount: number;
  businessId: number;
  business: Business;
  // categories?: { id: number; name: string }[]; // lo añadirás más adelante
};

export default function ProductPreview({ product }: { product: Product }) {
  // const [qty, setQty] = useState<number>(1);
  //
  // const finalPrice = product.discounted
  //   ? Math.max(0, product.price * (1 - product.discount / 100))
  //   : product.price;
  //
  // const currency = (v: number) =>
  //   new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v);
  //
  // const disabled = !product.enabled;
  //
  // function handleAddToCart() {
  //   // Aquí integrarás tu lógica de carrito
  //   console.log('Add to cart', { productId: product.id, qty });
  // }
  //
  // function handleBuyNow() {
  //   // Aquí integrarás tu flujo de compra directa
  //   console.log('Buy now', { productId: product.id, qty });
  // }

  return <h1>producto preview component</h1>;

  // return (
  //   <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 p-4">
  //     {/* Columna izquierda: imagen */}
  //     <div className="w-full">
  //       <div className="w-full aspect-square rounded-xl border border-base-content/20 flex items-center justify-center bg-base-200">
  //         {/* Placeholder de imagen */}
  //         <div className="text-center">
  //           <div className="mx-auto mb-3 rounded-full size-16 flex items-center justify-center border border-dashed border-base-content/40">
  //             <span className="icon-[tabler--photo] size-7 opacity-60"></span>
  //           </div>
  //           <p className="text-base-content/70 text-sm">Aquí irá a futura imaxe do produto</p>
  //         </div>
  //       </div>
  //
  //       {/* Datos de la empresa */}
  //       <div className="mt-6 rounded-xl border border-base-content/20 p-4">
  //         <h3 className="font-semibold text-lg mb-2">Datos da empresa</h3>
  //         <div className="text-sm text-base-content/80 space-y-1">
  //           <p>
  //             <span className="font-medium">Nome:</span> {product.business?.name ?? '—'}
  //           </p>
  //           <p>
  //             <span className="font-medium">Provincia:</span> {product.business?.province ?? '—'}
  //           </p>
  //           <p>
  //             <span className="font-medium">Cidade:</span> {product.business?.city ?? '—'}
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //
  //     {/* Columna derecha: info y acciones */}
  //     <div className="w-full space-y-4">
  //       {/* Nombre */}
  //       <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{product.name}</h1>
  //
  //       {/* Precio / descuento */}
  //       <div className="flex items-center gap-3">
  //         {product.discounted ? (
  //           <>
  //             <span className="text-2xl font-semibold">{currency(finalPrice)}</span>
  //             <span className="line-through text-base-content/60">{currency(product.price)}</span>
  //             <span className="badge badge-soft badge-info">{product.discount}% OFF</span>
  //           </>
  //         ) : (
  //           <span className="text-2xl font-semibold">{currency(product.price)}</span>
  //         )}
  //         {!product.enabled && <span className="badge badge-soft badge-error">Non dispoñible</span>}
  //       </div>
  //
  //       {/* Descripción */}
  //       {product.description && (
  //         <p className="text-base-content/80 whitespace-pre-line">{product.description}</p>
  //       )}
  //
  //       {/* (Futuro) Categoría */}
  //       <div className="pt-2">
  //         <span className="text-sm text-base-content/60">
  //           (Aquí irá a categoría do produto máis adiante)
  //         </span>
  //       </div>
  //
  //       {/* Cantidad */}
  //       <div className="pt-2 max-w-xs">
  //         <label htmlFor="qty" className="label-text">
  //           Cantidade
  //         </label>
  //         <div className="input rounded flex items-center">
  //           <input
  //             id="qty"
  //             type="number"
  //             min={1}
  //             max={999}
  //             step={1}
  //             value={qty}
  //             onChange={(e) => setQty(Math.max(1, e.currentTarget.valueAsNumber || 1))}
  //             className="grow"
  //             aria-label="Número de unidades"
  //           />
  //           <span className="ms-3 text-base-content/70 text-sm shrink-0">unid.</span>
  //         </div>
  //       </div>
  //
  //       {/* Botones de acción */}
  //       <div className="grid grid-cols-2 gap-3 pt-4 max-w-md">
  //         <button
  //           type="button"
  //           className="btn btn-secondary rounded"
  //           onClick={handleAddToCart}
  //           disabled={disabled}
  //           title="Engadir ao carriño"
  //         >
  //           Engadir ao carriño
  //         </button>
  //         <button
  //           type="button"
  //           className="btn btn-primary rounded"
  //           onClick={handleBuyNow}
  //           disabled={disabled}
  //           title="Comprar agora"
  //         >
  //           Comprar agora
  //         </button>
  //       </div>
  //
  //       {/* Nota de indisponibilidad */}
  //       {disabled && (
  //         <p className="text-sm text-error/80 pt-2">
  //           Este produto non está dispoñible actualmente.
  //         </p>
  //       )}
  //     </div>
  //   </div>
  // );
}
