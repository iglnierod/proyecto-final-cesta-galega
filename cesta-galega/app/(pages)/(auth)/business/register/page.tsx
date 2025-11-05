import Link from 'next/link';
import BusinessRegisterForm from '@/app/components/BusinessRegisterForm';
import logo from '@/app/assets/logo-completo.png';
import Image from 'next/image';
import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function BusinessRegisterPage() {
  // Si el usuario está logueado que no pueda entrar
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }

  return (
    <div className="h-dvh flex items-center bg-gradient-to-b from-blue-900 to-blue-400">
      <section className="w-full flex flex-col items-center py-4">
        <div className="flex flex-col gap-3 items-center p-8 bg-white rounded-md">
          <Image src={logo} alt="Logo Cesta Galega" width={150} />
          <h1 className="text-xl font-bold">Registrar Empresa</h1>
          <BusinessRegisterForm />
          <div className="flex flex-col gap-1 items-center">
            <Link className="link link-animated" href="#">
              Ya tengo una cuenta de empresa
            </Link>
            <Link className="text-sm link link-animated link-secondary" href="/user/login">
              No soy una empresa
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
