'use client';

import Link from 'next/link';
import Image from 'next/image';
import { BusinessDTO } from '@/app/lib/business/business.schema';

export default function BusinessGrid({ businesses }: { businesses: BusinessDTO[] }) {
  if (!businesses.length) {
    return <p className="text-base-content/70 text-sm">Non se atoparon empresas.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {businesses.map((b) => (
        <article
          key={b.id}
          className="card bg-base-100 border border-base-300 rounded-xl shadow-sm hover:shadow-md transition"
        >
          {b.logo && (
            <figure className="relative w-full h-40 bg-base-200 rounded-t-xl overflow-hidden">
              <Image src={b.logo} alt={b.name} fill className="object-cover" />
            </figure>
          )}

          <div className="card-body p-4 space-y-2">
            <h3 className="font-semibold text-lg line-clamp-2">{b.name}</h3>

            <p className="text-sm text-base-content/70 line-clamp-2">
              {b.description || 'Sen descrición dispoñible.'}
            </p>

            <p className="text-xs text-base-content/60">
              {b.city} · {b.province}
            </p>

            <div className="pt-2">
              <Link
                href={`/shop/business/${b.id}`}
                className="btn btn-primary btn-sm rounded w-full"
              >
                Ver tenda
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
