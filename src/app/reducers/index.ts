import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducers = combineReducers({
  auth: authReducer,
  users: userReducer,
});

export default rootReducers;
