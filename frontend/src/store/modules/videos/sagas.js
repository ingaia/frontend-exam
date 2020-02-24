import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';

import { videosSuccess, videosFailure } from './actions';

export function* getvideos({ payload }) {
    try {
        const { pageToken } = payload;

        const response = yield call(
            api.get,
            `playlistItems?pageToken=${pageToken}`
        );

        let pageTokenData = '';
        if (response.data.nextPageToken) {
            pageTokenData = response.data.nextPageToken;
        } else {
            toast.info('Todos os videos já foram carregados.');
            yield put(videosFailure());
            return;
        }

        yield put(
            videosSuccess({
                pageToken: pageTokenData,
                videos: response.data.items,
            })
        );
    } catch (error) {
        toast.error('Erro ao carregar os videos, tente novamente mais tarde.');
        yield put(videosFailure());
    }
}

export default all([takeLatest('@videos/VIDEOS_REQUEST', getvideos)]);
