import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import BusinessLoginForm from '@/app/components/BusinessLoginForm';

export default async function BusinessLoginPage() {
  const loggedIn = await isCookieValid();

  if (loggedIn) {
    redirect('/');
  }

  return (
    <div className="h-dvh flex items-center">
      <section className="w-full flex flex-col gap-3 items-center py-4">
        <img src="https://placehold.co/200x90" alt={'Logo'} width={200} height={90} />
        <h1 className={'text-xl font-bold'}>Iniciar sesión de Empresa</h1>
        <BusinessLoginForm />
        <Link className={'link link-animated'} href={'/business/register'}>
          No tengo una cuenta de empresa
        </Link>
        <Link className={'text-sm link link-animated link-secondary'} href={'/user/login'}>
          No soy una empresa
        </Link>
      </section>
    </div>
  );
}
