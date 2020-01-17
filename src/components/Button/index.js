import React from 'react';

import './style.less';

export default function Button(props) {
    return (
        <button 
            className={`btn ${props.className}`}
            type={props.type ? props.type : 'button'} 
            onClick={props.onClick}>
                {props.label ? props.label.toUpperCase() : ''}
        </button>
    );
}