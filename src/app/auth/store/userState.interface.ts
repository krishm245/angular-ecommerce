import { CurrentUserInterface } from '../types/currentUser.interface';

export interface UserStateInterface {
  isSubmitted: boolean;
  currentUser: firebase.default.User | null;
  error: string | null;
  isFetchingUser?: boolean;
}
