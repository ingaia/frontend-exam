import actions from '../ducks/auth/actions';
import reducer from '../ducks/auth';

import { AuthTypes } from '../ducks/auth/types';

const reducer_initial_state = {
  isLogged: false,
  loading: false,
  message: false,
  action: ''
};

describe('actions', () => {
  it('action should call the correct type', () => {
    expect(actions.loginRequest().type).toEqual(AuthTypes.LOGIN_REQUEST);
    expect(actions.loginSuccess().type).toEqual(AuthTypes.LOGIN_SUCCESS);
    expect(actions.logoutRequest().type).toEqual(AuthTypes.LOGOUT_REQUEST);
    expect(actions.logoutSuccess().type).toEqual(AuthTypes.LOGOUT_SUCCESS);

  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(reducer_initial_state);
  })

  it('should return the login request', () => {
    expect(reducer(reducer_initial_state, { type: AuthTypes.LOGIN_REQUEST })).toEqual(
      {
        isLogged: false,
        loading: true,
        message: false,
        action: AuthTypes.LOGIN_REQUEST
      }
    );
  })

  it('should return the login success state', () => {
    expect(reducer(reducer_initial_state, { type: AuthTypes.LOGIN_SUCCESS })).toEqual(
      {
        isLogged: true,
        loading: false,
        message: false,
        action: AuthTypes.LOGIN_SUCCESS
      }
    );
  })

  it('should return the logout request', () => {
    expect(reducer(reducer_initial_state, { type: AuthTypes.LOGOUT_REQUEST })).toEqual(
      {
        isLogged: false,
        loading: true,
        message: false,
        action: AuthTypes.LOGOUT_REQUEST
      }
    );
  })

  it('should return the logout success state', () => {
    expect(reducer(reducer_initial_state, { type: AuthTypes.LOGOUT_SUCCESS })).toEqual(
      {
        isLogged: false,
        loading: false,
        message: false,
        action: AuthTypes.LOGOUT_SUCCESS
      }
    );
  })
})
