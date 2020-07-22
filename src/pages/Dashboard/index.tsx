import React, { useState, useEffect } from 'react';

import history from '../../services/history';
import api from '../../services/api';
import token_api from '../../services/token';
import playlist from '../../services/playlist';

import Reactotron from 'reactotron-react-js';

import logo from '../../assets/logo_dark.png';
import Background from '../../components/Background';
import { Container, Content, Sidenav, ContentBox, VideosBox, LoadMoreButton } from './styles';

interface Videos {
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
  const [activeTrailerButton, setActiveTrailerButton] = useState<Boolean>(true);
  const [videos, setVideos] = useState<Videos[]>([]);

  // Load Videos from playlist on enter on dashboard
  useEffect(() => {
    async function loadVideos() {
      const response = await api.get(`/playlistItems?key=${token_api}&playlistId=${playlist}&part=snippet,contentDetails`);
      const { items } = response.data;
      setVideos(items);
    }
    loadVideos();
  }, []);


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
  Reactotron.log!(videos);
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
              <button id="button-img">
                <img src={video.snippet.thumbnails.standard.url} alt="image_from_video" />
                <div id='title-box'>
                  <p>{video.snippet.title}</p>
                </div>
              </button>
            ))}

            <LoadMoreButton>LOAD MORE</LoadMoreButton>
          </VideosBox>
        </ContentBox>
      </Content>
    </Container>
  );
};

export default Dashboard;
