import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import MainShopClient from '@/app/components/MainShopClient';

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;

  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    if (decoded) {
      loggedIn = true;
    }
  }

  const params = await searchParams;
  const rawFilter = params?.filter;
  const filter = Array.isArray(rawFilter) ? rawFilter[0] : rawFilter;

  let title = 'Tenda';
  if (filter === 'news') title = 'Tenda: Novedades';
  if (filter === 'discounts') title = 'Tenda: Descontos';

  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <h1 className="text-center text-base-300 text-3xl mt-2">{title}</h1>
      <MainShopClient loggedIn={loggedIn} />
    </div>
  );
}
