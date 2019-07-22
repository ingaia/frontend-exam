import React from 'react';
import PropTypes from 'prop-types';
import {BoxStyled} from './styled';

const Box = ({children, className}) => {
  return (
    <BoxStyled className={className}>
      {children}
    </BoxStyled>
  )
};

export default Box;

Box.propTypes = {
  children: PropTypes.any.isRequired
};