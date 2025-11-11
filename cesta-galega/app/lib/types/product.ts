export interface ProductCreateInput {
  name: string;
  description: string;
  image: string;
  businessId: number;
  price: number;
  discounted: boolean;
  discount: number | undefined;
  categoryIds: number[];
  enabled: boolean;
}
