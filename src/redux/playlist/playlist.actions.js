import PlaylistActionTypes from './playlist.types';

export const fetchStart = () => ({
  type: PlaylistActionTypes.FETCH_START,
});

export const fetchSuccess = (playlistItems) => ({
  type: PlaylistActionTypes.FETCH_SUCCESS,
  payload: playlistItems,
});

export const fetchError = (error) => ({
  type: PlaylistActionTypes.FETCH_ERROR,
  payload: error,
});