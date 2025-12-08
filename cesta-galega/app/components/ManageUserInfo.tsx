'use client';

import { useRouter } from 'next/navigation';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { useAlert } from '@/app/context/AlertContext';
import { UserDTO } from '@/app/lib/user/user.schema';
import UserInfoForm from '@/app/components/UserInfoForm';

export default function ManageUserInfo({ user }: { user: UserDTO }) {
  const { showAlert } = useAlert();
  const MySwal = withReactContent(Swal);
  const router = useRouter();

  async function handleEditClick() {
    await MySwal.fire({
      title: 'Editar información',
      html: (
        <UserInfoForm
          user={user}
          onSuccessAction={() => {
            router.refresh();
            showAlert('Actualizouse a información correctamente', 'success');
          }}
        />
      ),
      showConfirmButton: false,
      width: 800,
    });
  }

  async function handleDeleteAccount() {
    const result = await Swal.fire({
      title: 'Eliminar conta',
      text: 'Esta acción non se pode desfacer. Seguro que queres eliminar a túa conta?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar conta',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc2626',
    });

    if (!result.isConfirmed) return;

    try {
      const res = await fetch('/api/user', {
        method: 'DELETE',
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        showAlert(data?.error ?? 'Erro ao eliminar a conta', 'error');
        return;
      }

      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: 'success',
        title: 'Conta eliminada correctamente',
      });

      router.push('/');
    } catch (err: any) {
      console.error(err);
      showAlert('Erro inesperado ao eliminar a conta', 'error');
    }
  }

  const birthDateFormatted = new Date(user.birthDate).toLocaleDateString('es-ES');
  const createdAtFormatted = new Date(user.createdAt).toLocaleDateString('es-ES');

  return (
    <section className="flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold text-left mb-4 w-full max-w-[900px]">Axustes</h1>

      <div className="w-full max-w-[900px] bg-base-100 shadow-md rounded-xl p-6 border border-base-300 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Información da conta</h2>
          <button onClick={handleEditClick} className="btn btn-primary btn-sm rounded">
            Editar información
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Columna esquerda: info básica */}
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-base-content/70">Nome completo</p>
              <p className="text-lg break-words">{user.name}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-base-content/70">Email</p>
              <p className="text-lg break-all">{user.email}</p>
            </div>

            <div>
              <p className="text-sm font-semibold text-base-content/70">Conta creada o</p>
              <p className="text-lg">{createdAtFormatted}</p>
            </div>
          </div>

          {/* Columna dereita: datos persoais */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-base-content/70">Xénero</p>
                <p className="text-lg">{user.sex}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-base-content/70">Data de nacemento</p>
                <p className="text-lg">{birthDateFormatted}</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-base-content/70">Provincia</p>
              <p className="text-lg">{user.province}</p>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        {/* Eliminar conta */}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-error">Eliminar conta</h3>
          <p className="text-sm text-base-content/70">
            Se eliminas a túa conta, perderás o acceso aos teus datos de usuario e pedidos
            asociados. Esta acción non se pode desfacer.
          </p>
          <button
            type="button"
            onClick={handleDeleteAccount}
            className="btn btn-error btn-outline btn-sm rounded mt-2"
          >
            Eliminar conta definitivamente
          </button>
        </div>
      </div>
    </section>
  );
}
