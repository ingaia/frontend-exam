import React from 'react';

import { Menu } from './styles';

import logo from '~/assets/logo_dark.png';

export default function SideMenu() {
    return (
        <Menu>
            <img src={logo} alt="logo" width={274} height={137} />
            <button type="button">TRAILERS</button>
            <span>LOGOUT</span>
        </Menu>
    );
}
