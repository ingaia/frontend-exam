import React from 'react';

import { MenuTop, MenuList } from './styles';

import logo from '~/assets/logo_dark.png';

export default function Menu() {
    return (
        <MenuTop>
            <img src={logo} alt="logo" />
            <MenuList>
                <button type="button">TRAILERS</button>
                <span>LOGOUT</span>
            </MenuList>
        </MenuTop>
    );
}
