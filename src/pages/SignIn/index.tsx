import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { toast } from 'react-toastify';

import history from '../../services/history';

import logo from '../../assets/logo_dark.png';
import Background from '../../components/Background';
import {
  Container, Content, SubmitButton,
} from './styles';

const SignIn: React.FC = () => {
  // States
  const [loading, setLoading] = useState<boolean>(false);

  // Navigate with history to Dashboard
  function handleSubmit() {
    setLoading(true);
    setTimeout(() => {
      history.push('/dashboard');
      toast.success("Login realizado com sucesso!")
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
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <Input required name="password" id="password" type="password" />
            <label htmlFor="password" >Password</label>
          </div>
          <SubmitButton
            type="submit"
          >
            {loading
              ? (<AiOutlineLoading3Quarters className="loading-icon" />)
              : "LOGIN"
            }
          </SubmitButton>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
