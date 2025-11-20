import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import prisma from '@/app/lib/prisma';
import Image from 'next/image';

export default async function ShopLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Obtener datos de la empresa autenticada
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  const business = await prisma.business.findUnique({
    where: {
      id: decoded.businessId,
    },
  });

  if (!business) {
    throw new Error('No se encontró la empresa. Vuelva a intentarlo más tarde.');
  }

  // Iniciales para el avatar si no hay logo
  const initials =
    business.name
      ?.split(' ')
      .map((w) => w[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() ?? 'EM';

  return (
    <section className="grid grid-cols-1 justify-items-center p-4">
      <div className="w-full max-w-[1200px] flex flex-col gap-6">
        {/* CABECERA */}
        <header className="rounded-2xl border border-base-300 bg-base-100/80 shadow-sm p-4 sm:p-6 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
          {/* Logo o avatar */}
          <div className="shrink-0">
            {business.logo ? (
              <Image
                src={business.logo}
                alt="Logo da empresa"
                width={120}
                height={120}
                className="rounded-xl border border-base-300 object-cover"
              />
            ) : (
              <div className="avatar">
                <div className="bg-primary text-primary-content w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-semibold uppercase">
                  <span>{initials}</span>
                </div>
              </div>
            )}
          </div>

          {/* Info principal de la empresa */}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold">{business.name}</h1>
              <span className="badge badge-soft badge-primary text-xs sm:text-sm">
                Tenda da empresa
              </span>
            </div>

            {(business.city || business.province) && (
              <p className="text-sm text-base-content/70">
                {business.city && <span>{business.city}</span>}
                {business.city && business.province && <span>, </span>}
                {business.province && <span>{business.province}</span>}
              </p>
            )}

            {business.description && (
              <p className="text-sm text-base-content/80 whitespace-pre-line">
                {business.description}
              </p>
            )}

            {/* Datos básicos de contacto / redes */}
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-base-content/80">
              {business.email && (
                <span className="inline-flex items-center gap-1">
                  <span className="icon-[tabler--mail] size-4" />
                  <span>{business.email}</span>
                </span>
              )}
              {business.instagram && (
                <a
                  href={business.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 link link-hover"
                >
                  <span className="icon-[tabler--brand-instagram] size-4" />
                  <span>Instagram</span>
                </a>
              )}
              {business.facebook && (
                <a
                  href={business.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 link link-hover"
                >
                  <span className="icon-[tabler--brand-facebook] size-4" />
                  <span>Facebook</span>
                </a>
              )}
            </div>
          </div>
        </header>

        {/* CONTIDO DA TENDA: aquí irán os produtos en grade máis adiante */}
        <main className="w-full">{children}</main>
      </div>
    </section>
  );
}
