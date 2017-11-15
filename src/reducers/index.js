import { combineReducers } from 'redux';
import userReducer from './reducer_user';

const rootReducer = combineReducers ({
  users: userReducer
});

export default rootReducer;
