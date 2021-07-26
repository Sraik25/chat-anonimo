import { Dispatch } from 'react';
import { USERACTIONTYPE } from '../reducers/userReducer';
import { v4 } from 'uuid';
import { IUser } from '../dtos/userDtos';

export function getUsersActions() {
  return (dispatch: Dispatch<any>) => {
    const users = localStorage.getItem('users')
      ? JSON.stringify(localStorage.getItem('users'))
      : null;

    console.log(users)

    // dispatch(getUsers());
  };
}

const getUsers = (user: any): USERACTIONTYPE => ({
  type: 'ADD_USER',
  payload: user,
});

