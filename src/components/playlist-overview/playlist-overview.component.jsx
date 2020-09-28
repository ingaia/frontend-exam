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
import Modal from '../modal/modal.component';

// Style d Components
import { OverviewContainer, ThumbnailContainer } from './playlist-overview.styles';

const PlaylistOverview = ({ fetchStart, playlistItems }) => {
  useEffect(() => {
    const key = 'AIzaSyDWOc7XO_qqHI69BczyParTsuhn6T0yqfs';
    const playlistId = 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF';
    fetchStart(playlistId, key);
  }, []);

  return (
    <OverviewContainer>
      {
        playlistItems.map(({ title, videoId, thumb }) => (
          <ThumbnailContainer>
            <img src={thumb} alt="Video Thumbnail" />
          </ThumbnailContainer>
        ))
      }
      <Modal></Modal>
    </OverviewContainer>
  );
};

PlaylistOverview.defaultProps = {
  fetchStart: null,
  playlistItems: [],
};

PlaylistOverview.propTypes = {
  fetchStart: PropTypes.func,
  playlistItems: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = createStructuredSelector({
  playlistItems: selectFormattedPlaylistItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStart: (playlistId, key) => dispatch(fetchStart(playlistId, key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistOverview);
