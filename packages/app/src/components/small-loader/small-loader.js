import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const setLoaderStyle = color => css`
  animation: ${load} 500ms infinite linear;
  border: 4px solid ${color};
  border-radius: 15px;
  border-right-color: transparent;
  border-top-color: transparent;
  height: 30px;
  width: 30px;
`;

const Loader = styled('span')`
  display: inline-block;
  ${p => setLoaderStyle(p.theme.body.fontColor)};
`;

export default Loader;
