import axios from 'axios';

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyDawPp5-wJlPhlzHV3syAT8cBbJcf9tqKY',
    },
});

export default api;
