import { put, call } from 'redux-saga/effects';
import actions from './actions';
import axios from 'axios';

const requestApi = (nextPageToken?: string) => {
  const pageToken = nextPageToken ? `&pageToken=${nextPageToken}`: '';
  return axios.request({
    method: 'get',
    url: `${process.env.REACT_APP_YOUTUBE_PLAYLIST_API}?part=snippet&maxResults=5${pageToken}&playlistId=${process.env.REACT_APP__YOUTUBE_PLAYLIST_ID}&key=${process.env.REACT_APP_API_KEY}`
  })
};

export function* request(action: any) {
  try {
    const response = yield call(requestApi, action.payload.nextPageToken);
    yield put(actions.playlistSuccess(response.data));
  } catch (err) {
    yield put(actions.playlistFailure('Retrieve list of videos failed'));
  }
}


