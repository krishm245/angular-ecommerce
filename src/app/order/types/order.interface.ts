import { ProductInterface } from 'src/app/product/types/product.interface';

export interface OrderInterface {
  orders: {
    products: ProductInterface[];
  };
}
