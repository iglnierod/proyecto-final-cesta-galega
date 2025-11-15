import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import { findBusinessById } from '@/app/lib/business/business.repo';
import ManageBusinessInfo from '@/app/components/ManageBusinessInfo';

export default async function BusinessSettingsPage() {
  // Obtener datos de la empresa loggeada
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;
  const business = await findBusinessById(decoded.businessId);

  if (!business) {
    throw new Error('Non se atopou a empresa. Volva tentalo máis tarde.');
  }

  return <ManageBusinessInfo business={business} />;
}
