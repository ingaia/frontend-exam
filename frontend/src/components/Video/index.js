import React from "react";
import ModalVideo from 'react-modal-video'

import './styles.css'

class Video extends React.Component {
    
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this);
    }

    openModal () {
        this.setState({isOpen: true})
    }

    render() {
        const { video } = this.props;
        let _id = video.snippet.resourceId.videoId;
        
        return (
            <>
                <ModalVideo ratio='4:3' channel='youtube' isOpen={this.state.isOpen} videoId={_id} onClose={() => this.setState({isOpen: false})} openMessage='TESTE'/>
                <li className="video__item">
                    
                    <div className="video__content" onClick={this.openModal}>
                        <div className="wrapper__item" >
                            <img
                                src={video.snippet.thumbnails.maxres.url}
                                alt={video.snippet.title}
                            />
                        </div>
                        <div className="wrapper__item-text">
                            <p className="">{video.snippet.title}</p>
                        </div>
                    </div>
                    
                </li>
            </>
        );
    }
}

export default Video;
