'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { UserLoginInput } from '@/app/lib/types/user';

export default function UserLoginForm() {
  const [formData, setFormData] = useState<UserLoginInput>({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/auth/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al inciar sesión');
      }

      router.push('/');
    } catch (err: any) {
      setErrorMsg(err.msg || 'Error inesperado');
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
          placeholder={'mail@example.com'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Password</label>
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
