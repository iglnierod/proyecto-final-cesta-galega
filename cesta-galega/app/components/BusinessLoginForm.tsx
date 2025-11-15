'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/app/context/AlertContext';
import { BusinessLoginInput } from '@/app/lib/business/business.schema';

// Componente con la lógica y vista del formulario de login de empresas
export default function BusinessLoginForm() {
  // Definir estado del formulario y propiedades del componente
  const [formData, setFormData] = useState<BusinessLoginInput>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();
  const { showAlert } = useAlert();

  // Función que se ejecuta al enviar el formulario
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      // Enviar petición a la API para iniciar sesión
      const res = await fetch('/api/auth/business/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Si la respuesta no es correcta, lanzar error
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Erro ao iniciar sesión');
      }

      // Si el login es correcto, mostrar alerta y redirigir
      showAlert('A sesión iniciouse correctamente', 'success');
      router.push('/');
    } catch (err: any) {
      // Si falla, establecer mensaje de error
      setErrorMsg(err.message || 'Erro inesperado');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  // Devolver vista del formulario
  return (
    <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
      {/*INPUT EMAIL*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Correo*</label>
        <input
          type={'email'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      {/*INPUT CONTRASINAL*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Contrasinal*</label>
        <input
          type={'password'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      {/*MENSAJE DE ERROR*/}
      {errorMsg && (
        <p className={'text-sm text-red-600'} role={'alert'}>
          {errorMsg}
        </p>
      )}

      {/*BOTÓN PARA ENVIAR FORM*/}
      <button type={'submit'} className={'btn btn-primary rounded'} disabled={loading}>
        {loading ? <span className="loading loading-dots"></span> : 'Iniciar sesión'}
      </button>
    </form>
  );
}
