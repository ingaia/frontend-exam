import produce from 'immer';

// pageToken, thumnail, title, id, videoId
const INITIAL_STATE = {
    pageToken: '',
    videos: [],
    loading: false,
};

export default function videos(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@videos/VIDEOS_REQUEST': {
                draft.loading = true;
                break;
            }
            case '@videos/VIDEOS_SUCCESS': {
                draft.pageToken = action.payload.pageToken;
                draft.videos = action.payload.videos;
                draft.loading = false;
                break;
            }
            case '@videos/VIDEOS_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
