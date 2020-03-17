import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import logo from '../../assets/images/logo_dark.png';
import Button from '../../components/button';
import Logo from '../../components/logo';
import { SpinnerService } from '../../components/spinner';
import VideoList from '../../components/video-list';
import Modal from '../../components/video-modal';
import AuthService from '../../services/AuthService';
import YoutubeService from '../../services/YoutubeService';
import styles from './Home.module.scss';

class Home extends Component {

    state = {
        items: [],
        nextPage: undefined,
        videoSelected: undefined
    }
    
    componentDidMount() {
        this.loadPlaylist();
    }

    logout = () => {
        AuthService.doLogout();
        this.props.history.push("/");
    }
    
    loadPlaylist = () => {
        SpinnerService.on();
        YoutubeService.getPlayList(this.state.nextPage)
            .then(data => {
                const page = data.items.map(item => ({
                    title: item.snippet.title,
                    description: item.snippet.description,
                    thumbnails: item.snippet.thumbnails,
                    videoId: item.contentDetails.videoId
                }));
                this.setState({
                    ...this.state,
                    items: [ ...this.state.items, ...page ],
                    nextPage: data.nextPageToken
                });
            })
            .finally(() => {
                SpinnerService.off();
            })
    }

    hadleVideClick = (videoId) => {
        this.setState({
            ...this.state,
            videoSelected: videoId
        });
    }

    handleNextPageClick = () => {
        this.loadPlaylist();
    }

    handleCloseModalVideo = () => {
        this.setState({
            ...this.state,
            videoSelected: undefined
        });
    }

    render() {
        return <div className={styles.home}>

            {/* Sidebar */}
            <div className={styles.sideBar}>

                <Logo 
                    image={logo} 
                    className={styles.logo} 
                    alt="The Witcher Wild Hunt logo"
                />

                <div className={styles.sideBarButtons}>
                    <Button 
                        label="TRAILERS" 
                        className={styles.trailersButton}
                    />
                    <Button 
                        label="LOGOUT" 
                        className={styles.trailersButton}
                        onClick={this.logout}
                    />                    
                </div>
            </div>

            {/* Video list */}
            <div className={styles.videoList}>
                <VideoList 
                    items={this.state.items} 
                    nextPage={this.state.nextPage}
                    onItemClick={this.hadleVideClick}
                    onNextPageClick={this.handleNextPageClick}
                />
            </div>

            <Modal                 
                videoId={this.state.videoSelected}
                onClose={this.handleCloseModalVideo}
            />

        </div>        
    }

}
 
Home.propTypes = {
    history: PropTypes.object.isRequired
}

export default withRouter(Home);