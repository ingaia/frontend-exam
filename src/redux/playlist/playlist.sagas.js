import { takeLatest, call, put, all } from 'redux-saga/effects';

// Types
import PlaylistActionTypes from './playlist.types';

// Actions
import { fetchSuccess, fetchError } from './playlist.actions';

import playlistApi from '../../api/youtube.api';

export function* fetchPlaylist() {
  try {
    const response = yield call(playlistApi.get);
    const responseData = yield response.data;
    yield put(fetchSuccess(responseData.items));
  } catch (error) {
    yield put(fetchError(error));
  }
}
export function* fetchStart() {
  yield takeLatest(
    PlaylistActionTypes.FETCH_START,
    fetchPlaylist,
  );
}

export function* playlistSagas() {
  yield all([
    call(fetchStart),
  ]);
}
