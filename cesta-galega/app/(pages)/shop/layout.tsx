import UserHeader from '@/app/components/UserHeader';
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import { findUserById } from '@/app/lib/user/user.repo';
import { toUserDTO } from '@/app/lib/user/user.mapper';

export default async function BusinessLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  let loggedIn = false;
  let userName: string | undefined;

  const cookieValid = await isCookieValid();

  if (cookieValid) {
    const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser;

    const user = await findUserById(decoded.userId);

    if (user) {
      const dto = toUserDTO(user); // aquí xa vén desde a BD
      loggedIn = true;
      userName = dto.name;
    }
  }

  return (
    <div>
      <UserHeader loggedIn={loggedIn} userName={userName} />
      {children}
    </div>
  );
}
