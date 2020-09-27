import PlaylistActionTypes from './playlist.types';

export const fetchStart = (playlistId, key) => ({
  type: PlaylistActionTypes.FETCH_START,
  payload: { playlistId, key },
});

export const fetchSuccess = (playlistItems) => ({
  type: PlaylistActionTypes.FETCH_SUCCESS,
  payload: playlistItems,
});

export const fetchError = (error) => ({
  type: PlaylistActionTypes.FETCH_ERROR,
  payload: error,
});