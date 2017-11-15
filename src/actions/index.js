export const REG_USER = 'REG_USER';
export const INC_INT = 'INC_INT';

export function registerUser(user) {
  return {
    type: REG_USER,
    payload: user
  };
};

export function incrementInteger(user) {
  return {
    type: INC_INT,
    payload: user
  };
};
