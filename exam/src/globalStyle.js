import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
      background-color: #A99E7E;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #d2be85;
      border-radius: 6px;
      cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #756b4d;
  }

  @keyframes animationLogo {
    0%   { 
      margin-top: -150px;
    }
    100% { 
      margin-top: 0;
    }
  }

  html, body, #root {
    height: 100%;
  }
  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    background: #f2f7fc;
  }

  .loader {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #1d1a1a;
    display: flex;
    align-items: center;
    justify-content: center;
  } 

  .hidden{
    visibility: hidden;
  }

`;

export default GlobalStyles;
