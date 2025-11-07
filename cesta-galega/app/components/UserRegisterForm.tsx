'use client';
import { FormEvent, useState } from 'react';
import { Sex, UserRegisterInput } from '@/app/lib/types/user';
import { Province, provinces } from '@/app/lib/types/shared';
import { useRouter } from 'next/navigation';
import { userRegisterSchema } from '@/app/lib/validators/userValidator';

// Componente con lógica y vista de formulario de registro de usuarios
export default function UserRegisterForm() {
  // Definir formulario de registro de usuario
  const [formData, setFormData] = useState<UserRegisterInput>({
    name: '',
    email: '',
    sex: 'MALE',
    birthDate: '',
    province: 'CORUÑA, A',
    password: '',
  });

  // Definir propiedades del formulario
  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Evitar evento por defecto, eliminar mensaje y establecer cargando
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Verificar datos de formulario usando la librería zod
    const result = userRegisterSchema.safeParse(formData);
    if (!result.success) {
      const error = result.error.issues[0];
      setErrorMsg(error.message);
      setLoading(false);
      return;
    }

    // Verificar que las dos contraseñas introducidas son iguales
    if (pwd !== formData.password) {
      setErrorMsg('Las contraseñas no coinciden');
      setLoading(false);
      return;
    }

    try {
      // Enviar petición a la api para registrar usuario
      const res = await fetch('/api/auth/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'Error al registrarse');
      }

      // Si se ha registrado correctamente enviar a login
      router.push('/user/login');
    } catch (err: any) {
      // Si falla establecer mensaje
      setErrorMsg(err.message || 'Error inesperado');
      console.error('Error inesperado');
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
          required
        />
      </div>
      {/*INPUT EMAIL*/}
      <div className={'input max-w-sm rounded'}>
        <label className={'label-text my-auto me-3 p-0'}>Email*</label>
        <input
          type={'email'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      {/*INPUT GÉNERO*/}
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
      {/*INPUT FECHA DE NACIMIENTO*/}
      <div className={'input max-w-sm rounded'} title={'Fecha de nacimiento'}>
        <label className={'label-text my-auto me-3 p-0'}>F.Nacimiento*</label>
        <input
          type={'date'}
          className={'grow'}
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          required
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
        {loading ? <span className="loading loading-dots"></span> : 'Registrarse'}
      </button>
    </form>
  );
}
