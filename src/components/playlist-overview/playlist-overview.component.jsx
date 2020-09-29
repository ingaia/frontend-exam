import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

// Actions
import { fetchStart } from '../../redux/playlist/playlist.actions';
import { toggleModal } from '../../redux/modal/modal.actions';

// Selectors
import { selectFormattedPlaylistItems } from '../../redux/playlist/playlist.selectors';
import { selectModalVisibility } from '../../redux/modal/modal.selectors';

// Components
import PlaylistItem from '../playlist-item/playlist-item.component';
import Modal from '../modal/modal.component';
import Thumbnail from '../thumbnail/thumbnail.component';
import CustomButton from '../custom-button/custom-button.component';
import Spinner from '../spinner/spinner.component';

// Style Components
import { OverviewContainer, LoadMoreContainer } from './playlist-overview.styles';

const PlaylistOverview = ({ fetchStart, toggleModal, playlistItems, modalVisible }) => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [maxVideos, setMaxVideos] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const key = 'AIzaSyDWOc7XO_qqHI69BczyParTsuhn6T0yqfs';
    const playlistId = 'PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF';
    fetchStart(playlistId, key);
  }, []);

  const handleClick = (videoId) => {
    setSelectedVideo(videoId);
    toggleModal();
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMaxVideos(maxVideos + 5);
      setIsLoading(false);
    }, 700);
  };

  return (
    <OverviewContainer>
      {
        playlistItems.slice(0, maxVideos).map(({ title, videoId, thumb }) => (
          <Thumbnail key={videoId} clickAction={() => handleClick(videoId)}>
            <img src={thumb} alt="Video Thumbnail" />
            <span>{title}</span>
          </Thumbnail>
        ))
      }
      {
        maxVideos <= playlistItems.length ? (
          <LoadMoreContainer>
            {
              !isLoading ? (
                <CustomButton clickAction={handleLoadMore}>
                  LOAD MORE
                </CustomButton>
              )
                : (<Spinner />)
            }
          </LoadMoreContainer>
        ) : ''
      }
      {
        modalVisible ? (
          <Modal>
            <PlaylistItem videoId={selectedVideo} />
            <button type="button" onClick={toggleModal}>CLOSE</button>
          </Modal>
        ) : ''
      }
    </OverviewContainer>
  );
};

PlaylistOverview.defaultProps = {
  fetchStart: null,
  toggleModal: null,
  playlistItems: [],
  modalVisible: false,
};

PlaylistOverview.propTypes = {
  fetchStart: PropTypes.func,
  toggleModal: PropTypes.func,
  playlistItems: PropTypes.arrayOf(PropTypes.object),
  modalVisible: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  playlistItems: selectFormattedPlaylistItems,
  modalVisible: selectModalVisibility,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStart: (playlistId, key) => dispatch(fetchStart(playlistId, key)),
  toggleModal: () => dispatch(toggleModal()),

});

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistOverview);
