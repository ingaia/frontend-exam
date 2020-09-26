// Tools
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import Button from './custom-button.styles';

const CustomButton = ({ children, type, ...props }) => (
  <Button {...props} type={type}>{children}</Button>
);

CustomButton.defaultProps = {
  children: '',
  type: '',
};

CustomButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
};

export default CustomButton;
