import { createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/global-store/appState.interface';

const selectFeature = (state: AppStateInterface) => state.order;

export const selectOrders = createSelector(
  selectFeature,
  (state) => state.orders
);
