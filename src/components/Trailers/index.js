import React from 'react';

import Trailer from '../Trailer';

import './style.less';
import Button from '../Button';

export default function Trailers(props){
    return (
        <div className="trailers">
            <ul className="trailers-list">
                {props.trailers.map(({id, snippet: {title, thumbnails: { maxres }, resourceId}}) => (
                    <Trailer key={id} title={title} thumbnail={maxres.url} videoId={resourceId.videoId}/>
                ))}
                { props.nextPageToken ? 
                    <li className="load-more">
                        <Button className="btn-hillary" label="Load More" onClick={props.loadMore}/>
                    </li>
                : null}
            </ul>
        </div>
    );
}