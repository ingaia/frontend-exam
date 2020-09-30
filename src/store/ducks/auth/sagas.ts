import { put, delay } from 'redux-saga/effects';
import actions from './actions';

export function* login() {
  yield delay(3000);
  localStorage.setItem('isLogged', 'true');
  yield put(actions.loginSuccess());
}

export function* logout() {
  yield delay(3000);
  localStorage.removeItem('isLogged');
  yield put(actions.logoutSuccess());
}
