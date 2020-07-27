import React from 'react';
import { connect } from 'react-redux';
import { Theme } from '@witcher-page/ui';

const ReduxTheme = ({children, theme, ...props}) => (
  <Theme setGlobalStyles theme={theme} {...props}>
    {children}
  </Theme>
);

const mapState = state => ({ theme: state.theme });
const ConnectedTheme = connect(mapState)(ReduxTheme);

export default ConnectedTheme;
