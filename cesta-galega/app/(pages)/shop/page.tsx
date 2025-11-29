import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import MainShopClient from '@/app/components/MainShopClient';

export default async function ShopPage() {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;
  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    loggedIn = true;
  }
  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <MainShopClient loggedIn={loggedIn} />
    </div>
  );
}
