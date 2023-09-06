import { ProductType } from "./typeProduct";

export interface CartsType {
  carts: CartType[];
  total: number;
  skip: number;
  limit: number;
}

export interface CartType {
  id: number;
  products: ProductType[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
