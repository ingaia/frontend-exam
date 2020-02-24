export function videosRequest(pageToken) {
    return {
        type: '@videos/VIDEOS_REQUEST',
        payload: { pageToken },
    };
}

export function videosSuccess({ pageToken, videos }) {
    return {
        type: '@videos/VIDEOS_SUCCESS',
        payload: { pageToken, videos },
    };
}

export function videosFailure() {
    return {
        type: '@videos/VIDEOS_FAILURE',
    };
}
