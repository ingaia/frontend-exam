import styled from 'styled-components';

export const CardVideoStyled = styled.div`
  display: flex;
	justify-content: center;
  height: 300px;
  
  border: 1px solid ${props => props.theme.palette.primary};
  margin: 15px;
  
  width: 40%;
  min-width: 300px;
  position: relative;
  
  & image {
    width: auto;
    height: auto;
  }
`;

export const TitleVideoStyled = styled.div`
  position: absolute;
  bottom: 0;
  background-color: ${props => props.theme.palette.dark};
  width: 100%;
  height: 50px;
  opacity: 0.8;
`;