import styled from 'styled-components';
import Box from "../../components/Box/Box";
import Button from "../../components/Button/Button";

export const MainStyled = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-items: center;
  justify-content: center;
	min-height: 100vh;
  min-width: 100vw;
  height: 100%;
	width: 100%;
	box-sizing: border-box;
	
  & img {
		max-width: 300px;
		display: inline;
	}
`;

export const MainBoxStyled = styled(Box)`
  color: ${props => props.theme.palette.white};
  min-width: 300px;
  width: 30%;
  box-sizing: border-box;
  border-right: 1px solid ${props => props.theme.palette.primary};
  height: 100vh;
  min-height: 100vh;
  padding-top: 4em;
`;

export const MainVideoListStyled = styled(Box)`
  color: ${props => props.theme.palette.white};
  min-width: 300px;
  width: 70%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100vh;
  background-image: linear-gradient(to right, ${props => props.theme.palette.dark} , transparent);
  opacity: 0.6;
`;
export const VideoListStyled = styled(Box)`
  color: ${props => props.theme.palette.white};
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding-top: 5em;
  overflow: auto;
  height: 100%;
`;

export const ButtonTrailerMain = styled(Button)`
  text-transform: uppercase;
  width: 90%;
  max-width: 250px;
  margin-top: 5em;
`;

export const ButtonLogoutMain = styled(Button)`
  text-transform: uppercase;
  border: none;
  font-weight: bold;
  color: ${props => props.theme.palette.white};
  margin-top: 1em;
  :hover {
    color: ${props => props.theme.palette.white};
    background-color: ${props => props.theme.palette.blood};
    opacity: 0.9;
  }
`;