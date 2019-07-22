import React from 'react';
import {BackgroundStyled} from './styled';
import ShadowView from "../ShadowView/ShadowView";

const Background = ({children}) => {
  return (
    <BackgroundStyled>
      <ShadowView />
      {children}
    </BackgroundStyled>
  )
};

export default Background