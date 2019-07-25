import React, { Component, Fragment } from "react";

import Modal from "react-modal";

class Video extends Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
    this.OpenModal = this.OpenModal.bind(this);
    this.CloseModal = this.CloseModal.bind(this);
  }

  OpenModal() {
    this.setState({ modal: true });
  }

  CloseModal() {
    this.setState({ modal: false });
  }

  render() {
    const { video } = this.props;
    const url_video =
      "https://www.youtube.com/embed/" + video.snippet.resourceId.videoId;
    return (
      <Fragment>
        <div className="video__item" onClick={this.OpenModal}>
          <img
            src={video.snippet.thumbnails.maxres.url}
            alt={video.snippet.title}
          />
          <p className="video__item--title">{video.snippet.title}</p>
        </div>

        <Modal
          isOpen={this.state.modal}
          contentLabel={video.snippet.title}
          ariaHideApp={false}
        >
          <div className="embed-responsive">
            <iframe
              className="embed-responsive-item"
              title={video.snippet.title}
              src={url_video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          <button onClick={this.CloseModal} className="close-modal">
            Close
          </button>
        </Modal>
      </Fragment>
    );
  }
}

export default Video;
