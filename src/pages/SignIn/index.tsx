import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import history from '../../services/history';

import logo from '../../assets/logo_dark.png';
import Background from '../../components/Background';
import {
  Container, Content, SubmitButton,
} from './styles';

const SignIn: React.FC = () => {
  // States


  // Navigate with history to Dashboard
  function handleSubmit() {
    setTimeout(() => {
      history.push('/dashboard');
    }, 500)
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo_witcher" />
        <Form onSubmit={handleSubmit}>
          <div>
            <Input required name="email" id="email" type="input" />
            <label htmlFor="email" >Email</label>
          </div>
          <div>
            <Input required name="password" id="password" type="password" />
            <label htmlFor="password" >Password</label>
          </div>
          <SubmitButton
            type="submit"
          >
            LOGIN
            </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
