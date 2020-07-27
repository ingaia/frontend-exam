import { css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const base = (theme) => css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

  ${emotionNormalize};

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  html {
    font-family: ${theme.html.fontFamily};
    font-size: ${theme.html.fontSize};
    line-height: ${theme.html.lineHeight};
  }

  body {
    background-color: ${theme.body.bgColor};
    color: ${theme.body.fontColor};
  }
`;

export default base;
