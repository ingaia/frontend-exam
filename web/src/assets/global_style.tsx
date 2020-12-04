import { createGlobalStyle, css } from "styled-components";
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
const GlobalStyle = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
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
      opacity: 0.5;
    }
    @media ${devices.mobileL} {
      background-position: center;
    }
  }
`;

const GlobalStyleConst = createGlobalStyle`${GlobalStyle}`;

export { GlobalStyleConst, devices };
