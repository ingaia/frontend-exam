import { createSelector } from 'reselect';

const selectPlaylist = (state) => state.playlist;

export const selectPlaylistItems = createSelector([selectPlaylist],
  (playlist) => playlist.playlistItems);

export const selectFormattedPlaylistItems = createSelector([selectPlaylistItems],
  (playlistItems) => {
    const newArr = [];
    if (playlistItems) {
      playlistItems.map((item) => newArr.push(
        { title: item.snippet.title,
          videoId: item.contentDetails.videoId,
          thumb: item.snippet.thumbnails.maxres.url,
        },
      ));
    }
    return newArr;
  });
