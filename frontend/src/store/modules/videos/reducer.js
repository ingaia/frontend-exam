import produce from 'immer';

// pageToken, thumnail, title, id, videoId
const INITIAL_STATE = {
    pageToken: '',
    videos: [],
    loading: false,
};

export default function videos(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@videos/VIDEOS_SUCCESS':
            return produce(state, draft => {
                draft.pageToken = action.payload.pageToken;
                draft.videos = action.payload.videos;
                draft.loading = false;
            });
        default:
            return state;
    }
}
