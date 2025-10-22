'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('❌ Error en el layout Business:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-3xl font-bold text-error mb-4">⚠️ Ocurrió un error</h1>
      <p className="text-lg text-base-content/80 mb-6">
        {error.message || 'Ha ocurrido un error inesperado.'}
      </p>

      <div className="flex gap-3">
        <button onClick={() => reset()} className="btn btn-outline btn-secondary">
          Reintentar
        </button>
        <Link href="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
