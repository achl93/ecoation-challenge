export const CURR_USER = 'CURR_USER';

export function loginUser(user) {
  return {
    type: CURR_USER,
    payload: user
  };
};
