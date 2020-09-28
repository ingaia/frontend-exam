import React from 'react';
import GlobalStyle from '../../styles/GlobalStyle';

export interface Props {
  children: any
};

const Layout = ({ children }: Props) => (
  <>
    <GlobalStyle />
    <main>
      {children}
    </main>
  </>
);

export default Layout;
