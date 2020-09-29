import UserActionTypes from './user.types';

export const logIn = (emailAndPassword) => ({
  type: UserActionTypes.LOG_IN,
  payload: emailAndPassword,
});

export const logOut = () => ({
  type: UserActionTypes.LOG_OUT,
});
