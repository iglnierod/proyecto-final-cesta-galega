import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import ManageProductsClient from '@/app/components/ManageProducts';
import { findBusinessById } from '@/app/lib/business/business.repo';

export default async function ManageProductsPage() {
  // Obtener datos de la empresa loggeada
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  const business = await findBusinessById(decoded.businessId);

  if (!business) {
    throw new Error('No se encontró la empresa. Vuelva a intentarlo más tarde.');
  }

  // Devolver componente con botón + tabla
  return <ManageProductsClient businessId={business.id} />;
}
