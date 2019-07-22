import styled from 'styled-components'

export const TextFieldStyled = styled.div`
  	position: relative;
`;

export const Input = styled.input`
  font-size: 14px;
  width: 100%;
  padding: 1.5em 0 0.3em 0.2em;
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${props => props.theme.palette.primary};
  color: ${props => props.theme.palette.white};
  
  :invalid {
  	box-shadow: none;
  }
  
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 25px;
  transition: 0.3s ease all;
  color: ${props => props.theme.palette.primary};
  text-transform: capitalize;
  
  ${Input}:valid ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
  }
  
  ${Input}:focus ~ & {
    top: 6px;
    left: 5px;
    font-size: 11px;
  }
  
`;