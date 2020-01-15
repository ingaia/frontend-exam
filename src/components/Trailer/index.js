import React, { useState } from 'react';

import VideoModal from '../VideoModal';

import './style.less';

export default function Trailer(props){
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            <li className="trailer" onClick={() => setShowVideo(true)}>
                <div className="thumbnail" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
                <span className="trailer-title">{props.title}</span>
            </li>
            { showVideo ? <VideoModal videoId={props.videoId} closeVideo={() => setShowVideo(false)}/> : null}
        </>
    );
}