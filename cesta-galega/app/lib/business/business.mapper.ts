import { BusinessPublic } from '@/app/lib/business/business.repo';
import { BusinessDTO as BusinessDTOSchema } from '@/app/lib/business/business.schema';

export function toBusinessDTO(b: BusinessPublic) {
  return BusinessDTOSchema.parse({
    id: b.id,
    name: b.name,
    email: b.email,
    businessType: b.businessType,
    phoneNumber: b.phoneNumber,
    address: b.address,
    city: b.city,
    province: b.province,
    postalCode: b.postalCode,
    iban: b.iban,
    instagram: b.instagram,
    facebook: b.facebook,
    logo: b.logo,
    createdAt: b.createdAt.toISOString(),
  });
}
