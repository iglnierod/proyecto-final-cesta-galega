import Link from 'next/link';
import Image from 'next/image';
import imgPaquete from '@/public/assets/paquete.png';
import { isBusinessLoggedIn } from '@/app/lib/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  // Si hay cookies de login de empresa, redirigir a dashboard
  const businessLoggedIn = await isBusinessLoggedIn();
  if (businessLoggedIn) {
    redirect('/business/dashboard');
  }

  return (
    <>
      {/*1er APARTADO*/}
      <section className="bg-blue-900 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Cesta Galega</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Descubre el mercado gallego más grande y fácil de usar. Compra directamente a
            productores locales y apoya el comercio de proximidad.
          </p>
          <Link
            href="/shop"
            className="inline-block mt-8 px-8 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-100 transition"
          >
            Explorar tienda
          </Link>
        </div>
      </section>
      {/*2do APARTADO*/}
      <section className="py-20 text-center">
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between md:text-left">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold">Empieza a vender online</h2>
            <p className="mt-4 ">
              Si eres productor, artesano o comerciante, en Cesta Galega puedes crear tu tienda en
              minutos, mostrar tus productos y llegar a miles de clientes en toda Galicia.
            </p>
            <Link
              href="/business/register"
              className="inline-block mt-6 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-950 transition"
            >
              Crear cuenta de vendedor
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image src={imgPaquete} alt="Vendedor mostrando sus productos" width={300} />
          </div>
        </div>
      </section>
      {/*3er APARTADO*/}
      <section className="bg-blue-900 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-bold mb-8">¿Por qué elegir Cesta Galega?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Proximidad</h4>
              <p>
                Compra a productores gallegos, reduce la huella ecológica y fomenta la economía
                local.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Transparencia</h4>
              <p>Conoce quién está detrás de cada producto, su historia y su modo de producción.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow">
              <h4 className="text-xl font-semibold mb-2">Comunidad</h4>
              <p>
                Únete a una red que conecta consumidores conscientes y empresas con valores
                sostenibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
