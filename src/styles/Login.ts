import styled from 'styled-components';
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
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
  }
`

export const Logo = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  padding-bottom: 25px;
`
