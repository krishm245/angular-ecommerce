import { createReducer, on } from '@ngrx/store';
import {
  UserLoginAttempt,
  UserLoginFailure,
  UserLoginSuccess,
} from './actions';
import { state } from '@angular/animations';
import { UserStateInterface } from './userState.interface';

export const initialState: UserStateInterface = {
  isSubmitted: false,
  currentUser: null,
  error: null,
};

export const userReducers = createReducer(
  initialState,
  on(UserLoginAttempt, (state) => ({ ...state, isSubmitted: true })),
  on(UserLoginSuccess, (state, { currentUser }) => ({
    ...state,
    isSubmitted: false,
    currentUser: currentUser,
    error: null,
  })),
  on(UserLoginFailure, (state, action) => ({
    ...state,
    isSubmitted: false,
    error: action.error,
  }))
);
