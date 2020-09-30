/**
 * Action types
 */
export enum PlaylistTypes {
  PLAYLIST_REQUEST = '@playlist/request',
  PLAYLIST_SUCCESS = '@playlist/success',
  PLAYLIST_FAILURE = '@playlist/failure'
}

/**
 * Data types
 */
export interface DataProps {
  id: string,
  snippet: {
    title: string,
    thumbnails: {
      medium: {
        url: string
      }
    }
    resourceId: {
      videoId: string
    }
  }
}

/**
 * State type
 */
export interface PlaylistState {
  readonly data: Array<DataProps>;
  readonly loading: boolean;
  readonly nextPageToken: string;
  readonly message: boolean | string;
}
