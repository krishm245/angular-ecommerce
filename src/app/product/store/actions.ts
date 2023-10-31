import { createAction, props } from '@ngrx/store';
import { ProductInterface } from '../types/product.interface';

export const GetProducts = createAction('[Product] Get Products');
export const GetProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ products: ProductInterface[] }>()
);
export const GetProductsFailure = createAction(
  '[Product] Get Products Failure',
  props<{ error: string }>()
);
