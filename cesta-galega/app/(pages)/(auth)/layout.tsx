import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await isCookieValid();
  console.log(loggedIn);
  if (loggedIn) {
    redirect('/');
  }

  return <>{children}</>;
}
