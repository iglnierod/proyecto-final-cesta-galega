import { redirect } from 'next/navigation';
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import UserOrdersClient from '@/app/components/UserOrdersClient';

export const dynamic = 'force-dynamic';

export default async function UserOrdersPage() {
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
      <h1 className="text-center text-base-300 text-3xl mt-2">Os meus pedidos</h1>
      <UserOrdersClient />
    </div>
  );
}
