import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold">O produto non existe</h1>
        <p className="text-base-content/70">O produto que buscas non existe ou foi eliminado.</p>
        <Link href="/business/manage/products" className="link link-primary link-animated">
          Voltar a xestión
        </Link>
      </div>
    </section>
  );
}
