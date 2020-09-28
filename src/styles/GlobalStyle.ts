import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --silver: #C4C4C4;
    --black: #000000;
    --coldGray: #1D1A1A;
    --scarlet: #FF3509;
    --white: #FFFFFF;
    --tundora: #4C4C4C;
    --mischka: #CFD2D9;
    --hillary: #A99E7E;
  }

  @-webkit-keyframes loader {
    0% {
      fill: #1D1A1A;
    }
    25% {
      fill: #1D1A1A;
    }
    50% {
      fill: #FF3509;
    }
    100% {
      fill: #FF3509;
    }
  }

  html, body, main {
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    background-color: var(--coldGray);
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #C4C4C4;
    font-size: 14px;
    line-height: 16px;
  }
`

export default GlobalStyles
