import React from 'react';

import './style.less';

export default function Button(props) {
    return (
        <button 
            className="btn" 
            type={props.type ? props.type : 'button'} 
            onClick={props.onClick}>
                {props.label}
        </button>
    );
}