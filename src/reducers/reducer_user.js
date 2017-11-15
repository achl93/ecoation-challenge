import { CURR_USER } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case CURR_USER:
      return action.payload;
    default:
      return [action.payload];
  }
};
