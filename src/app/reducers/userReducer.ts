import { UserInitialState } from '../dtos/userDtos';

const initialState: UserInitialState = {
  users: [],
  user: null,
  authenticated: false,
};

export type USERACTIONTYPE =
  | { type: 'GET_USERS' }
  | { type: 'ADD_USER'; payload: any }
  | { type: 'CLOSE_SESSION' };

const userReducer = (
  state = initialState,
  action: USERACTIONTYPE
): UserInitialState => {
  switch (action.type) {
    case 'ADD_USER':
      localStorage.setItem(
        'users',
        JSON.stringify([...state.users, action.payload])
      );
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        authenticated: true,
        users: [...state.users, action.payload],
        user: action.payload,
      };

    case 'CLOSE_SESSION':
      return {
        ...state,
        user: null,
        authenticated: false,
      };

    default:
      return state;
  }
};

export default userReducer;
