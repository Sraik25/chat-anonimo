import { IUser } from './userDtos';

export interface AuthInitialState {
  user: IUser | null;
  authenticated: boolean;
}
