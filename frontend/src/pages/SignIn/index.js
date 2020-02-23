import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo_dark.png';

import { Wrapper, Content, FloatInput } from './styles';

export default function SignIn() {
    const [requiredEmail, setRequiredEmail] = useState(false);
    const [requiredPassword, setRequiredPassword] = useState(false);
    function handleSubmit(data) {
        console.tron.log(data);
    }

    const schema = Yup.object().shape({
        email: Yup.string()
            .email(() => {
                setRequiredEmail(true);
            })
            .required(() => {
                setRequiredEmail(true);
            }),
        password: Yup.string().required(() => {
            setRequiredPassword(true);
        }),
    });

    function handlerChangeEmail() {
        setRequiredEmail(false);
    }
    function handlerChangePassword() {
        setRequiredPassword(false);
    }
    return (
        <Wrapper>
            <Content>
                <img src={logo} alt="logo" width={274} height={137} />
                <Form schema={schema} onSubmit={handleSubmit}>
                    <FloatInput>
                        <Input
                            name="email"
                            type="email"
                            placeholder=" "
                            autoComplete="off"
                            required={requiredEmail}
                            onChange={handlerChangeEmail}
                        />
                        <label htmlFor="email">E-mail</label>
                    </FloatInput>
                    <FloatInput>
                        <Input
                            name="password"
                            type="password"
                            placeholder=" "
                            autoComplete="off"
                            required={requiredPassword}
                            onChange={handlerChangePassword}
                        />
                        <label htmlFor="password">Password</label>
                    </FloatInput>

                    <button type="submit">LOGIN</button>
                </Form>
            </Content>
        </Wrapper>
    );
}
