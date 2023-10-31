import { createReducer, on } from '@ngrx/store';

import {
  AddItemToCart,
  GetCartItems,
  GetCartItemsFailure,
  GetCartItemsSuccess,
  RemoveItemFromCart,
} from './actions';
import { CartItemsStateInterface } from './cartItemsState.interface';

const initialState: CartItemsStateInterface = {
  isLoading: false,
  cartItems: [],
  cartTotal: 0,
  error: null,
};

export const cartReducers = createReducer(
  initialState,
  on(GetCartItems, (state) => ({ ...state, isLoading: true })),
  on(GetCartItemsSuccess, (state, { cartItems }) => ({
    ...state,
    isLoading: false,
    cartItems: cartItems,
  })),
  on(GetCartItemsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  })),
  on(AddItemToCart, (state, action) => ({
    ...state,
    isLoading: false,
    cartItems: [...state.cartItems, action?.item],
    cartTotal: state.cartTotal + action?.item?.price,
  })),
  on(RemoveItemFromCart, (state, action) => {
    const updatedItems = state.cartItems.filter((product) => {
      return product.id !== action?.item?.id;
    });
    const newCartTotal = state.cartTotal - action?.item?.price;
    return { ...state, cartItems: updatedItems, cartTotal: newCartTotal };
  })
);
