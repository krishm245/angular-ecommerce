import { ProductInterface } from '../types/product.interface';

export interface ProductStateInterface {
  isLoading: boolean;
  products: ProductInterface[];
}
