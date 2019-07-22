import React, {useState} from 'react';
import LogoDark from '../../assets/images/logo_dark.png';
import TextField from "../../components/TextField/TextField";
import {ButtonLogin, LoginStyled} from './styled';
import Background from "../../components/Background/Background";
import Box from "../../components/Box/Box";

const Login = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const doLogin = () => {
    localStorage.setItem('authToken', 'FAKE_TOKEN');
    history.push(`/`);
  };

  return (
    <Background>
      <LoginStyled>
        <Box>
          <img src={LogoDark} alt={`Logo`}/>
          <TextField
            id={`email`}
            name={`email`}
            label={`email`}
            type={`text`}
            value={email}
            onChange={handleEmailChange}/>
          <TextField
            id={`password`}
            name={`password`}
            label={`password`}
            type={`password`}
            value={password}
            onChange={handlePasswordChange}/>
          <ButtonLogin
            type="submit"
            variant="contained"
            name={'login'}
            value={'login'}
            text={'login'}
            onClick={doLogin}
          />
        </Box>
      </LoginStyled>
    </Background>
  );
};

export default Login;