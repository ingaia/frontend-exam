import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { videosSuccess } from './actions';

export function* getvideos({ payload }) {
    const { pageToken } = payload;
    console.tron.log('aqui');
    const response = yield call(
        api.get,
        `playlistItems?pageToken=${pageToken}`
    );

    let pageTokenData = '';
    if (response.data.nextPageToken) {
        pageTokenData = response.data.nextPageToken;
    }

    yield put(
        videosSuccess({ pageToken: pageTokenData, videos: response.data.items })
    );
}

export default all([takeLatest('@videos/VIDEOS_REQUEST', getvideos)]);
