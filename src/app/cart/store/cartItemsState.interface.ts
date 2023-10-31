import { ProductInterface } from 'src/app/product/types/product.interface';
import { CartItemsInterface } from '../types/cartItems.interface';

export interface CartItemsStateInterface {
  isLoading: boolean;
  cartItems: ProductInterface[] | [];
  cartTotal: number;
  error: string | null;
}
