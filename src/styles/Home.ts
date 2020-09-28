import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export const ContainerWrapper = styled(Container)`
  background-image: url('/assets/background.png');
  background-position: center -98px;
  background-size: 100% auto;
  background-repeat: no-repeat;

  height: 100vh;

  div.bg-opacity {
    background-color: rgb(0 0 0 / 0.5);
    height: 100vh;
  }
`

export const Logo = styled.img`
  width: 100%;
  height: auto;
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
  height: 100vh;
`

export const VideosContainer2 = styled(Grid)`
  max-height: 100vh;
  height: 100vh;
  overflow: auto;

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
