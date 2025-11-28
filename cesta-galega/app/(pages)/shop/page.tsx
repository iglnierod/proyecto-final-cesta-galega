import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';

export default async function ShopPage() {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;
  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    loggedIn = true;
  }
  return <>Shop page works!</>;
}
