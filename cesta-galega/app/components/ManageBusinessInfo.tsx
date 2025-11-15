'use client';
import { BusinessDTO } from '@/app/lib/business/business.schema';
import Image from 'next/image';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useAlert } from '@/app/context/AlertContext';
import BusinessInfoForm from '@/app/components/BusinessInfoForm';

export default function ManageBusinessInfo({ business }: { business: BusinessDTO }) {
  const { showAlert } = useAlert();
  const MySwal = withReactContent(Swal);

  async function handleClick() {
    await MySwal.fire({
      title: 'Editar información',
      html: <BusinessInfoForm business={business} onSuccess={() => console.log('success')} />,
      showConfirmButton: false,
      width: 800,
    });
  }

  return (
    <section className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-left mb-4">Axustes</h1>
      <div className="w-full max-w-[900px] bg-base-100 shadow-md rounded-xl p-6 border border-base-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Información da empresa</h1>

          {/* Botón de editar (abrirá modal SweetAlert máis adiante) */}
          <button onClick={handleClick} className="btn btn-primary btn-sm rounded">
            Editar información
          </button>
        </div>

        {/* Datos principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo */}
          <div className="col-span-1 flex flex-col items-start gap-3">
            <p className="text-sm font-semibold text-base-content/70">Logo</p>
            {business.logo ? (
              <Image
                src={business.logo}
                alt="Logo da empresa"
                width={120}
                height={120}
                className="rounded-lg border border-base-300"
              />
            ) : (
              <div className="avatar avatar-placeholder">
                <div className="bg-primary text-primary-content w-18 rounded-full">
                  <span className="text-md uppercase">cl</span>
                </div>
              </div>
            )}
          </div>

          {/* Tipo empresa + data creación */}
          <div className="col-span-1">
            <p className="text-sm font-semibold text-base-content/70">Tipo de empresa</p>
            <p className="text-lg mb-3">{business.businessType}</p>

            <p className="text-sm font-semibold text-base-content/70">Data de creación</p>
            <p className="text-lg mb-3">{business.createdAt.toLocaleDateString()}</p>

            <p className="text-sm font-semibold text-base-content/70">IBAN</p>
            <p className="text-lg">
              {business.iban ?? <span className="text-sm text-red-700">Falta por completar</span>}
            </p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Información de contacto */}
        <h2 className="text-xl font-semibold mb-4">Datos de contacto</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Email</p>
            <p className="text-lg break-all">{business.email}</p>
          </div>

          {/* Teléfono */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Teléfono</p>
            <p className="text-lg">{business.phoneNumber}</p>
          </div>

          {/* Instagram */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Instagram</p>
            <p className="text-lg">{business.instagram ?? '—'}</p>
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Facebook</p>
            <p className="text-lg">{business.facebook ?? '—'}</p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Dirección */}
        <h2 className="text-xl font-semibold mb-4">Enderezo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dirección */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Enderezo</p>
            <p className="text-lg">{business.address}</p>
          </div>

          {/* Cidade */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Cidade</p>
            <p className="text-lg">{business.city}</p>
          </div>

          {/* Provincia */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Provincia</p>
            <p className="text-lg">{business.province}</p>
          </div>

          {/* Código Postal */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Código postal</p>
            <p className="text-lg">{business.postalCode}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
