import axios from 'axios';

const playlistApi = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems',
  params: {
      playlistId: 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF',
      part: 'snippet,contentDetails',
      maxResults: 30,
      key: 'AIzaSyDWOc7XO_qqHI69BczyParTsuhn6T0yqfs',
  },
});

export default playlistApi;