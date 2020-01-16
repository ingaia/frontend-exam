import React from 'react';
import Button from '../../components/Button';

import logo_dark from '../../../assets/logo_dark.png';
import './style.less';

export default function Menu(props){
    return (
        <div className="menu">
            <div className="box-menu">
                <img className="logo" src={logo_dark} alt=""/>
                <Button className="btn-hillary" label="Trailers"/>
                <Button className="btn-default" label="Logout" onClick={props.logOut}/> 
            </div>
        </div>
    );
}