import { takeLatest, put, all } from 'redux-saga/effects';
import { signInSuccess } from './actions';
import history from '~/services/history';

export function* signIn({ payload }) {
    const { email, password } = payload;
    let signed = false;
    if (email && password) {
        signed = true;
    }

    yield put(signInSuccess(signed));

    history.push('/dashboard');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
