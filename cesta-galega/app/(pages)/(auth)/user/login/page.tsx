import UserLoginForm from '@/app/components/UserLoginForm';
import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import logo from '@/app/assets/logo-completo.png';
import Image from 'next/image';

export default async function UserLoginPage() {
  // Si el usuario está logueado que no pueda entrar
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }

  // Página de login de usuario
  return (
    <div className="h-dvh flex items-center bg-gradient-to-b from-blue-900 to-blue-400">
      <section className="w-full flex flex-col items-center py-4">
        <div className="bg-white p-8 rounded-md flex flex-col items-center gap-3">
          <Image src={logo} alt="Cesta galega logo" width={150} />
          <h1 className={'text-xl font-bold'}>Iniciar sesión</h1>
          <UserLoginForm />
          <Link className={'link link-animated'} href={'/user/register'}>
            No tengo una cuenta.
          </Link>
        </div>
      </section>
    </div>
  );
}
