import React from 'react';

import Trailer from '../Trailer';
import Button from '../Button';
import Loader from '../Loader';

import './style.less';

export default function Trailers(props){
    return (
        <div className="trailers">
            <ul className="trailers-list">
                {props.trailers.map(({id, snippet: {title, thumbnails: { maxres }, resourceId}}) => (
                    <Trailer key={id} title={title} thumbnail={maxres.url} videoId={resourceId.videoId}/>
                ))}
                { props.nextPageToken && !props.loading &&
                    <li className="load-more">
                        <Button className="btn-hillary" label="Load More" onClick={props.loadMore}/>
                    </li>
                }
                { props.loading && 
                    <li className="load-more">
                        <Loader/>
                    </li>
                }
            </ul>
        </div>
    );
}