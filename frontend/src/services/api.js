import axios from 'axios';
// const KEY = 'AIzaSyB2doePdLJ1DjFHj9PqiEpstVCDePd--AI';
// const TES = 'AIzaSyB2doePdLJ1DjFHj9PqiEpstVCDePd--AI'

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,id&maxResults=28&key=AIzaSyB2doePdLJ1DjFHj9PqiEpstVCDePd--AI'
})

export default api;
