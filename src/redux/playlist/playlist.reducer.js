import PlaylistActionTypes from './playlist.types';

const INITIAL_STATE = {
  playlistItems: null,
  errorMessage: '',
};

const playlistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PlaylistActionTypes.FETCH_START:
      return {
        ...state,
      };
    case PlaylistActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        playlistItems: action.payload,
      };

    case PlaylistActionTypes.FETCH_ERROR:
      return {
        ...state,
        playlistItems: null,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default playlistReducer;
