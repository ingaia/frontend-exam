import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';

const ReactPlayerContainer = styled(ReactPlayer)`
  width: 930px;
  height: 560px;
  border: 1px solid #a99e7e;

  @media(max-width: 935px) {
    width: 560px !important;
  }

  @media(max-width: 735px) {
    width: 470px !important;
  }

  @media(max-width: 555px) {
    width: 410px !important;
  }

  @media(max-width: 500px) {
    width: 340px !important;
  }

  @media(max-width: 370px) {
    height: 256px !important;
    width: 272px !important;
  }

  @media(max-width: 320px) {
    width: 220px !important;
  }
`;

export default ReactPlayerContainer;
