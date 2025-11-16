'use client';

import { ProductWithBusinessDTO } from '@/app/lib/product/product.schema';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductPreview({ product }: { product: ProductWithBusinessDTO }) {
  const [qty, setQty] = useState<number>(1);

  const finalPrice = product.discounted
    ? Math.max(0, product.price * (1 - product.discount / 100))
    : product.price;

  const currency = (v: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Aviso de preview */}
      <div className="mb-6 alert alert-soft alert-info">
        <span className="icon-[tabler--eye]"></span>
        <div>
          <h2 className="font-semibold">Vista previa do produto</h2>
          <p className="text-sm opacity-80">
            Esta é a vista que verán as persoas usuarias. Os botóns e controles están
            deshabilitados.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Columna esquerda: imaxe do produto */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[700px] aspect-square rounded-2xl border border-base-content/15 bg-base-200 flex items-center justify-center shadow-sm">
            {/* Aquí máis adiante poderás substituír polo teu <Image /> real */}
            <Image
              src={product.image ?? ''}
              alt="Imaxe do producto"
              width={700}
              height={700}
              className="rounded-md border"
            />
          </div>
        </div>

        {/* Columna dereita: info do produto + empresa + compra */}
        <div className="w-full space-y-5">
          {/* Nome */}
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{product.name}</h1>

          {/* Prezo / desconto / estado */}
          <div className="flex flex-wrap items-center gap-3">
            {product.discounted ? (
              <>
                <span className="text-2xl font-semibold">{currency(finalPrice)}</span>
                <span className="line-through text-base-content/60">{currency(product.price)}</span>
                <span className="badge badge-soft badge-info">{product.discount}% DESCONTO</span>
              </>
            ) : (
              <span className="text-2xl font-semibold">{currency(product.price)}</span>
            )}
            {!product.enabled && (
              <span className="badge badge-soft badge-error">Non dispoñible</span>
            )}
          </div>

          {/* Categorías */}
          {product.categories.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-base-content/80">Categorías</p>
              <div className="flex flex-wrap gap-2">
                {product.categories.map((c) => (
                  <span className="badge badge-soft badge-primary" key={c.id}>
                    {c.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Descrición */}
          {product.description && (
            <div className="space-y-1">
              <p className="text-sm font-medium text-base-content/80">Descrición</p>
              <p className="text-base-content/80 whitespace-pre-line text-sm lg:text-base">
                {product.description}
              </p>
            </div>
          )}

          {/* Info da empresa */}
          <div className="mt-2 rounded-2xl border border-base-content/15 p-4 bg-base-100/60 shadow-sm">
            <h3 className="font-semibold text-base mb-2">Información da empresa</h3>
            <div className="text-sm text-base-content/80 space-y-1">
              <p>
                <span className="font-medium">Nome:</span> {product.business?.name ?? '—'}
              </p>
              <p>
                <span className="font-medium">Provincia:</span> {product.business?.province ?? '—'}
              </p>
              <p>
                <span className="font-medium">Cidade:</span> {product.business?.city ?? '—'}
              </p>
            </div>
          </div>

          {/* Controles de compra (deshabilitados) */}
          <div className="pt-4 border-t border-base-content/10 space-y-4">
            {/* Cantidade */}
            <div className="max-w-xs space-y-1 opacity-60 pointer-events-none">
              <label
                htmlFor="qty"
                className="label-text text-sm font-medium flex items-center gap-2"
              >
                Cantidade
                <span className="badge badge-soft badge-ghost text-[10px]">
                  Deshabilitado na vista previa
                </span>
              </label>
              <div className="input rounded flex items-center">
                <input
                  id="qty"
                  type="number"
                  min={1}
                  max={999}
                  step={1}
                  value={qty}
                  disabled
                  onChange={(e) => setQty(Math.max(1, e.currentTarget.valueAsNumber || 1))}
                  className="grow bg-transparent"
                  aria-label="Número de unidades"
                />
                <span className="ms-3 text-base-content/70 text-sm shrink-0">unid.</span>
              </div>
            </div>

            {/* Botóns de acción (deshabilitados) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <button
                type="button"
                className="btn btn-secondary rounded-lg w-full"
                disabled
                title="Engadir ao carriño (deshabilitado na vista previa)"
              >
                Engadir ao carriño
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-lg w-full"
                disabled
                title="Comprar agora (deshabilitado na vista previa)"
              >
                Comprar agora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
