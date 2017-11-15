import { combineReducers } from 'redux';
import userReducer from './reducer_user';

const rootReducer = combineReducers ({
  currentUser: userReducer
});

export default rootReducer;
