import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { MdClose } from 'react-icons/md';

import history from '../../services/history';
import api from '../../services/api';
import token_api from '../../services/token';
import playlist from '../../services/playlist';

// import Reactotron from 'reactotron-react-js';

import logo from '../../assets/logo_dark.png';
import Background from '../../components/Background';
import { Container, Content, Sidenav, ContentBox, VideosBox, LoadMoreButton, VideoFrame, CloseButton } from './styles';

interface Videos {
  nextPageToken: string,
  id: string,
  contentDetails: {
    videoId: string,
  }
  snippet: {
    title: string,
    thumbnails: {
      standard: {
        url: string;
      }
    }
  }
}

const Dashboard: React.FC = () => {
  // States
  const [activeTrailerButton, setActiveTrailerButton] = useState<boolean>(true);
  const [moreButton, setMoreButton] = useState<boolean>(true);
  const [videoFrameVisible, setVideoFrameVisible] = useState<boolean>(false);
  const [videos, setVideos] = useState<Videos[]>([]);
  const [nextToken, setNextToken] = useState<string>("");
  const [videoFrame, setVideoFrame] = useState<string>("");

  // Load Videos from playlist on enter on dashboard
  useEffect(() => {
    async function loadVideos() {
      const response = await api.get(`/playlistItems?key=${token_api}&playlistId=${playlist}&part=snippet,contentDetails`);
      const { nextPageToken, items } = response.data;
      setNextToken(nextPageToken);
      setVideos(items);
    }
    loadVideos();
  }, []);

  // Load more videos
  async function handleMoreVideos() {
    const response = await api.get(`/playlistItems?key=${token_api}&playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&part=snippet,contentDetails&pageToken=${nextToken}`);
    const { items, nextPageToken } = response.data;
    const newVideos = [...videos];
    items.map((item: Videos) => newVideos.push(item));
    setVideos(newVideos);
    if (nextPageToken) {
      setNextToken(nextPageToken);
    } else {
      setMoreButton(false);
    }
  }

  // Open Video
  async function handleOpenVideo(videoId: string) {
    setVideoFrame(videoId);
    setVideoFrameVisible(true);
  }

  // Close Video
  function handleCloseVideoFrame() {
    setVideoFrameVisible(false);
  }


  // Activate Trailers Button
  function handleTrailers() {
    setActiveTrailerButton(true);
  }

  // Navigation with history to SignIn
  function handleLogout() {
    setActiveTrailerButton(false);
    setTimeout(() => {
      history.push('/signin');
    }, 1000);
  };
  return (
    <Container>
      <Background />
      <Content>
        <Sidenav>
          <img src={logo} alt="logo_witcher" />
          <button
            type="button"
            onClick={handleTrailers}
            style={{
              border: activeTrailerButton ? '1px solid #A99E7E' : 'none',
              color: activeTrailerButton ? '#A99E7E' : '#fff'
            }}
          >
            TRAILERS
          </button>
          <button onFocus={() => setActiveTrailerButton(false)} type="button" onClick={handleLogout}>LOGOUT</button>
        </Sidenav>
        <ContentBox>
          <VideosBox>
            {videos.map(video => (
              <button
                id="button-img"
                key={video.id}
                onClick={() => handleOpenVideo(video.contentDetails.videoId)}
              >
                <img src={video.snippet.thumbnails.standard.url} alt="image_from_video" />
                <div id='title-box'>
                  <p>{video.snippet.title}</p>
                </div>
              </button>
            ))}

            <LoadMoreButton
              onClick={() => handleMoreVideos()}
              style={{ display: moreButton ? 'relative' : 'none' }}
            >
              LOAD MORE
            </LoadMoreButton>
          </VideosBox>
        </ContentBox>
        <VideoFrame style={{ display: videoFrameVisible ? 'flex' : 'none' }}>
          <CloseButton onClick={() => handleCloseVideoFrame()}>
            <MdClose size={30} />
            <p>CLOSE</p>
          </CloseButton>
          <ReactPlayer
            url={`http://www.youtube.com/embed/${videoFrame}`}
            playing={videoFrameVisible}
            controls
            width="100%"
            height="100%"
            id="frame-box"
          />
        </VideoFrame>

      </Content>
    </Container>
  );
};

export default Dashboard;
