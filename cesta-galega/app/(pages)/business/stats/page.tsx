import { getAuthTokenDecoded, JwtPayloadBusiness } from '@/app/lib/auth';
import BusinessStatsClient from '@/app/components/BusinessStatsClient';

export default async function BusinessStatsPage() {
  const decoded = (await getAuthTokenDecoded()) as JwtPayloadBusiness;

  return (
    <div className="p-4">
      <BusinessStatsClient businessId={decoded.businessId} />
    </div>
  );
}
