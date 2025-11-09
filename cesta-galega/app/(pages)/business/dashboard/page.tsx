import { isCookieValid } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function BusinessDashboard() {
  const loggedIn = await isCookieValid();
  if (!loggedIn) redirect('/business/login');

  return (
    <section className="grid grid-cols-3 gap-2 p-2">
      <div className="text-center p-2">
        <h1 className="text-xl">
          Benvido, <strong>Panadería Paco S.L</strong>
        </h1>
      </div>
      <div className="text-center border border-gray-300 rounded p-2">
        <span className="text-green-600 font-bold">Conta verificada</span>
      </div>
      <div className="text-center border border-gray-300 rounded p-2">
        <span className="text-orange-500">
          <span className="font-bold">60%</span> perfil completado
        </span>
      </div>
    </section>
  );
}
