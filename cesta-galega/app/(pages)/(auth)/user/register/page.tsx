import UserRegisterForm from '@/app/components/UserRegisterForm';
import Link from 'next/link';
import logo from '@/public/assets/logo-completo.png';
import Image from 'next/image';
import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function UserRegisterPage() {
  // Si el usuario está logueado que no pueda entrar
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }
  return (
    <div className="h-dvh flex items-center bg-gradient-to-b from-blue-900 to-blue-400">
      <section className="w-full flex flex-col items-center py-4">
        <div className="w-full sm:w-auto flex flex-col gap-3 items-center p-8 bg-white rounded-md">
          <Link href="/" title="Página principal">
            <Image src={logo} alt="Logo Cesta Galega" width={150} />
          </Link>
          <h1 className={'text-xl font-bold'}>Registrarse</h1>
          <UserRegisterForm />
          <Link className={'link link-animated'} href={'/user/login'}>
            Ya tengo una cuenta
          </Link>
        </div>
      </section>
    </div>
  );
}
