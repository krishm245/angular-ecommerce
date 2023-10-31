import { createAction, props } from '@ngrx/store';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';

export const UserLoginAttempt = createAction(
  '[Auth Login] User Login Attempt',
  props<{ request: LoginRequestInterface }>()
);
export const UserLoginSuccess = createAction(
  '[Auth Login] User Login Success',
  props<{ currentUser: firebase.default.User | null }>()
);
export const UserLoginFailure = createAction(
  '[Auth Login] User Login Failure',
  props<{ error: string | null }>()
);
