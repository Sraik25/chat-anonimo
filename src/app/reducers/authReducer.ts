import { AuthInitialState } from "../dtos/authDtos";

const initialState: AuthInitialState = {
  user: null,
  authenticated: false,
};

export type AUTHACTIONTYPE =
  | { type: 'SIGN_IN'; payload: any }
  | { type: 'SING_OUT' }
  | { type: 'GET_AUTH'; payload: any };

const authReducer = (state = initialState, action: AUTHACTIONTYPE) => {
  switch (action.type) {
    case 'GET_AUTH':
      return {
        ...state,
        user: action.payload,
      };

    case 'SIGN_IN':
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        authenticated: true,
        user: action.payload,
      };

    case 'SING_OUT':
      localStorage.removeItem('user');
      return {
        ...state,
        authenticated: false,
        user: null,
      };

    default:
      return state;
  }
};

export default authReducer;
