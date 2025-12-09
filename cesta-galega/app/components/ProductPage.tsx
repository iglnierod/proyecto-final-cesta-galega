'use client';

import { ProductWithBusinessDTO } from '@/app/lib/product/product.schema';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/app/context/AlertContext';
import Swal from 'sweetalert2';

export default function ProductPage({
  product,
  isUserLoggedIn,
}: {
  product: ProductWithBusinessDTO;
  isUserLoggedIn: boolean;
}) {
  const [qty, setQty] = useState<number>(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isBuying, setIsBuying] = useState(false);
  const { showAlert } = useAlert();
  const router = useRouter();

  const finalPrice = product.discounted
    ? Math.max(0, product.price * (1 - product.discount / 100))
    : product.price;

  const currency = (v: number) =>
    new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' }).format(v);

  const checkUserLoggedIn = async (): Promise<boolean> => {
    if (!isUserLoggedIn) {
      Swal.fire({
        title: 'Inicia sesión',
        text: 'Debes ter sesión iniciada para acceder ao carro.',
        icon: 'warning',
        showCancelButton: true,
        showDenyButton: true,
        confirmButtonText: 'Ir a login',
        denyButtonText: 'Ir a rexistro',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        } else if (result.isDenied) {
          router.push('/register');
        }
      });
      return false;
    }
    return true;
  };

  const handleAddToCart = async () => {
    if (!product.enabled) return;

    const isLoggedIn = await checkUserLoggedIn();
    if (!isLoggedIn) return;

    try {
      setIsAdding(true);

      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: qty,
        }),
      });

      if (!res.ok) {
        showAlert('Erro ao engadir o produto ao carro', 'error');
        return;
      }

      showAlert('Engadiuse o produto ao carro', 'success');
    } catch (err) {
      console.error('Erro inesperado ao engadir ao carro', err);
    } finally {
      setIsAdding(false);
    }
  };

  // 🛒 Comprar AGORA: crea pedido "Directo" e vai ao checkout
  const handleBuyNow = async () => {
    if (!product.enabled) return;

    const isLoggedIn = await checkUserLoggedIn();
    if (!isLoggedIn) return;

    try {
      setIsBuying(true);

      const res = await fetch('/api/order/direct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: qty,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error(data);
        showAlert('Produciuse un erro ao crear o pedido', 'error');
        return;
      }

      const orderId = data?.order?.id;
      if (!orderId) {
        showAlert('Non se puido obter o identificador do pedido', 'error');
        return;
      }

      // Ir directamente ao checkout dese pedido
      router.push(`/shop/checkout/${orderId}`);
    } catch (err) {
      console.error('Erro inesperado ao crear o pedido directo', err);
      showAlert('Produciuse un erro ao crear o pedido', 'error');
    } finally {
      setIsBuying(false);
    }
  };

  const business = product.business;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Layout principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Columna esquerda: imaxe do produto */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[700px] max-h-[480px] aspect-[4/3] rounded-2xl border border-base-content/15 bg-base-200 overflow-hidden shadow-sm">
            {product.image ? (
              <Image
                src={product.image}
                alt="Imagen del producto"
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-sm text-base-content/60">
                Sen imaxe dispoñible
              </div>
            )}
          </div>
        </div>

        {/* Columna dereita: detalles do produto */}
        <div className="w-full space-y-5">
          {/* Nome do produto */}
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight">{product.name}</h1>

          {/* Prezo e desconto */}
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

          {/* Pequeno cadro coa info da empresa vendedora */}
          {business && (
            <div className="rounded-lg border border-base-300 bg-base-100/80 p-3 shadow-sm text-sm">
              <p className="text-xs font-semibold text-base-content/70 mb-1">Produto vendido por</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="font-semibold">{business.name}</p>
                  {(business.city || business.province) && (
                    <p className="text-xs text-base-content/70">
                      {business.city}
                      {business.city && business.province && ', '}
                      {business.province}
                    </p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-ghost btn-xs sm:btn-sm rounded-md border border-base-300"
                  onClick={() => router.push(`/shop/business/${business.id}`)}
                >
                  Ver tenda
                  <span className="icon-[tabler--arrow-right] size-4 ms-1" />
                </button>
              </div>
            </div>
          )}

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

          {/* Controles de compra */}
          <div className="pt-4 border-t border-base-content/10 space-y-4">
            {/* Cantidade */}
            <div className="max-w-xs space-y-1">
              <label
                htmlFor="qty"
                className="label-text text-sm font-medium flex items-center gap-2"
              >
                Cantidade
              </label>
              <div className="input rounded flex items-center">
                <input
                  id="qty"
                  type="number"
                  min={1}
                  max={999}
                  step={1}
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, e.currentTarget.valueAsNumber || 1))}
                  className="grow bg-transparent"
                  aria-label="Número de unidades"
                />
                <span className="ms-3 text-base-content/70 text-sm shrink-0">unid.</span>
              </div>
            </div>

            {/* Botóns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
              <button
                type="button"
                className="btn btn-secondary rounded-lg w-full"
                onClick={handleAddToCart}
                disabled={isAdding || !product.enabled}
              >
                {isAdding ? 'Engadindo...' : 'Engadir ao carro'}
              </button>
              <button
                type="button"
                className="btn btn-primary rounded-lg w-full"
                onClick={handleBuyNow}
                disabled={isBuying || !product.enabled}
              >
                {isBuying ? 'Creando pedido...' : 'Comprar agora'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
