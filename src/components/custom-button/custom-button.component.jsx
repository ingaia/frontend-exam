// Tools
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import Button from './custom-button.styles';

const CustomButton = ({ children, type, clickAction, ...props }) => (
  <Button onClick={clickAction} {...props} type={type}>{children}</Button>
);

CustomButton.defaultProps = {
  children: '',
  type: '',
  clickAction: null,
};

CustomButton.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  clickAction: PropTypes.func,
};

export default CustomButton;
