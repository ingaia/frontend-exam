// Tools
import React from 'react';
import PropTypes from 'prop-types';

// Styled Components
import ReactPlayerContainer from './playlist.item.styles';

const PlaylistItem = ({ videoId }) => (
  <ReactPlayerContainer
    url={`https://www.youtube.com/watch?v=${videoId}`}
  />
);

PlaylistItem.defaultProps = {
  videoId: '',
};
PlaylistItem.propTypes = {
  videoId: PropTypes.string,
};

export default PlaylistItem;
