import styled from 'styled-components';

export const ShadowViewStyled = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.palette.dark};
  position: absolute;
  opacity: 0.6;
`