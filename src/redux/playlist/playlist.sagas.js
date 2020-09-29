import { takeLatest, call, put, all } from 'redux-saga/effects';

import PlaylistActionTypes from './playlist.types';

import { fetchSuccess, fetchError } from './playlist.actions';

export function* fetchPlaylist({ payload: { playlistId, key } }) {
  try {
    const response = yield call(fetch, `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=30&playlistId=${playlistId}&key=${key}`);
    const responseJson = yield response.json();
    yield put(fetchSuccess(responseJson.items));
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
