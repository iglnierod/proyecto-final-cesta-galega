'use client';

import { BusinessDTO, BusinessEditInput, BusinessType } from '@/app/lib/business/business.schema';
import { FormEvent, useState } from 'react';
import Swal from 'sweetalert2';
import { ProvincesEnum, ProvinceType } from '@/app/lib/types/shared';

export default function BusinessInfoForm({
  business,
  onSuccess,
}: {
  business: BusinessDTO;
  onSuccess?: (b: BusinessDTO) => void;
}) {
  const [formData, setFormData] = useState<BusinessEditInput>({
    id: business.id,
    name: business.name,
    email: business.email,
    businessType: business.businessType as BusinessType,
    phoneNumber: business.phoneNumber,
    address: business.address,
    city: business.city,
    province: business.province as ProvinceType,
    postalCode: business.postalCode,
    iban: business.iban ?? '',
    instagram: business.instagram ?? '',
    facebook: business.facebook ?? '',
    logo: business.logo ?? '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch(`/api/business/${business.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error ?? 'Erro ao actualizar a empresa');

      onSuccess?.(data.business);
      Swal.close();
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8 justify-between w-full">
        {/* NOME */}
        <div className="text-left col-span-3">
          <label htmlFor="name" className="label-text">
            Nome <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="input rounded"
            placeholder="Nome da empresa"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>

        {/* EMAIL */}
        <div className="text-left col-span-3">
          <label htmlFor="email" className="label-text">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            className="input rounded"
            placeholder="correo@empresa.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>

        {/* TIPO EMPRESA */}
        <div className="text-left">
          <label className="label-text">Tipo de empresa</label>
          <select
            className="select w-full rounded"
            value={formData.businessType}
            onChange={(e) =>
              setFormData({
                ...formData,
                businessType: e.target.value as BusinessType,
              })
            }
          >
            <option value="S.L">S.L</option>
            <option value="S.A">S.A</option>
            <option value="AUTONOMO">Autónomo</option>
            <option value="COOPERATIVA">Cooperativa</option>
          </select>
        </div>

        {/* TELÉFONO */}
        <div className="text-left">
          <label className="label-text">
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            className="input rounded"
            placeholder="XXX XXX XXX"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          />
        </div>

        {/* IBAN */}
        <div className="text-left">
          <label className="label-text">IBAN</label>
          <input
            className="input rounded"
            placeholder="ES00 0000 0000 0000 0000"
            value={formData.iban ?? ''}
            onChange={(e) => setFormData({ ...formData, iban: e.target.value })}
          />
        </div>

        {/* ENDEREZO */}
        <div className="text-left col-span-3">
          <label className="label-text">
            Enderezo <span className="text-red-500">*</span>
          </label>
          <input
            className="input rounded"
            placeholder="Rúa, número..."
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />
        </div>

        {/* CIDADE */}
        <div className="text-left">
          <label className="label-text">
            Cidade <span className="text-red-500">*</span>
          </label>
          <input
            className="input rounded"
            placeholder="Cidade"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>

        {/* PROVINCIA (SELECT) */}
        <div className="text-left">
          <label className="label-text">
            Provincia <span className="text-red-500">*</span>
          </label>

          <select
            className="select w-full rounded"
            value={formData.province}
            onChange={(e) => setFormData({ ...formData, province: e.target.value as ProvinceType })}
            required
          >
            <option disabled value="">
              Selecciona unha provincia
            </option>

            {ProvincesEnum.options.map((prov) => (
              <option key={prov} value={prov}>
                {prov}
              </option>
            ))}
          </select>
        </div>

        {/* CÓDIGO POSTAL */}
        <div className="text-left">
          <label className="label-text">
            Código postal <span className="text-red-500">*</span>
          </label>
          <input
            className="input rounded"
            placeholder="XXXXX"
            value={formData.postalCode}
            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            required
          />
        </div>

        {/* INSTAGRAM */}
        <div className="text-left col-span-3">
          <label className="label-text">Instagram</label>
          <input
            className="input rounded"
            placeholder="@tenda"
            value={formData.instagram ?? ''}
            onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
          />
        </div>

        {/* FACEBOOK */}
        <div className="text-left col-span-3">
          <label className="label-text">Facebook</label>
          <input
            className="input rounded"
            placeholder="facebook.com/tenda"
            value={formData.facebook ?? ''}
            onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
          />
        </div>

        {/* LOGO */}
        <div className="text-left col-span-3">
          <label className="label-text">Logo (URL)</label>
          <input
            className="input rounded"
            placeholder="https://..."
            value={formData.logo ?? ''}
            onChange={(e) => setFormData({ ...formData, logo: e.target.value })}
          />
        </div>
        {/* ERRO */}
        {errorMsg && <p className="col-span-3 text-error text-sm text-center mt-2">{errorMsg}</p>}
        {/* BOTÓNS */}
        <div className="col-span-3 grid grid-cols-2 gap-8">
          <button
            type="button"
            onClick={() => Swal.close()}
            className="btn btn-secondary rounded"
            disabled={loading}
          >
            Cancelar
          </button>

          <button type="submit" className="btn btn-primary rounded" disabled={loading}>
            Gardar cambios
          </button>
        </div>
      </form>
    </section>
  );
}
