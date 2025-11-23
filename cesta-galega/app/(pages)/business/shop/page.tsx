import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import ShopClient from '@/app/components/ShopClient';

export default async function ShopPage() {
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  return <ShopClient businessId={decoded.businessId} />;
}
