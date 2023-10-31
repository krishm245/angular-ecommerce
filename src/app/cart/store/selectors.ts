import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/global-store/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.cart;

export const selectCartItems = createSelector(
  selectFeature,
  (state) => state.cartItems
);

export const selectIsLoading = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const selectCartErrors = createSelector(
  selectFeature,
  (state) => state.error
);

export const selectCartTotal = createSelector(
  selectFeature,
  (state) => state.cartTotal
);
