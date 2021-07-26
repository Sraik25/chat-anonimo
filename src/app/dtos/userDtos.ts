export interface IUser {
  id: string;
  username: string;
}

export interface UserInitialState {
  users: IUser[];
  user: IUser | null;
  authenticated: boolean;
}
