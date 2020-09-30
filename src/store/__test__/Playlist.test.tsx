import actions from '../ducks/playlist/actions';
import reducer from '../ducks/playlist';

import { PlaylistTypes } from '../ducks/playlist/types';

const reducer_initial_state = {
  data: [],
  nextPageToken: '',
  loading: false,
  message: false
};

const mock_data1 = {
  nextPageToken: 'CAUQAA',
  items: [
    {
      id: "UEw2dDkzblVGUVExWmlYTWZoUHloamIwUFgzTGdFVk1jRi41NkI0NEY2RDEwNTU3Q0M2",
      snippet: {
        title: "The Witcher 3: Wild Hunt - Title Reveal",
        thumbnails: {
          medium: {url: "https://i.ytimg.com/vi/cCXgQ7-Y9ps/mqdefault.jpg", width: 320, height: 180}
        },
        resourceId: {
          videoId: "cCXgQ7-Y9ps"
        }
      }
    }
  ]
};

const mock_data2 = {
  nextPageToken: 'XGTRYKKL',
  items: [
    {
      id: "UEw2dDkzblVGUVExWmlYTWZoUHloamIwUFgzTGdFVk1jRi41NkI0NEY2RDEwNTU3Q0M2",
      snippet: {
        title: "The Witcher 3: Wild Hunt - Title Reveal",
        thumbnails: {
          medium: {url: "https://i.ytimg.com/vi/cCXgQ7-Y9ps/mqdefault.jpg", width: 320, height: 180}
        },
        resourceId: {
          videoId: "cCXgQ7-Y9ps"
        }
      }
    },
    {
      id: "UEw2dDkzblVGUVExWmlYTWZoUHloamIwUFgzTGdFVk1jRi4yODlGNEE0NkRGMEEzMEQy",
      snippet: {
        title: "The Witcher 3: Wild Hunt - Debut Gameplay-Trailer",
        thumbnails: {
          medium: {url: "https://i.ytimg.com/vi/2T_DG1xnVPg/mqdefault.jpg", width: 320, height: 180}
        },
        resourceId: {
          videoId: "2T_DG1xnVPg"
        }
      }
    }
  ]
};

describe('actions', () => {
  it('action should call the correct type', () => {
    expect(actions.playlistRequest().type).toEqual(PlaylistTypes.PLAYLIST_REQUEST);
    expect(actions.playlistSuccess().type).toEqual(PlaylistTypes.PLAYLIST_SUCCESS);
    expect(actions.playlistFailure().type).toEqual(PlaylistTypes.PLAYLIST_FAILURE);

  })

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(reducer_initial_state);
  })

  it('should return the request state', () => {
    expect(reducer(reducer_initial_state, { type: PlaylistTypes.PLAYLIST_REQUEST })).toEqual(
      {
        data: [],
        nextPageToken: '',
        loading: true,
        message: false
      }
    );
  })

  it('should return the success state', () => {
    expect(reducer(reducer_initial_state, {
      type: PlaylistTypes.PLAYLIST_SUCCESS,
      payload: {
        data: mock_data1
      }
    })).toEqual(
      {
        data: mock_data1.items,
        nextPageToken: mock_data1.nextPageToken,
        loading: false,
        message: false
      }
    );

    expect(reducer({
      data: mock_data1.items,
      nextPageToken: mock_data1.nextPageToken,
      loading: false,
      message: false
    }, {
      type: PlaylistTypes.PLAYLIST_SUCCESS,
      payload: {
        data: mock_data2
      }
    })).toEqual(
      {
        data: mock_data2.items,
        nextPageToken: mock_data2.nextPageToken,
        loading: false,
        message: false
      }
    );
  })

  it('should return the failure state', () => {
    expect(reducer({
      data: [],
      nextPageToken: '',
      loading: false,
      message: false
    }, {
        type: PlaylistTypes.PLAYLIST_FAILURE,
        payload: { error: 'Retrieve list of videos failed'}
      })).toEqual(
      {
        data: [],
        nextPageToken: '',
        loading: false,
        message: 'Retrieve list of videos failed'
      }
    );
  })
})
