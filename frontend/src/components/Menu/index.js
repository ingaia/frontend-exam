import React from 'react';
import { useDispatch } from 'react-redux';

import { MenuTop, MenuList } from './styles';

import logo from '~/assets/logo_dark.png';
import { signOut } from '~/store/modules/auth/actions';

export default function Menu() {
    const dispatch = useDispatch();

    function handlerSignOut() {
        dispatch(signOut());
    }
    return (
        <MenuTop>
            <img src={logo} alt="logo" />
            <MenuList>
                <button type="button">TRAILERS</button>
                <span onClick={handlerSignOut}>LOGOUT</span>
            </MenuList>
        </MenuTop>
    );
}
