'use client';
import { FormEvent, useState } from 'react';
import { BusinessRegisterInput, businessType, BusinessType } from '@/app/lib/types/business';
import { Province, provinces } from '@/app/lib/types/shared';
import { useRouter } from 'next/navigation';

export default function BusinessRegisterForm() {
  const [formData, setFormData] = useState<BusinessRegisterInput>({
    name: '',
    email: '',
    businessType: 'AUTONOMO',
    phoneNumber: '',
    address: '',
    city: '',
    province: 'CORUÑA, A',
    postalCode: '',
    password: '',
  });
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    if (formData.password !== pwd) {
      setErrorMsg('Las contraseñas no coinciden');
      return;
    }
    console.log(JSON.stringify(formData));
    try {
      const res = await fetch('/api/auth/business/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al registrar la empresa');
      }
      router.push('/business/login');
    } catch (err: any) {
      setErrorMsg(err.message || 'Error inesperado');
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
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Email*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div className={'select-floating max-w-sm'}>
        <select
          className={'select max-w-sm'}
          aria-label={'select'}
          onChange={(e) =>
            setFormData({ ...formData, businessType: e.target.value as BusinessType })
          }
          required
        >
          {businessType.map((bt) => (
            <option key={bt} value={bt}>
              {bt}
            </option>
          ))}
        </select>
        <label className={'select-floating-label'}>Tipo*</label>
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Teléfono*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Dirección*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>

      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Ciudad*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
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

      <div className={'input max-w-sm rounded'} title={'Código Postal'}>
        <label className={'label-text my-auto me-3 p-0'}>C.Postal*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
        />
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
        {loading ? <span className="loading loading-dots"></span> : 'Registrar Empresa'}
      </button>
    </form>
  );
}
