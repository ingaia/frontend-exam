import styled from 'styled-components';
import Container from '@material-ui/core/Container';

export const ContainerWrapper = styled(Container)`
  background-image: url('/assets/background.png');
  background-position: center -98px;
  background-size: 100% auto;
  background-repeat: no-repeat;

  height: 100vh;

  div.bg-opacity {
    background-color: rgb(0, 0, 0, 0.5);
    height: 100vh;
  }
`

export const Logo = styled.img`
  width: 100%;
  height: auto;
`
