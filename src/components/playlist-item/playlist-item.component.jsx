import React from 'react';
import PropTypes from 'prop-types';

const PlaylistItem = ({ title, videoId }) => (
  <iframe width="385" height="230" title={title} src={`//www.youtube-nocookie.com/embed/${videoId}?rel=0`} />
);

PlaylistItem.defaultProps = {
  title: '',
  videoId: '',
};
PlaylistItem.propTypes = {
  title: PropTypes.string,
  videoId: PropTypes.string,
};

export default PlaylistItem;
