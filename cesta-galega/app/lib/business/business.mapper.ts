import { BusinessPublic } from '@/app/lib/business/business.repo';
import { BusinessDTO } from '@/app/lib/business/business.schema';

export function toBusinessDTO(b: BusinessPublic) {
  return BusinessDTO.parse({
    id: b.id,
    name: b.name,
    email: b.email,
    businessType: b.businessType,
    phoneNumber: b.phoneNumber,
    address: b.address,
    city: b.city,
    province: b.province,
    postalCode: b.postalCode,
    createdAt: b.createdAt.toISOString(),
  });
}
