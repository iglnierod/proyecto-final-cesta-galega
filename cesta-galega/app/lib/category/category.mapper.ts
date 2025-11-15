import {
  CategoryDTO as CategoryDTOSchema,
  CategoryWithProductsDTO as CategoryWithProductsDTOSchema,
} from '@/app/lib/category/category.schema';
import { CategoryPublic, CategoryWithProducts } from '@/app/lib/category/category.repo';
import { toProductDTO } from '@/app/lib/product/product.mapper';

// Mapper a DTO básico
export function toCategoryDTO(c: CategoryPublic) {
  return CategoryDTOSchema.parse({
    id: c.id,
    name: c.name,
  });
}

// Mapper a DTO con produtos
export function toCategoryWithProductsDTO(c: CategoryWithProducts) {
  return CategoryWithProductsDTOSchema.parse({
    id: c.id,
    name: c.name,
    products: c.products.map((p) => toProductDTO(p)),
  });
}
