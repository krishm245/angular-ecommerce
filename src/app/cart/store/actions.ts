import { createAction, props } from '@ngrx/store';
import { CartItemsInterface } from '../types/cartItems.interface';
import { ProductInterface } from 'src/app/product/types/product.interface';

export const GetCartItems = createAction('[Cart] Get Cart Items');
export const GetCartItemsSuccess = createAction(
  '[Cart] Get Cart Items Success',
  props<{ cartItems: ProductInterface[] | [] }>()
);
export const GetCartItemsFailure = createAction(
  '[Cart] Get Cart Items Failure',
  props<{ error: string }>()
);
export const AddItemToCart = createAction(
  '[Cart] Add Item To Cart',
  props<{ item: ProductInterface }>()
);
export const RemoveItemFromCart = createAction(
  '[Cart] Remove Item From Cart',
  props<{ item: ProductInterface }>()
);
