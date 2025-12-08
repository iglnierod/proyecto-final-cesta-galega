'use client';

import { FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import {
  Sex,
  SexEnum,
  UserDTO,
  UserUpdateInput,
  UserUpdateSchema,
} from '@/app/lib/user/user.schema';
import { ProvincesEnum, ProvinceType } from '@/app/lib/types/shared';

export default function UserInfoForm({
  user,
  onSuccessAction,
}: {
  user: UserDTO;
  onSuccessAction?: (u: UserDTO) => void;
}) {
  // formato YYYY-MM-DD para o input date
  const birthDateStr = new Date(user.birthDate).toISOString().slice(0, 10);

  const [formData, setFormData] = useState<UserUpdateInput>({
    id: user.id,
    name: user.name,
    email: user.email,
    sex: user.sex as Sex,
    birthDate: birthDateStr,
    province: user.province as ProvinceType,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      // Validar con Zod antes de enviar
      const parsed = UserUpdateSchema.safeParse(formData);
      if (!parsed.success) {
        const first = parsed.error.issues[0];
        setErrorMsg(first?.message ?? 'Datos non válidos');
        setLoading(false);
        return;
      }

      const res = await fetch('/api/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data?.error ?? 'Erro ao actualizar a información do usuario');
      }

      const updated: UserDTO = data.user as UserDTO;
      onSuccessAction?.(updated);
      Swal.close();
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message ?? 'Erro inesperado ao actualizar os datos');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-3 gap-6 justify-between w-full max-w-[840px]"
      >
        {/* NOME */}
        <div className="text-left col-span-3">
          <label htmlFor="name" className="label-text">
            Nome completo <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="input rounded w-full"
            placeholder="Nome e apelidos"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* EMAIL (só lectura) */}
        <div className="text-left col-span-3">
          <label htmlFor="email" className="label-text">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="input rounded w-full bg-base-200 cursor-not-allowed"
            value={formData.email}
            readOnly
          />
          <p className="text-xs text-base-content/60 mt-1">
            O correo non se pode modificar desde aquí.
          </p>
        </div>

        {/* SEXO */}
        <div className="text-left col-span-3 md:col-span-1">
          <label className="label-text">
            Xénero <span className="text-red-500">*</span>
          </label>
          <select
            className="select w-full rounded"
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
        </div>

        {/* DATA NACEMENTO */}
        <div className="text-left col-span-3 md:col-span-1">
          <label htmlFor="birthDate" className="label-text">
            Data de nacemento <span className="text-red-500">*</span>
          </label>
          <input
            id="birthDate"
            type="date"
            className="input rounded w-full"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            required
          />
        </div>

        {/* PROVINCIA */}
        <div className="text-left col-span-3 md:col-span-1">
          <label className="label-text">
            Provincia <span className="text-red-500">*</span>
          </label>
          <select
            className="select w-full rounded"
            value={formData.province}
            onChange={(e) =>
              setFormData({
                ...formData,
                province: e.target.value as ProvinceType,
              })
            }
            required
          >
            <option disabled value="">
              Selecciona a túa provincia
            </option>
            {ProvincesEnum.options.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        {/* ERRO */}
        {errorMsg && <p className="col-span-3 text-error text-sm text-center mt-2">{errorMsg}</p>}

        {/* BOTÓNS */}
        <div className="col-span-3 grid grid-cols-2 gap-6 mt-2">
          <button
            type="button"
            onClick={() => Swal.close()}
            className="btn btn-secondary rounded"
            disabled={loading}
          >
            Cancelar
          </button>

          <button type="submit" className="btn btn-primary rounded" disabled={loading}>
            {loading ? 'Gardando...' : 'Gardar cambios'}
          </button>
        </div>
      </form>
    </section>
  );
}
