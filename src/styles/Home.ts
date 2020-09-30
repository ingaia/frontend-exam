import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const ContainerWrapper = styled(Container)`
  background-image: url('/assets/background-mobile.webp');
  background-position: center center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  height: 100vh;

  @media (min-width: 576px) {
    background-image: url('/assets/background.webp');
  }

  @media (min-width: 960px) {
    background-position: center -98px;
   background-size: 100% auto;
  }

  div.bg-opacity {
    background-color: rgb(0 0 0 / 0.5);
    height: 100vh;
  }
`

export const Logo = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  padding-top: 30px;

  @media (min-width: 576px) {
    padding-top: 0;
  }
`

export const Title = styled.h1`
  border: 1px solid var(--hillary);
  color: var(--hillary);
  text-transform: uppercase;
  font-size: 14px;
  line-height: 16px;
  width: 100%;
  padding: 11px 0;
  text-align: center;
  font-weight: normal;
`

export const VideosContainer = styled(Grid)`
  background: linear-gradient(90deg, var(--black) 0%, rgba(0, 0, 0, 0) 98.3%);
  padding-top: 25px;

  @media (min-width: 576px) {
    height: 100vh;
    padding-top: 0;
  }
`

export const VideosContainer2 = styled(Grid)`
  max-height: 60vh;
  height: 60vh;
  overflow: auto;

  @media (min-width: 576px) {
    max-height: 100vh;
    height: 100vh;
  }


  &::-webkit-scrollbar
  {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-button
  {
    height: 36px;
    width: 36px;
  }

  &::-webkit-scrollbar-track
  {
    background-image: -webkit-linear-gradient(
      180deg,
      transparent,
      transparent,
      var(--hillary) 50%,
      transparent,
      transparent
    );
    border-radius: 10px;
  }

  &::-webkit-scrollbar-corner
  {
    background: transparent;
  }

  /* Track */
  &::-webkit-scrollbar-track {
      -webkit-border-radius: 10px;
      border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb
  {
    background-color: var(--hillary);
    border-radius: 10px;
    -webkit-border-radius: 10px;
  }
`
