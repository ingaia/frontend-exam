import React from 'react';
import { useDispatch } from 'react-redux';

import { Menu } from './styles';

import logo from '~/assets/logo_dark.png';
import { signOut } from '~/store/modules/auth/actions';

export default function SideMenu() {
    const dispatch = useDispatch();

    function handlerSignOut() {
        dispatch(signOut());
    }
    return (
        <Menu>
            <img src={logo} alt="logo" width={274} height={137} />
            <button type="button">TRAILERS</button>
            <span onClick={handlerSignOut}>LOGOUT</span>
        </Menu>
    );
}
