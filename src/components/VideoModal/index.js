import React from 'react';

import './style.less';
import Button from '../Button';

export default function VideoModal(props) {
    return (
        <div className="video-modal">
            <Button className="btn-default" label="Close" onClick={props.closeVideo}/>
            <div className="video-content">
                <iframe width="900" height="530" src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&showinfo=0` }>
                </iframe>
            </div>
        </div>
    );
}