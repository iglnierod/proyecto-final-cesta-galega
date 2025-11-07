'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BusinessLoginInput } from '@/app/lib/types/business';
import { useAlert } from '@/app/context/AlertContext';

export default function BusinessLoginForm() {
  const [formData, setFormData] = useState<BusinessLoginInput>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();
  const { showAlert } = useAlert();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/business/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al inciar sesión');
      }

      showAlert('Sesión iniciada correctamente', 'success');
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
        <label className={'label-text my-auto me-3 p-0'}>Email</label>
        <input
          type={'email'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Password</label>
        <input
          type={'password'}
          className={'grow'}
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
        {loading ? <span className="loading loading-dots"></span> : 'Iniciar sesión'}
      </button>
    </form>
  );
}
