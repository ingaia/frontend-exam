// Tools
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Assets
import WitcherLogo from '../../assets/images/logo_dark.png';

// Components
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// Actions
import { logIn } from '../../redux/user/user.actions';

// Styled Components
import {
  FormContainer,
  MainContainer,
}
  from './sign-in.stlyes';

const SignIn = ({ logIn }) => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userInfo;
    logIn({ email, password });
  };

  const handleChange = (event) => {
    const { type, value } = event.target;
    setUserInfo({ ...userInfo, [type]: value });
  };

  return (
    <MainContainer>
      <img src={WitcherLogo} alt="Witcher Light Logo" />
      <FormContainer onSubmit={handleSubmit}>
        <CustomInput change={handleChange} id="userEmail" type="email" placeholder="Email" />
        <CustomInput change={handleChange} id="userPassword" type="password" placeholder="Password" />
        <CustomButton isSignIn type="submit">LOGIN</CustomButton>
      </FormContainer>
    </MainContainer>

  );
};

SignIn.defaultProps = {
  logIn: null,
};

SignIn.propTypes = {
  logIn: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (emailAndPassword) => dispatch(logIn(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
