'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/app/context/AlertContext';
import { UserLoginInput, UserLoginSchema } from '@/app/lib/user/user.schema';

export default function UserLoginForm() {
  const [formData, setFormData] = useState<UserLoginInput>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();
  const { showAlert } = useAlert();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevenir acciones por defecto
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Verificación de formulario y devolver error si falla algún formato
    const parsed = UserLoginSchema.safeParse(formData);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      setErrorMsg(first?.message ?? 'Datos non válidos');
      setLoading(false);
      return;
    }

    try {
      // Hacer petición de loggear usuario
      const res = await fetch('/api/auth/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      // Si el registro falló
      if (!res.ok) {
        // Obtener datos de vuelta
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al inciar sesión');
      }

      // Mostrar alerta de confirmación y redirigir
      showAlert('Inicio de sesión exitoso', 'success');
      router.push('/');
    } catch (err: any) {
      setErrorMsg(err.message || 'Error inesperado');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Correo</label>
        <input
          type={'email'}
          className={'grow'}
          placeholder={'mail@example.com'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Contrasinal</label>
        <input
          type={'password'}
          className={'grow'}
          placeholder={'....'}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      {errorMsg && (
        <p className={'text-sm text-red-600'} role={'alert'}>
          {errorMsg}
        </p>
      )}

      <button type={'submit'} className={'btn btn-primary rounded'} disabled={loading}>
        {loading ? 'Iniciando...' : 'Iniciar sesión'}
      </button>
    </form>
  );
}
