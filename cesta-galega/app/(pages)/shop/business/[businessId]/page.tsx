import ShopClient from '@/app/components/ShopClient';
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';

export default async function PublicBusinessShopPage({
  params,
}: {
  params: Promise<{ businessId: string }>;
}) {
  const { businessId } = await params;
  const id = Number(businessId);

  let loggedIn = false;

  const cookieValid = await isCookieValid();
  if (cookieValid) {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    if (decoded?.userId) {
      loggedIn = true;
    }
  }

  return (
    <div className="mt-4">
      <ShopClient businessId={id} isBusinessView={false} loggedIn={loggedIn} />
    </div>
  );
}
