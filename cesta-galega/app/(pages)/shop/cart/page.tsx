import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import CartClient from '@/app/components/CartClient';

export default async function CartPage() {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;

  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    loggedIn = true;
  }

  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <h1 className="text-center text-base-300 text-3xl mt-2">Carro</h1>
      <CartClient loggedIn={loggedIn} />
    </div>
  );
}
