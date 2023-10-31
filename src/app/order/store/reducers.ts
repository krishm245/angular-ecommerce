import { createReducer, on } from '@ngrx/store';
import { OrderStateInterface } from './orderState.interface';
import { GetOrderFailure, GetOrders, GetOrdersSuccess } from './actions';

const initialState: OrderStateInterface = {
  isLoading: false,
  orders: [],
  error: null,
};

export const orderReducers = createReducer(
  initialState,
  on(GetOrders, (state) => ({ ...state, isLoading: true, error: 'No error' })),
  on(GetOrdersSuccess, (state, { orders }) => ({
    ...state,
    isLoading: false,
    orders: orders,
  })),
  on(GetOrderFailure, (state, action) => ({ ...state, error: action.error }))
);
