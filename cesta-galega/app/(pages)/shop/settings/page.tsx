// app/(pages)/user/settings/page.tsx  (ou a ruta que uses)

import { redirect } from 'next/navigation';
import { getAuthTokenDecoded, isCookieValid, JwtPayloadUser } from '@/app/lib/auth';
import { findUserById } from '@/app/lib/user/user.repo';
import { toUserDTO } from '@/app/lib/user/user.mapper';
import ManageUserInfo from '@/app/components/ManageUserInfo';

export const dynamic = 'force-dynamic';

export default async function UserSettingsPage() {
  // Comprobar que hai cookie válida
  const cookieValid = await isCookieValid();
  if (!cookieValid) {
    redirect('/user/login');
  }

  // Decodificar token
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadUser | undefined;
  if (!decoded?.userId) {
    redirect('/user/login');
  }

  // Buscar usuario na BD
  const user = await findUserById(decoded.userId);
  if (!user) {
    redirect('/user/login');
  }

  const userDTO = toUserDTO(user);

  return (
    <div className="mt-16 md:mt-4 lg:mt-0 p-2">
      <ManageUserInfo user={userDTO} />
    </div>
  );
}
