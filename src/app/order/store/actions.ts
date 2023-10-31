import { createAction, props } from '@ngrx/store';
import { OrderInterface } from '../types/order.interface';

export const GetOrders = createAction(
  '[Orders] Get Order',
  props<{ id: string }>()
);
export const GetOrdersSuccess = createAction(
  '[Orders] Get Order Success',
  props<{ orders: any }>()
);
export const GetOrderFailure = createAction(
  '[Orders] Get Order Failure',
  props<{ error: string }>()
);

export const PlaceOrder = createAction(
  '[Orders] Place Order',
  props<{ order: any }>()
);

export const PlaceOrderSuccess = createAction(
  '[Orders] Place Order Success',
  props<{ order: any }>()
);

export const PlaceOrderFailure = createAction(
  '[Orders] Place Order Failure',
  props<{ error: string }>()
);
