import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import actions from '../store/ducks/auth/actions';
import { typedUseSelector } from '../store';

import Grid from '@material-ui/core/Grid';

import TextField from '../components/TextField';
import Button from '../components/Button';
import Layout from '../components/Layout';

import * as S from '../styles/Login';

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const state = typedUseSelector((state) => state.auth);

  useEffect(() => {
    if (state.isLogged) {
      history.push('/');
    }
  }, [state.isLogged]);

  const onSubmit = (event: any) => {
    event.preventDefault();
    dispatch(actions.loginRequest());
  };

  if (state.loading) {
    return (
      <p>loading</p>
    );
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
                        label='Email'  />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id='password'
                        type='password'
                        label='Password'  />
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
