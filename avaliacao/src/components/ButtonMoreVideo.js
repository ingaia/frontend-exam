import React, { Component } from 'react';

import '../styles/ButtonMoreVideo.scss';

export default class ButtonMoreVideo extends Component {
    render() {
        return (
            <li className="more-video-item">
                <button onClick={() => this.props.funcaoVideo(this.props.maxResult, this.props.token)}>
                    Load More
                </button>
            </li>
        )
    }
}
