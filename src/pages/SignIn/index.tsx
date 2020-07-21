import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import history from '../../services/history';

import logo from '../../assets/logo_dark.png';
import Background from '../../components/Background';
import {
  Container, Content, SubmitButton,
} from './styles';

const SignIn: React.FC = () => {
  function handleSubmit() {
    history.push('/dashboard');
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="logo_witcher" />
        <Form onSubmit={() => handleSubmit()}>
          <Input name="email" placeholder="Email" />
          <Input name="password" placeholder="Password" />
          <SubmitButton type="submit">LOGIN</SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
