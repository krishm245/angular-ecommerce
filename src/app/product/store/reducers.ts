import { createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from './productState.interface';
import { GetProducts, GetProductsFailure, GetProductsSuccess } from './actions';

const initialState: ProductStateInterface = {
  isLoading: false,
  products: [],
};

export const productReducers = createReducer(
  initialState,
  on(GetProducts, (state) => ({ ...state, isLoading: true })),
  on(GetProductsSuccess, (state, { products }) => ({
    ...state,
    isLoading: false,
    products: products,
  })),
  on(GetProductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    products: [],
    error: action.error,
  }))
);
