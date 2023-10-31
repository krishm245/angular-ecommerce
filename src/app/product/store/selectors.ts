import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/global-store/appState.interface';

const selectFeature = (state: AppStateInterface) => state.product;

export const selectProducts = createSelector(selectFeature, (state) => {
  return state.products;
});

export const selectIsLoading = createSelector(selectFeature, (state) => {
  return state.isLoading;
});
