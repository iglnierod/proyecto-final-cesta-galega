import UserRegisterForm from '@/app/components/UserRegisterForm';
import Link from 'next/link';

export default function UserRegisterPage() {
  return (
    <div className={'h-dvh flex items-center'}>
      <section className="w-full outline outline-red-500 flex flex-col gap-3 items-center py-4">
        <img src="https://placehold.co/200x90" alt={'Logo'} width={200} height={90} />
        <h1 className={'text-xl font-bold'}>Registrarse</h1>
        <UserRegisterForm />
        <Link className={'link link-animated'} href={'/user/login'}>
          Ya tengo una cuenta
        </Link>
      </section>
    </div>
  );
}
