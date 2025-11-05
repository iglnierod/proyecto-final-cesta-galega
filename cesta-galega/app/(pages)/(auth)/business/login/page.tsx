import Link from 'next/link';
import BusinessLoginForm from '@/app/components/BusinessLoginForm';
import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import logo from '@/public/assets/logo-completo.png';
import Image from 'next/image';

export default async function BusinessLoginPage() {
  // Si el usuario está logueado que no pueda entrar
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }

  return (
    <div className="h-dvh flex items-center bg-gradient-to-b from-blue-900 to-blue-400">
      <section className="w-full flex flex-col gap-3 items-center py-4">
        <div className="flex flex-col gap-3 items-center bg-white rounded-md p-8">
          <Link href="/" title="Página principal">
            <Image src={logo} alt="Logo Cesta Galega" width={150} />
          </Link>
          <h1 className={'text-xl font-bold'}>Iniciar sesión de Empresa</h1>
          <BusinessLoginForm />
          <Link className={'link link-animated'} href={'/business/register'}>
            No tengo una cuenta de empresa
          </Link>
          <Link className={'text-sm link link-animated link-secondary'} href={'/user/login'}>
            No soy una empresa
          </Link>
        </div>
      </section>
    </div>
  );
}
