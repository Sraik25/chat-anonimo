import { Dispatch } from 'redux';
import { v4 } from 'uuid';
import { IUser } from '../dtos/userDtos';
import { AUTHACTIONTYPE } from '../reducers/authReducer';

export function signInActions(user: IUser) {
  return (dispatch: Dispatch<any>) => {
    user.id = v4();

    dispatch(singIn(user));
  };
}

const singIn = (user: any): AUTHACTIONTYPE => ({
  type: 'SIGN_IN',
  payload: user,
});

export function signOutActions() {
  return (dispatch: Dispatch<any>) => {
    dispatch(signOut());
  };
}

const signOut = (): AUTHACTIONTYPE => ({
  type: 'SING_OUT',
});

export function getUserActions() {
  return (dispatch: Dispatch<any>) => {
    const user = localStorage.getItem('user');
    if (user) {
      const result =JSON.parse(user);
      console.log(result);
      dispatch(getUser(result));
    }
    console.log(user);
  };
}

const getUser = (user: any): AUTHACTIONTYPE => ({
  type: 'GET_AUTH',
  payload: user,
});
