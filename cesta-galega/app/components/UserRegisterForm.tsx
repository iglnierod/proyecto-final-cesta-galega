'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAlert } from '@/app/context/AlertContext';
import { Sex, SexEnum, UserRegisterInput, UserRegisterSchema } from '@/app/lib/user/user.schema';
import { ProvincesEnum, ProvinceType } from '@/app/lib/types/shared';

export default function UserRegisterForm() {
  const [formData, setFormData] = useState<UserRegisterInput>({
    name: '',
    email: '',
    sex: 'Prefiero no decirlo',
    birthDate: '',
    province: 'CORUÑA, A',
    password: '',
  });

  const [pwd, setPwd] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { showAlert } = useAlert();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // Prevenir acciones por defecto
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    // Verificación de formulario y devolver error si falla algún formato
    const parsed = UserRegisterSchema.safeParse(formData);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      setErrorMsg(first?.message ?? 'Datos non válidos');
      setLoading(false);
      return;
    }

    // Verificar que las dos contraseñas introducidas son iguales
    if (pwd !== formData.password) {
      setErrorMsg('Os contrasinais non coinciden');
      setLoading(false);
      return;
    }

    try {
      // Hacer petición de crear usuario
      const res = await fetch('/api/auth/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      // Obtener datos de vuelta
      const data = await res.json().catch(() => ({}));

      // Si el registro falló
      if (!res.ok) {
        throw new Error(data?.error ?? 'Erro no rexistro');
      }

      // Mostrar alerta de confirmación y redirigir a login
      showAlert('O usuario creouse correctamente. Agora inicie sesión', 'success');
      router.push('/user/login');
    } catch (err: any) {
      // Mostrar error
      setErrorMsg(err.message || 'Erro inesperado. Volva tentalo máis tarde');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {/* NOMBRE */}
      <div className="input max-w-sm rounded">
        <label className="label-text my-auto me-3 p-0">Nome*</label>
        <input
          type="text"
          className="grow"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      {/* CORREO */}
      <div className="input max-w-sm rounded">
        <label className="label-text my-auto me-3 p-0">Correo*</label>
        <input
          type="email"
          className="grow"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      {/* GENERO */}
      <div className="select-floating max-w-sm">
        <select
          className="select max-w-sm"
          aria-label="Seleccionar xénero"
          value={formData.sex}
          onChange={(e) => setFormData({ ...formData, sex: e.target.value as Sex })}
          required
        >
          <option disabled value="">
            Selecciona o teu xénero
          </option>
          {SexEnum.options.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <label className="select-floating-label">Xénero*</label>
      </div>

      {/* FEHCA DE NACIMIENTO */}
      <div className="input max-w-sm rounded" title="Data de nacemento">
        <label className="label-text my-auto me-3 p-0">F.nacemento*</label>
        <input
          type="date"
          className="grow"
          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
          required
        />
      </div>

      {/* PROVINCIA */}
      <div className="select-floating max-w-sm">
        <select
          className="select max-w-sm"
          aria-label="Seleccionar provincia"
          value={formData.province}
          onChange={(e) => setFormData({ ...formData, province: e.target.value as ProvinceType })}
          required
        >
          <option disabled value="">
            Selecciona a túa provincia
          </option>
          {ProvincesEnum.options.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <label className="select-floating-label">Provincia*</label>
      </div>

      {/* CONTRASEÑA */}
      <div className="input max-w-sm rounded">
        <label className="label-text my-auto me-3 p-0">Contrasinal*</label>
        <input
          type="password"
          className="grow"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>

      {/* CONFIRMAR CONTRASEÑA */}
      <div className="input max-w-sm rounded" title="Confirmar contrasinal">
        <label className="label-text my-auto me-3 p-0">Confirmar contrasinal*</label>
        <input type="password" className="grow" onChange={(e) => setPwd(e.target.value)} required />
      </div>

      {/* ERROR */}
      {errorMsg && (
        <p className="text-sm text-red-600" role="alert">
          {errorMsg}
        </p>
      )}

      {/* SUBMIT */}
      <button type="submit" className="btn btn-primary rounded">
        {loading ? <span className="loading loading-dots"></span> : 'Rexistrarse'}
      </button>
    </form>
  );
}
