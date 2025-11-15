'use client';
import { BusinessDTO } from '@/app/lib/business/business.schema';
import Image from 'next/image';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useAlert } from '@/app/context/AlertContext';
import BusinessInfoForm from '@/app/components/BusinessInfoForm';
import { useRouter } from 'next/navigation';

export default function ManageBusinessInfo({ business }: { business: BusinessDTO }) {
  const { showAlert } = useAlert();
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  async function handleClick() {
    await MySwal.fire({
      title: 'Editar información',
      html: (
        <BusinessInfoForm
          business={business}
          onSuccessAction={(b) => {
            router.refresh();
            showAlert('Actualizouse a información correctamente', 'success');
          }}
        />
      ),
      showConfirmButton: false,
      width: 900,
    });
  }

  async function handleDeleteLogoClick() {
    try {
      const res = await fetch(`/api/business/${business.id}?logoFlag=true`, {
        method: 'DELETE',
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        showAlert('Erro ao eliminar o logo', 'error');
        return;
      }

      // Mensaje tipo toast
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: 'success',
        title: 'Logo eliminado correctamente',
      });

      // Refrescar datos
      router.refresh();
    } catch (err: any) {
      showAlert('Erro inesperado', 'error');
    }
  }

  return (
    <section className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-left mb-4">Axustes</h1>
      <div className="w-full max-w-[900px] bg-base-100 shadow-md rounded-xl p-6 border border-base-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Información da empresa</h1>
          <button onClick={handleClick} className="btn btn-primary btn-sm rounded">
            Editar información
          </button>
        </div>

        {/* Datos principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Logo */}
          <div className="col-span-1 flex flex-col items-start gap-3">
            <p className="text-sm font-semibold text-base-content/70">Logo</p>

            {business.logo ? (
              <>
                <Image
                  src={business.logo}
                  alt="Logo da empresa"
                  width={150}
                  height={150}
                  className="rounded-lg border border-base-300"
                />

                {/* Botón eliminar logo */}
                <button
                  onClick={() => handleDeleteLogoClick()}
                  className="btn btn-warning btn-sm mt-1 rounded"
                >
                  Eliminar logo actual
                </button>
              </>
            ) : (
              <div className="avatar avatar-placeholder">
                <div className="bg-primary text-primary-content w-32 rounded-full">
                  <span className="text-md uppercase">cl</span>
                </div>
              </div>
            )}
          </div>

          {/* Tipo e outros */}
          <div className="col-span-1">
            <p className="text-sm font-semibold text-base-content/70">Tipo de empresa</p>
            <p className="text-lg mb-3">{business.businessType}</p>

            <p className="text-sm font-semibold text-base-content/70">Data de creación</p>
            <p className="text-lg mb-3">{business.createdAt.toString()}</p>

            <p className="text-sm font-semibold text-base-content/70">IBAN</p>
            <p className="text-lg">
              {business.iban && business.iban.trim() !== '' ? (
                business.iban
              ) : (
                <span className="badge badge-outline badge-error">Falta por completar</span>
              )}
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
            <p className="text-lg">
              {business.instagram && business.instagram.trim() !== '' ? (
                business.instagram
              ) : (
                <span className="badge badge-outline badge-warning">Falta por completar</span>
              )}
            </p>
          </div>

          {/* Facebook */}
          <div>
            <p className="text-sm font-semibold text-base-content/70">Facebook</p>
            <p className="text-lg">
              {business.facebook && business.facebook.trim() !== '' ? (
                business.facebook
              ) : (
                <span className="badge badge-outline badge-warning">Falta por completar</span>
              )}
            </p>
          </div>
        </div>

        <hr className="my-6" />

        {/* Dirección */}
        <h2 className="text-xl font-semibold mb-4">Enderezo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-sm font-semibold text-base-content/70">Enderezo</p>
            <p className="text-lg">{business.address}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-base-content/70">Cidade</p>
            <p className="text-lg">{business.city}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-base-content/70">Provincia</p>
            <p className="text-lg">{business.province}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-base-content/70">Código postal</p>
            <p className="text-lg">{business.postalCode}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
