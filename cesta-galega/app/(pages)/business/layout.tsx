import { getAuthTokenDecoded, isCookieValid, JwtPayloadBusiness } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import BusinessHeader from '@/app/components/business/BusinessHeader';
import prisma from '@/app/lib/prisma';

export default async function BusinessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const loggedIn = await isCookieValid();
  if (!loggedIn) {
    redirect('/');
  }

  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  const business = await prisma.business.findUnique({
    where: {
      id: decoded.businessId,
    },
  });

  if (!business) {
    throw new Error('No se encontró la empresa. Vuelva a intentarlo más tarde.');
  }

  return (
    <>
      <BusinessHeader businessName={business.name} />
      {children}
    </>
  );
}
