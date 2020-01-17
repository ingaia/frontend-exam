import React, { useState } from 'react';
import Button from '../../components/Button';

import logo_dark from '../../../assets/logo_dark.png';
import './style.less';

export default function SideMenu(props){
    const [open, setOpen] = useState(false);

    return (
        <div className="side-menu">
            <div className="side-menu-header">
                { open ? <i className="fas fa-times" onClick={() => setOpen(false)}></i> 
                    :   <i className="fas fa-bars" onClick={() => setOpen(true)}></i>
                }
                <div className="logo-box">
                    <img className="logo" src={logo_dark} alt=""/>
                </div>
            </div>
            <div className={`sidenav ${open && 'open'}`}>
                <Button className="btn-hillary" label="Trailers"/>
                <Button className="btn-default" label="Logout" onClick={props.logOut}/> 
            </div>
        </div>
    );
}