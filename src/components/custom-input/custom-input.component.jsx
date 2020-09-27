// Tools
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import { Input, InputContainer, Label } from './custom-input.styles';

const CustomInput = ({ id, type, placeholder, change, ...otherProps }) => (

  <InputContainer>
    <Input onChange={change} {...otherProps} placeholder={placeholder} id={id} type={type} />
    <Label htmlFor={id}>{placeholder}</Label>
  </InputContainer>
);

CustomInput.defaultProps = {
  type: '',
  placeholder: '',
  id: '',
  change: null,
};

CustomInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  change: PropTypes.func,
};

export default CustomInput;
