import React, { useState } from 'react';

import history from '../../services/history';

import logo from '../../assets/logo_dark.png';
import image from '../../assets/image.png';
import Background from '../../components/Background';
import { Container, Content, Sidenav, ContentBox, VideosBox, LoadMoreButton } from './styles';

const Dashboard: React.FC = () => {
  // States
  const [activeTrailerButton, setActiveTrailerButton] = useState(true);

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
          <button type="button" onClick={handleLogout}>LOGOUT</button>
        </Sidenav>
        <ContentBox>
          <VideosBox>
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <img src={image} alt="image_from_video" />
            <LoadMoreButton>LOAD MORE</LoadMoreButton>
          </VideosBox>
        </ContentBox>
      </Content>
    </Container>
  );
};

export default Dashboard;
