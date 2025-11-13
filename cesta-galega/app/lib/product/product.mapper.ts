// lib/product/product.mappers.ts
import { ProductDTO, ProductWithBusinessDTO } from '@/app/lib/product/product.schema';
import { ProductLite, ProductWithBusiness } from '@/app/lib/product/product.repo';

export function toProductDTO(p: ProductLite) {
  return ProductDTO.parse({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    discounted: p.discounted,
    discount: p.discount,
    enabled: p.enabled,
    image: p.image,
    deleted: p.deleted,
    createdAt: p.createdAt,
  });
}

export function toProductWithBusinessDTO(p: ProductWithBusiness) {
  return ProductWithBusinessDTO.parse({
    id: p.id,
    name: p.name,
    description: p.description,
    price: p.price,
    discounted: p.discounted,
    discount: p.discount,
    enabled: p.enabled,
    image: p.image,
    deleted: p.deleted,
    createdAt: p.createdAt,
    business: {
      id: p.business.id,
      name: p.business.name,
      province: p.business.province,
      city: p.business.city,
    },
    categories: p.categories.map((c) => ({
      id: c.id,
      name: c.name,
    })),
  });
}
