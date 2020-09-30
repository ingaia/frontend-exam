import { all, takeLatest, takeEvery } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import * as AuthSagas from './auth/sagas';

import { PlaylistTypes } from './playlist/types';
import * as PlaylistSagas from './playlist/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, AuthSagas.login),
    takeLatest(AuthTypes.LOGOUT_REQUEST, AuthSagas.logout),

    takeEvery(PlaylistTypes.PLAYLIST_REQUEST, PlaylistSagas.request),
  ]);
}
