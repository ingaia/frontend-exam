import { createGlobalStyle } from 'styled-components';

import BackGroundImage from '~/assets/background.png';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
      outline: 0;
    }
    html, body, #root {
      height: 100%;
    }
    body {
      -webkit-font-smoothing: antialiased;
      background: no-repeat center;
      background-size: cover;
      background-image: url(${BackGroundImage});
    }
    #root {
        background-color: rgba(0,0,0,0.6);
    }
    body, input, button {
      font: 14px 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
    }
    button {
      cursor: pointer;
    }
`;
