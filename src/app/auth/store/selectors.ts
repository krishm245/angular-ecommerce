import { AppStateInterface } from 'src/app/global-store/appState.interface';
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.user;

export const selectIsSubmitted = createSelector(
  selectFeature,
  (state) => state.isSubmitted
);

export const selectCurrentUser = createSelector(
  selectFeature,
  (state) => state.currentUser
);
