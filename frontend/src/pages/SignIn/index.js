import React from 'react';

import logo from '~/assets/logo_dark.png';

import { Wrapper, Content } from './styles';

export default function SignIn() {
    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="logo" width={274} height={137} />
                <form>
                    <input type="email" placeholder="email@login.com" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">LOGIN</button>
                </form>
            </Content>
        </Wrapper>
    );
}
