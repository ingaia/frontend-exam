import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: transparent;
  color: ${props => props.theme.palette.primary};
  border: 1px solid;
  padding: 10px 30px;
  cursor: pointer;
  
  :hover {
    background: ${props => props.theme.palette.white};
    opacity: 0.9;
    color: ${props => props.theme.palette.blood};
    font-weight: bolder;
    border-color: ${props => props.theme.palette.white};
  }
`;
