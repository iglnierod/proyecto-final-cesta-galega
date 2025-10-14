import Link from 'next/link';
import BusinessRegisterForm from '@/app/components/BusinessRegisterForm';

export default function BusinessRegisterPage() {
  return (
    <div className={'h-dvh flex items-center'}>
      <section className={'w-full outline outline-red-500 flex flex-col gap-3 items-center py-4'}>
        <img src="https://placehold.co/200x90" alt={'Logo'} width={200} height={90} />
        <h1 className={'text-xl font-bold'}>Registrar Empresa</h1>
        <BusinessRegisterForm />
        <div className={'flex flex-col gap-1 items-center'}>
          <Link className={'link link-animated'} href={'#'}>
            Ya tengo una cuenta de empresa
          </Link>
          <Link className={'text-sm link link-animated link-secondary'} href={'/user/login'}>
            No soy una empresa
          </Link>
        </div>
      </section>
    </div>
  );
}
