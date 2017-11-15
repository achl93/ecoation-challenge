import { REG_USER, INC_INT } from '../actions/index';

export default function(state = { email: 'admin@sample.com', password: 'admin', integer: 0 }, action) {
  switch (action.type) {
    case REG_USER:
      return [...state, action.payload];
    case INC_INT:
      return [...state, action.payload];
    default:
      return [action.payload];
  }
};
