import { Reducer } from 'redux';
import { AuthState, AuthTypes } from './types';

const INITIAL_STATE: AuthState = {
  isLogged: false,
  loading: false,
  message: false,
  action: ''
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
    case AuthTypes.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        message: false,
        action: action.type
      };
    case AuthTypes.LOGIN_SUCCESS:
    case AuthTypes.LOGOUT_SUCCESS:
      return {
        isLogged: action.type === AuthTypes.LOGIN_SUCCESS,
        loading: false,
        message: false,
        action: action.type
      };
    default:
      return state;
  }
};

export default reducer;
