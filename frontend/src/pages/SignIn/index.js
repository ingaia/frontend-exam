import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import logo from '~/assets/logo_dark.png';

import { Wrapper, Content, FloatInput } from './styles';

export default function SignIn() {
    function handleSubmit(data) {
        console.tron.log(data);
    }
    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="logo" width={274} height={137} />
                <Form onSubmit={handleSubmit}>
                    <FloatInput>
                        <Input
                            name="email"
                            type="email"
                            placeholder=" "
                            autocomplete="off"
                            required={false}
                        />
                        <label htmlFor="email">E-mail</label>
                    </FloatInput>
                    <FloatInput>
                        <Input
                            name="password"
                            type="password"
                            placeholder=" "
                            autocomplete="off"
                            required={false}
                        />
                        <label htmlFor="password">Password</label>
                    </FloatInput>

                    <button type="submit">LOGIN</button>
                </Form>
            </Content>
        </Wrapper>
    );
}
