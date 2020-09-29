import React from 'react';
import PropTypes from 'prop-types';

import { ModalContainer } from './modal.styles';

const Modal = ({ children }) => (
  <ModalContainer className="modal-container">
    {children}
  </ModalContainer>
);

Modal.defaultProps = {
  children: [],
};

Modal.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Modal;
