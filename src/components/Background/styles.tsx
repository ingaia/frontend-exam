import styled from 'styled-components';
import background from '../../assets/background.png';

export const Opacity = styled.div`
  position: absolute; 
  height: 100vh;
  width: 100vw;
  top: 0;
  background-color: #000; 
  z-index: -1;   
`;

export const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  opacity: 0.2;
`;
