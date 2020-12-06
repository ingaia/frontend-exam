import styled, { keyframes, createGlobalStyle, css } from "styled-components";
import BaseAnimation from "./base_animation";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const devicesMax = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
const devicesMin = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};
const theme = {
  primary: "white",
  secondary: "#A99E7E",
};
const GlobalStyle = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0px;
    background-color: #000;
    &:before {
      content: " ";
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-image: url(${process.env.PUBLIC_URL}"/images/background.png");
      background-repeat: no-repeat;
      opacity: 0.3;
    }
    @media ${devicesMax.mobileL} {
      background-position: center;
    }

    * {
      z-index: 1;
    }
  }
`;
const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;
const FadeIn = styled(BaseAnimation)`
  animation-name: ${FadeInAnimation};
`;

const GlobalStyleLoading = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    margin: 0px;
    background-color: #131313;
    * {
      z-index: 1;
    }
  }
`;
const GlobalStyleConst = createGlobalStyle`${GlobalStyle}`;
const GlobalStyleConstLoading = createGlobalStyle`${GlobalStyleLoading}`;

export {
  FadeIn,
  GlobalStyleConst,
  GlobalStyleConstLoading,
  devicesMax,
  devicesMin,
  theme,
};
