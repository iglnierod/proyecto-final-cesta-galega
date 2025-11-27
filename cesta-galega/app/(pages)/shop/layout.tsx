import UserHeader from '@/app/components/UserHeader';
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';

export default async function BusinessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let loggedIn = false;
  let decoded: JwtPayloadUser | undefined;
  const cookieValid = await isCookieValid();
  if (cookieValid) {
    decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;
    loggedIn = true;
  }
  return (
    <div>
      <UserHeader loggedIn={loggedIn} userName={decoded?.userName} />
      {children}
    </div>
  );
}
