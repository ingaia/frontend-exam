const url_playlist =
  " https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&&part=snippet&&maxResults=9&&key=AIzaSyBtEMAxMgtTbBypkZ2hWBIp0mlyyVbNre0";

const playlistAsync = async (pageToken: string) => {
  return fetch(`${url_playlist}&&pageToken=${pageToken}`)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};
export default playlistAsync;
