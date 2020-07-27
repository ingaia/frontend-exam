/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import YouTube from 'react-youtube';
import { Button, withTheme } from '@witcher-page/ui';
import Container from '../components/container';
import { Playlist, PlaylistItem } from '../components/playlist';
import SmallLoader from '../components/small-loader';
import modalConfig from '../utils/modal-config';

const apiKey = process.env.REACT_APP_API_KEY;
const playlistId = process.env.REACT_APP_YT_PLAYLIST;
const mainUrl = `${process.env.REACT_APP_YT_API}/playlistItems?part=snippet,contentDetails&maxResults=5&playlistId=${playlistId}&key=${apiKey}`;
const nextUrl = (nextToken) => `${mainUrl}&pageToken=${nextToken}`;
const handleRes = (res) => {
  if (!res.ok) {
    throw Error(res.status);
  }

  return res.json();
};

Modal.setAppElement('#root');

const opts = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 0,
  },
};

class Trailers extends Component {
  state = {
    items: [],
    next: null,
    error: false,
    isLoading: false,
    modalIsOpen: false,
    videoId: '',
  };

  loadMore = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true,
    }, () => {
      const next = nextUrl(this.state.next);
      fetch(next).then(handleRes).then(json => {
        this.setState({
          ...this.state,
          items: [...this.state.items, ...json.items],
          next: json.nextPageToken || null,
          error: false,
          isLoading: false,
        });
      });
    });
  };

  openModal = (videoId) => (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      modalIsOpen: true,
      videoId,
    });
  };

  closeModal = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      modalIsOpen: false,
    });
  };

  componentDidMount() {
    fetch(mainUrl).then(handleRes).then(json => {
      this.setState({
        ...this.state,
        items: json.items,
        next: json.nextPageToken,
        error: false,
      });
    }).catch(() => {
      this.setState({
        ...this.state,
        error: true,
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.decorate !== nextProps.decorate
        || this.state.items.length !== nextState.items.length
        || this.state.next !== nextState.next
        || this.state.error !== nextState.error
        || this.state.modalIsOpen !== nextState.modalIsOpen
        || this.state.isLoading !== nextState.isLoading
    );
  }

  render() {
    const { decorate, theme } = this.props;
    const {
      items,
      next,
      error,
      modalIsOpen,
      videoId,
      isLoading,
    } = this.state;

    const closeModalStyle = css`
      position: fixed;
      top: 1rem;
      right: 1rem;
      z-index: 9999;
    `;

    const youtubeStyle = css`
      iframe {
        width: 100%;
        height: auto;
        @media screen and (min-width: 730px) {
          width: 640px;
          height: 390px;
        }
      }
    `;

    const modalCustomStyles = modalConfig(theme);

    if (items.length === 0 && !error) {
      return (
        <Container>
          <p css={css`text-align: center;`}><SmallLoader /></p>
        </Container>
      );
    }

    if (error) {
      return (<Container>Error retrieving videos</Container>);
    }

    return (
      <Fragment>
        <Container>
          <Playlist>
            {items.map(item => (<PlaylistItem data={item} key={item.etag} clickFn={this.openModal} />))}
            {isLoading ? (
              <li><SmallLoader /></li>
            ) : (
              <li>
                { next ? (
                  <Button onClick={this.loadMore} kind="active" decorate={decorate}>Load More</Button>
                ) : (
                  <Fragment />
                )}
              </li>
            )}
          </Playlist>
        </Container>
        {modalIsOpen && (
          <Button css={closeModalStyle} onClick={this.closeModal}>Close</Button>
        )}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="Now playing"
          style={modalCustomStyles}
          shouldCloseOnOverlayClick={false}
        >
          <div css={youtubeStyle}>
            {videoId ? (
              <YouTube videoId={videoId} opts={opts} />
            ) : (
              <div>Video not selected</div>
            )}
          </div>
        </Modal>
      </Fragment>
    );
  }
}

const mapState = state => ({ decorate: state.decorate });
const ConnectedTrailers = withTheme(connect(mapState)(Trailers));

export default ConnectedTrailers;
