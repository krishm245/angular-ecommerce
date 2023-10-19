import { userReducers } from '../auth/store/reducers';
import { UserStateInterface } from '../auth/store/userState.interface';

export interface AppStateInterface {
  user: UserStateInterface;
}

export const appReducers = {
  user: userReducers,
};
