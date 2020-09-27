import { all, call } from 'redux-saga/effects';
import { playlistSagas } from './playlist/playlist.sagas';

export default function* rootSaga() {
  yield all([
    call(playlistSagas),
  ]);
}
