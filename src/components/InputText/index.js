import React from 'react';

import './style.less';

export default function InputText(props) {
    return (
        <div className="input-group">
            <input type={props.type ? props.type : 'text'} 
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.label}
                required={props.required}/>
            <label className="label" htmlFor={props.name}>
                <span className="label-content">
                    {props.label}
                </span>
            </label>
        </div>
    )
}