import { Reducer } from 'redux';
import { PlaylistState, PlaylistTypes } from './types';

const INITIAL_STATE: PlaylistState = {
  data: [],
  nextPageToken: '',
  loading: false,
  message: false
};

const reducer: Reducer<PlaylistState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistTypes.PLAYLIST_REQUEST:
      return {
        ...state,
        loading: true,
        message: false
      };
    case PlaylistTypes.PLAYLIST_SUCCESS: {
      const { data } = action.payload;
      return {
        data:[...state.data, ...data.items],
        nextPageToken: data.nextPageToken,
        loading: false,
        message: false
      };
    }
    case PlaylistTypes.PLAYLIST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.payload.error
      };
    default:
      return state;
  }
};

export default reducer;
