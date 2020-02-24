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
                const arrVideos = action.payload.videos.map(video => {
                    return {
                        id: video.id,
                        title: video.snippet.title,
                        thumbnails: video.snippet.thumbnails.high.url,
                        videoId: video.snippet.resourceId.videoId,
                    };
                });
                draft.pageToken = action.payload.pageToken;
                draft.videos = [...draft.videos, ...arrVideos];
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
