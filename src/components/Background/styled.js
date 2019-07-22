import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
	width: 100%;
	background-image: url(${props => props.theme.bg.coverImage});
	background-size: cover;
`;
