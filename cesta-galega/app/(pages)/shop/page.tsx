import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import MainShopClient from '@/app/components/MainShopClient';

type ShopPageProps = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;

  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    loggedIn = true;
  }

  const rawFilter = searchParams?.filter;
  const filter = Array.isArray(rawFilter) ? rawFilter[0] : rawFilter;

  let title = 'Tenda';
  if (filter === 'newness') title = 'Tenda: Novedades';
  if (filter === 'discount') title = 'Tenda: Descontos';

  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <h1 className="text-center text-base-300 text-3xl mt-2">{title}</h1>
      <MainShopClient loggedIn={loggedIn} />
    </div>
  );
}
