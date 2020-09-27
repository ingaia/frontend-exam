import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// Actions
import { fetchStart } from '../../redux/playlist/playlist.actions';

// Selectors
import { selectFormattedPlaylistItems } from '../../redux/playlist/playlist.selectors';

// Components
import PlaylistItem from '../playlist-item/playlist-item.component';

// Style d Components
import { OverviewContainer } from './playlist-overview.styles';

const PlaylistOverview = ({ fetchStart, playlistItems }) => {
  useEffect(() => {
    const key = 'AIzaSyDWOc7XO_qqHI69BczyParTsuhn6T0yqfs';
    const playlistId = 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF';
    fetchStart(playlistId, key);
  }, []);
  return (
    <OverviewContainer>
      {
        playlistItems.map(({ title, videoId }) => (
          <PlaylistItem key={videoId} videoId={videoId} title={title} />
        ))
      }
    </OverviewContainer>
  );
};

PlaylistOverview.defaultProps = {
  fetchStart: null,
  playlistItems: [],
};

PlaylistOverview.propTypes = {
  fetchStart: PropTypes.func,
  playlistItems: PropTypes.shape([]),
};

const mapStateToProps = createStructuredSelector({
  playlistItems: selectFormattedPlaylistItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStart: (playlistId, key) => dispatch(fetchStart(playlistId, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistOverview);
