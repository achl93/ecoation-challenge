import { CURR_USER } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case CURR_USER:
      return action.payload;
    default:
      return state;
  }
};
