import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styled'

const Button = ({type, className, disabled, name, text, onClick}) => {
  return (
    <ButtonStyled type={type} disabled={!!disabled} name={name} className={className} onClick={onClick}>
      {text}
    </ButtonStyled>
  )
};

export default Button

Button.propTypes = {
  className: PropTypes.any,
  disabled: PropTypes.any,
  name: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
}
