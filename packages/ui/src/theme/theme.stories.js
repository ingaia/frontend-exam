import React from 'react';
import { Theme, useTheme } from './index';

export default { title: 'Theme' };

const TestComp = () => {
  const theme = useTheme();

  return (
    <div style={{ padding: '20px' }}>
      <p>
        Set the theme context as dark or light
      </p>
      <p>
        font:
        {theme.html.fontFamily}
      </p>
      <p>
        background color:
        {theme.body.bgColor}
      </p>
    </div>
  );
};

export const usingThemes = () => (
  <Theme setGlobalStyles theme="light">
    <TestComp />
  </Theme>
);
