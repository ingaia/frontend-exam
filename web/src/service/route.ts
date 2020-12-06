const url_playlist =
  " https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&&part=snippet,contentDetails&&maxResults=30&&key=AIzaSyBtEMAxMgtTbBypkZ2hWBIp0mlyyVbNre0";

const playlistAsync = async () => {
  fetch(url_playlist)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
export default playlistAsync;
