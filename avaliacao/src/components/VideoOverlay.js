import React, { Component } from 'react'

import '../styles/VideoOverlay.scss';

export default class VideoOverlay extends Component {

    closeVideo = () => {
        let videoSource = "";
        let videoOverlay = document.getElementById("video-overlay");
        let videoFrame = document.getElementById("ytplayer");

        document.body.classList.remove('playing-video');
        videoOverlay.classList.remove('show-overlay');
        videoFrame.src = videoSource;
    }
    
    render() {
        return (
            <div id="video-overlay">
                <button onClick={() => this.closeVideo()}>
                    X
                </button>
                <iframe id="ytplayer" 
                type="text/html" 
                width="80%" 
                height="80%"
                src=""
                frameBorder="0"/>
            </div>
        )
    }
}
