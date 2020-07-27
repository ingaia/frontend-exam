import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, withTheme as wt, useTheme as ut } from 'emotion-theming';
import { Global } from '@emotion/core';
import setTheme from './set-theme';
import base from './base';

export const useTheme = ut;
export const withTheme = wt;

export const Theme = ({ theme, children, setGlobalStyles }) => {
  const selectedTheme = setTheme(theme === 'dark');
  const baseStyles = base(selectedTheme);

  return (
    <ThemeProvider theme={selectedTheme}>
      {setGlobalStyles && (<Global styles={baseStyles} />)}
      {children}
    </ThemeProvider>
  );
};

Theme.defaultProps = {
  theme: 'dark',
  setGlobalStyles: false,
};

Theme.propTypes = {
  theme: PropTypes.oneOf(['dark', 'light']),
  setGlobalStyles: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default {
  withTheme,
  useTheme,
  Theme,
};
