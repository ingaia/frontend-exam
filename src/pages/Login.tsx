import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty, trim } from 'lodash';

import actions from '../store/ducks/auth/actions';
import { typedUseSelector } from '../store';

import Grid from '@material-ui/core/Grid';

import TextField from '../components/TextField';
import Button from '../components/Button';
import Layout from '../components/Layout';
import Loader from '../components/Loader';

import * as S from '../styles/Login';

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const state = typedUseSelector((state) => state.auth);
  const [values, setValues] = useState({ email: '', password: '' });

  useEffect(() => {
    if (state.isLogged) {
      history.push('/');
    }
  }, [state.isLogged]);

  const isValid = () => {
    return !isEmpty(trim(values.email)) && !isEmpty(trim(values.password))
  }
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (isValid()) {
      dispatch(actions.loginRequest());
    }
  };

  const handleChange = (prop: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  if (state.loading) {
    return <Loader />;
  }

  return (
    <Layout>
      <S.ContainerWrapper disableGutters maxWidth={false}>
        <Grid container justify='center' alignItems='center' className='bg-opacity'>
          <Grid item xs={12} md={3}>
            <Grid container>
              <Grid item xs={12}>
                <S.Logo
                  src='/assets/logo_dark.png'
                  alt='logo'
                />
              </Grid>
              <Grid item xs={12}>
                <form noValidate autoComplete='off' onSubmit={onSubmit}>
                  <Grid container justify='center'>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id='email'
                        type='email'
                        label='Email'
                        value={values.email}
                        onChange={handleChange('email')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id='password'
                        type='password'
                        label='Password'
                        value={values.password}
                        onChange={handleChange('password')}
                      />
                    </Grid>
                    <Grid item xs={12} md={4} xl={2}>
                      <Button fullWidth type='submit'>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </S.ContainerWrapper>
    </Layout>
  );
};

export default Login;
