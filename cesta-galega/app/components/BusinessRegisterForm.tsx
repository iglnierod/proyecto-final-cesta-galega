'use client';
import { FormEvent, useState } from 'react';
import { BusinessRegisterInput, businessType, BusinessType } from '@/app/lib/types/business';
import { Province, provinces } from '@/app/lib/types/shared';
import { useRouter } from 'next/navigation';
import { businessRegisterSchema } from '@/app/lib/validators/businessValidator';

// Componente con lógica y vista de formulario de registro de empresas
export default function BusinessRegisterForm() {
  // Definir formulario de registro de empresa
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

  // Definir estados y propiedades del componente
  const [pwd, setPwd] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const router = useRouter();

  // Función que se ejecuta al enviar el formulario
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Evitar evento por defecto, eliminar mensaje y establecer cargando
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Verificar datos de formulario usando la librería zod
    const result = businessRegisterSchema.safeParse(formData);
    if (!result.success) {
      const error = result.error.issues[0];
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    // Verificar que las dos contraseñas introducidas son iguales
    if (formData.password !== pwd) {
      setErrorMsg('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      // Enviar petición a la api para registrar empresa
      const res = await fetch('/api/auth/business/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Si falla el backend lanza error
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al registrar la empresa');
      }

      // Si se ha registrado correctamente enviar a login
      router.push('/business/login');
    } catch (err: any) {
      // Si falla establecer mensaje
      setErrorMsg(err.message || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }

  // Devolver vista
  return (
    <form className={'flex flex-col gap-3'} onSubmit={handleSubmit}>
      {/*INPUT NOMBRE*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Nombre*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      {/*INPUT EMAIL*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Email*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      {/*INPUT TIPO DE EMPRESA*/}
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
      {/*INPUT TELEFONO*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Teléfono*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
      </div>
      {/*INPUT DIRECCION*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Dirección*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
        />
      </div>
      {/*INPUT CIUDAD*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Ciudad*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        />
      </div>
      {/*INPUT PROVINCIA*/}
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
      {/*INPUT CODIGO POSTAL*/}
      <div className={'input max-w-sm rounded'} title={'Código Postal'}>
        <label className={'label-text my-auto me-3 p-0'}>C.Postal*</label>
        <input
          type={'text'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
        />
      </div>
      {/*INPUT CONTRASEÑA*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Contraseña*</label>
        <input
          type={'password'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      {/*INPUT CONFIRMAR CONTRASEÑA*/}
      <div className={'input max-w-sm rounded'} title={'Confirmar contraseña'}>
        <label className={'label-text my-auto me-3 p-0'}>Conf.Contraseña*</label>
        <input type={'password'} className={'grow'} onChange={(e) => setPwd(e.target.value)} />
      </div>

      {/*MENSAJE DE ERROR*/}
      {errorMsg && (
        <p className={'text-sm text-red-600'} role={'alert'}>
          {errorMsg}
        </p>
      )}

      {/*BOTÓN PARA ENVIAR FORM*/}
      <button type={'submit'} className={'btn btn-primary rounded'}>
        {loading ? <span className="loading loading-dots"></span> : 'Registrar Empresa'}
      </button>
    </form>
  );
}
