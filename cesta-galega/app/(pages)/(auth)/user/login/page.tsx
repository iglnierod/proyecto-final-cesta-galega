import UserLoginForm from '@/app/components/UserLoginForm';
import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function UserLoginPage() {
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }

  return (
    <div className="h-dvh flex items-center">
      <section className="w-full outline outline-red-500 flex flex-col gap-3 items-center py-4">
        <img src="https://placehold.co/200x90" alt={'Logo'} width={200} height={90} />
        <h1 className={'text-xl font-bold'}>Iniciar sesión</h1>
        <UserLoginForm />
        <Link className={'link link-animated'} href={'/user/register'}>
          No tengo una cuenta.
        </Link>
      </section>
    </div>
  );
}
