import React from 'react';
import PropTypes from 'prop-types';

import ThumbnailContainer from './thumbnail.styles';

const Thumbnail = ({ clickAction, children }) => (
  <ThumbnailContainer onClick={clickAction}>
    {children}
  </ThumbnailContainer>
);

Thumbnail.defaultProps = {
  clickAction: null,
  children: [],
};

Thumbnail.propTypes = {
  clickAction: PropTypes.func,
  children: PropTypes.arrayOf(PropTypes.object),
};

export default Thumbnail;
