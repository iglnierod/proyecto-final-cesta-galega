// app/(pages)/shop/checkout/[orderId]/page.tsx
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import CheckoutClient from '@/app/components/CheckoutClient';

export default async function CheckoutPage({ params }: { params: Promise<{ orderId: string }> }) {
  const { orderId } = await params;

  const cookieValid = await isCookieValid();
  if (!cookieValid) {
    redirect('/user/login');
  }

  const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;
  if (!decoded?.userId) {
    redirect('/user/login');
  }

  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <h1 className="text-center text-base-300 text-3xl mt-2">Finalizar compra</h1>
      <CheckoutClient orderId={Number(orderId)} />
    </div>
  );
}
