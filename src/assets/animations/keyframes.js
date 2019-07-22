import {keyframes} from "styled-components";
import THEME from '../themes';

export const colorChange = keyframes`
  from {
    fill: ${THEME.palette.gray}
  }
  to {
    fill: ${THEME.palette.blood}
  }
`;