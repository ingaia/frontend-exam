import React from 'react';

import './style.less';

export default function Trailer(props){
    return (
        <li className="trailer" >
            <div className="thumbnail" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
            <span className="trailer-title">{props.title}</span>
        </li>
    );
}