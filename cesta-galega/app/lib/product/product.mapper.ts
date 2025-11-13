// lib/product/product.mappers.ts
import { ProductDTO, ProductWithBusinessDTO } from '@/app/lib/product/product.schema';
import { ProductLite, ProductWithBusiness } from '@/app/lib/product/product.repo';

export function toProductDTO(p: ProductLite) {
  // Sanitiza/normaliza por si hay nulls/undefined
  return ProductDTO.parse({
    id: p.id,
    name: p.name,
    description: p.description ?? '',
    price: p.price,
    discounted: p.discounted,
    discount: p.discount ?? 0,
    enabled: p.enabled,
    image: p.image ?? '##',
  });
}

export function toProductWithBusinessDTO(p: ProductWithBusiness) {
  return ProductWithBusinessDTO.parse({
    id: p.id,
    name: p.name,
    description: p.description ?? '',
    price: p.price,
    discounted: p.discounted,
    discount: p.discount ?? 0,
    enabled: p.enabled,
    image: p.image ?? '##',
    business: {
      id: p.business.id,
      name: p.business.name,
      province: p.business.province ?? null,
      city: p.business.city ?? null,
    },
    // categories: p.categories?.map(c => ({ id: c.id, name: c.name })) ?? [],
  });
}
