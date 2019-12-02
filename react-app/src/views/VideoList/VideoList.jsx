import React, { useState, useEffect, useCallback } from "react";

import Logo from "components/Logo";
import Modal from "components/Modal";
import Spinner from "components/Spinner";

import { useUser } from "UserContext";
import { useHistory } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import styles from "./VideoList.module.scss";
import axios from "axios";

// Need to create an Axios instance to avoid a bug where
// the Authorization header is changed to authorization
const axiosInstance = axios.create({
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  responseType: "json"
});
axiosInstance.defaults.headers.common["Authorization"] =
  "Bearer " + process.env.REACT_APP_YOUTUBE_KEY;

const VideoList = () => {
  const [, setUserData] = useUser();

  const history = useHistory();

  const [videosList, setVideosList] = useState(undefined);
  const [videosLoadingState, setVideosLoadingState] = useState("loading");
  const [nextPageToken, setNextPageToken] = useState();
  const [nextPageLoading, setNextPageLoading] = useState();

  const [videoOpen, setVideoOpen] = useState();

  useEffect(() => {
    const getYoutubePlaylist = async () => {
      setVideosLoadingState("loading");
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet,contentDetails",
              maxResults: 5,
              playlistId: "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF",
              key: process.env.REACT_APP_YOUTUBE_KEY
            }
          }
        );
        setNextPageToken(response.data.nextPageToken);
        setVideosList(
          response.data.items.map(item => ({
            id: item.contentDetails.videoId,
            title: item.snippet.title,
            thumbnails: item.snippet.thumbnails
          }))
        );
        setVideosLoadingState("ready");
      } catch (e) {
        setVideosLoadingState("error");
      }
    };
    getYoutubePlaylist();
  }, []);

  const fetchNextPage = useCallback(() => {
    const getNextPage = async () => {
      setNextPageLoading("loading");
      try {
        const response = await axios.get(
          "https://www.googleapis.com/youtube/v3/playlistItems",
          {
            params: {
              part: "snippet,contentDetails",
              maxResults: 5,
              playlistId: "PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF",
              key: process.env.REACT_APP_YOUTUBE_KEY,
              pageToken: nextPageToken
            }
          }
        );
        setNextPageToken(response.data.nextPageToken);
        setVideosList([
          ...videosList,
          ...response.data.items.map(item => ({
            id: item.contentDetails.videoId,
            title: item.snippet.title,
            thumbnails: item.snippet.thumbnails
          }))
        ]);
        setNextPageLoading("ready");
      } catch (e) {
        setNextPageLoading("error");
      }
    };
    getNextPage();
  }, [nextPageToken, videosList]);

  return (
    <div className={styles.container}>
      <Logo className={styles.logo} />
      <ul className={styles.buttons}>
        <li>TRAILERS</li>
        <li className={styles.logout}>
          <button
            onClick={() => {
              setUserData({ isAuthenticated: false });
              history.push("/Login");
            }}
          >
            LOGOUT
          </button>
        </li>
      </ul>
      <div className={styles.list}>
        {videosLoadingState === "loading" && <Spinner />}
        {videosLoadingState === "error" && "Ops. Algo de errado aconteceu"}
        {videosLoadingState === "ready" && (
          <Scrollbars
            renderThumbVertical={({
              style: { width, ...otherStyles },
              ...otherProps
            }) => (
              <div
                {...otherProps}
                style={otherStyles}
                className={styles.scrollbarThumb}
              />
            )}
            renderTrackVertical={({
              style: { width, ...otherStyles },
              ...otherProps
            }) => (
              <div
                {...otherProps}
                style={otherStyles}
                className={styles.scrollbarTrack}
              />
            )}
          >
            <div className={styles.container}>
              {videosList.map(video => (
                <React.Fragment key={video.id}>
                  <div
                    role="button"
                    tabIndex={0}
                    className={styles.videoItem}
                    onClick={() => setVideoOpen(video.id)}
                    onKeyDown={evt => {
                      switch (evt.key) {
                        case " ":
                        case "Enter": {
                          setVideoOpen(video.id);
                          break;
                        }
                        default: {
                        }
                      }
                    }}
                  >
                    <img
                      src={video.thumbnails.standard.url}
                      alt="Thumbnail do vídeo"
                    />
                    <h2>{video.title}</h2>
                  </div>
                  {video.id === videoOpen && (
                    <Modal onClose={() => setVideoOpen(null)}>
                      <iframe
                        title={video.title}
                        width="1120"
                        height="630"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </Modal>
                  )}
                </React.Fragment>
              ))}
              {!!nextPageToken && (
                <div className={styles.loadMoreContainer}>
                  {nextPageLoading === "loading" ? (
                    <Spinner />
                  ) : (
                    <button className={styles.showMore} onClick={fetchNextPage}>
                      LOAD MORE
                    </button>
                  )}
                </div>
              )}
            </div>
          </Scrollbars>
        )}
      </div>
    </div>
  );
};

export default VideoList;
