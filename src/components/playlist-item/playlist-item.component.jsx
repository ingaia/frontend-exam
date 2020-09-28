// Tools
import React from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player/youtube';

// Components

const PlaylistItem = ({ title, videoId, thumbnail }) => (
  <ReactPlayer
    url={`https://www.youtube.com/watch?v=${videoId}`}
    width="385px"
    light={thumbnail}
    height="230px"
    playsinline
  />
);

PlaylistItem.defaultProps = {
  title: '',
  videoId: '',
  thumbnail: '',
};
PlaylistItem.propTypes = {
  title: PropTypes.string,
  videoId: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default PlaylistItem;
