/**
 * Action types
 */
export enum AuthTypes {
  LOGIN_REQUEST = '@auth/login/request',
  LOGIN_SUCCESS = '@auth/login/success',

  LOGOUT_REQUEST = '@auth/logout/request',
  LOGOUT_SUCCESS = '@auth/logout/success',
}

/**
 * State type
 */
export interface AuthState {
  readonly isLogged: boolean;
  readonly loading: boolean;
  readonly message: boolean | string;
  readonly action: string
}
