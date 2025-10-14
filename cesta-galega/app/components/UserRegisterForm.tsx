'use client';
import { FormEvent, useState } from 'react';
import { Sex, UserRegisterInput } from '@/app/lib/types/user';
import { Province, provinces } from '@/app/lib/types/shared';
import { useRouter } from 'next/navigation';

export default function UserRegisterForm() {
  const [formData, setFormData] = useState<UserRegisterInput>({
    name: '',
    email: '',
    sex: 'MALE',
    birthDate: '',
    province: 'CORUÑA, A',
    password: '',
  });
  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    if (pwd !== formData.password) {
      setErrorMsg('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await fetch('/api/auth/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? 'Error al registrarse');
      }

      router.push('/user/login');
    } catch (err: any) {
      setErrorMsg(err.message || 'Error inesperado');
      console.error('Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Nombre*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Email*</label>
        <input
          type={'email'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div className={'select-floating max-w-sm'}>
        <select
          className="select max-w-sm"
          aria-label="select"
          onChange={(e) => setFormData({ ...formData, sex: e.target.value as Sex })}
          required
        >
          <option value={'MALE'}>Hombre</option>
          <option value={'FEMALE'}>Mujer</option>
          <option value={'OTHER'}>Prefiero no decirlo</option>
        </select>
        <label className="select-floating-label">Género*</label>
      </div>

      <div className={'input max-w-sm rounded'} title={'Fecha de nacimiento'}>
        <label className={'label-text my-auto me-3 p-0'}>F.Nacimiento*</label>
        <input
          type={'date'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          required
        />
      </div>

      <div className={'select-floating max-w-sm'}>
        <select
          className="select max-w-sm"
          aria-label="select"
          onChange={(e) => setFormData({ ...formData, province: e.target.value as Province })}
          required
        >
          <option disabled defaultValue={'OTHER'}>
            Selecciona tu provincia
          </option>
          {provinces.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <label className="select-floating-label">Provincia*</label>
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Contraseña*</label>
        <input
          type={'password'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      <div className={'input max-w-sm rounded'} title={'Confirmar contraseña'}>
        <label className={'label-text my-auto me-3 p-0'}>Conf.Contraseña*</label>
        <input type={'password'} className={'grow'} onChange={(e) => setPwd(e.target.value)} />
      </div>

      {errorMsg && (
        <p className={'text-sm text-red-600'} role={'alert'}>
          {errorMsg}
        </p>
      )}

      <button type={'submit'} className={'btn btn-primary rounded'}>
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
    </form>
  );
}
