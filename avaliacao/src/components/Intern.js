import React, { Component } from 'react';
import VideoOverlay from './VideoOverlay';
import MobileHeader from './MobileHeader';
import DesktopMenu from './DesktopMenu';
import VideoList from './VideoList';
import { withRouter } from 'react-router-dom';

import '../styles/Intern.scss';

class Intern extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: true,
            videos: [],
            pageToken: false
        }
    }

    openVideo = (videoSource) => {
        let videoOverlay = document.getElementById("video-overlay");
        let videoFrame = document.getElementById("ytplayer");

        document.body.classList.add('playing-video');
        videoOverlay.classList.add('show-overlay');
        videoFrame.src = videoSource;
    }

    componentDidMount() {
        document.getElementsByTagName("BODY")[0].classList.remove("login-page");
        document.getElementsByTagName("BODY")[0].classList.add("intern-page");
    }

    doLogout = () => {
        if(this.state.logged) {
            this.setState({ logged: false });
            return this.props.history.push('/');
        }
    }

    render() {
        return (
            <section className="intern-section">
                <div className="login-overlay"></div>
                <MobileHeader funcaoLogout={this.doLogout} />
                <DesktopMenu funcaoLogout={this.doLogout} />
                <VideoList 
                    funcaoOpenVideo={this.openVideo}
                    linkEmbed="https://www.youtube.com//embed/"
                />
                <VideoOverlay />
            </section>
        )
    }
}

export default withRouter(Intern);