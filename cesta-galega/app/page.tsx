import Link from 'next/link';
import Image from 'next/image';
import imgPaquete from '@/public/assets/paquete.png';
import { isBusinessLoggedIn } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  // Se hai cookies de login de empresa, redirixir ao dashboard
  const businessLoggedIn = await isBusinessLoggedIn();
  if (businessLoggedIn) {
    redirect('/business/dashboard');
  }

  return (
    <>
      {/* APARTADO*/}
      <section className="bg-blue-900 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Cesta Galega</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre o mercado galego máis grande e fácil de usar. Compra directamente a produtores
            locais e axuda ao comercio de proximidade.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-100 transition"
          >
            Explorar tenda
          </Link>
        </div>
      </section>

      {/* Sección para empresas*/}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:text-left">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold">Comeza a vender online</h2>
            <p className="mt-4">
              Se es produtor, artesán ou comerciante, en Cesta Galega podes crear a túa tenda en
              minutos, amosar os teus produtos e chegar a milleiros de clientes en toda Galicia.
            </p>
            <div className="mt-6 flex gap-4 justify-center md:justify-start">
              <Link
                href="/business/register"
                className="inline-block px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
              >
                Crear conta de vendedor
              </Link>
              <Link
                href="/business/login"
                className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition"
              >
                Iniciar sesión como vendedor
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src={imgPaquete} alt="Vendedor mostrando os seus produtos" width={300} />
          </div>
        </div>
      </section>

      {/* APARTADO - Beneficios de Cesta Galega*/}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8">Por que elixir Cesta Galega?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Proximidade</h4>
              <p>
                Compra a produtores galegos, reduce a pegada ecolóxica e fomenta a economía local.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Transparencia</h4>
              <p>
                Coñece quen está detrás de cada produto, a súa historia e o seu modo de produción.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Comunidad</h4>
              <p>
                Únete a unha rede que conecta consumidores conscientes e empresas con valores
                sostibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
