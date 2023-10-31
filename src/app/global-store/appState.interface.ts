import { UserEffects } from '../auth/store/effects';
import { userReducers } from '../auth/store/reducers';
import { UserStateInterface } from '../auth/store/userState.interface';
import { CartItemsStateInterface } from '../cart/store/cartItemsState.interface';
import { cartReducers } from '../cart/store/reducers';
import { OrderEffects } from '../order/store/effects';
import { OrderStateInterface } from '../order/store/orderState.interface';
import { orderReducers } from '../order/store/reducers';
import { ProductEffect } from '../product/store/effects';
import { ProductStateInterface } from '../product/store/productState.interface';
import { productReducers } from '../product/store/reducers';

export interface AppStateInterface {
  user: UserStateInterface;
  product: ProductStateInterface;
  cart: CartItemsStateInterface;
  order: OrderStateInterface;
}

export const appReducers = {
  user: userReducers,
  product: productReducers,
  cart: cartReducers,
  order: orderReducers,
};

export const appEffects = {
  user: UserEffects,
  product: ProductEffect,
  order: OrderEffects,
};
