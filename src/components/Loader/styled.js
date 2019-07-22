import styled from 'styled-components';
import {colorChange} from "../../assets/animations/keyframes";

export const LoaderStyled = styled.div`
  height: 100vh;
	width: 100vw;
  background: ${props => props.theme.palette.darkLight};
  text-align: center;
`;

export const SvgStyled = styled.svg`
  fill: ${props => props.theme.palette.gray};
  width: 100px;
  padding-top: 40vh;
  
  && :first-child {
    animation: ${colorChange} 1s linear forwards;
  }
  && :nth-child(2) {
    animation: ${colorChange} 1s linear forwards;
    animation-delay: 1s;
  }
  && :last-child {
    animation: ${colorChange} 1s linear forwards;
    animation-delay: 2s;
  }
`;
