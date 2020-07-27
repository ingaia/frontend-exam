/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Loader, TextInput, Button, useTheme } from '@witcher-page/ui';

const container = css`
  display: grid;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-items: center;
`;

const loadedContainer = theme => css`
  background-color: ${theme.container.bgColor};
  background-image: url('${theme.assetsPath}/background_414.webp');
  background-position: center top;
  background-size: 100% auto;
  background-repeat: no-repeat;
  @media screen and (min-width: 448px) {
    background-image: url('${theme.assetsPath}/background_780.webp');
  }
  @media screen and (min-width: 780px) {
    background-image: url('${theme.assetsPath}/background_1280.webp');
  }
  @media screen and (min-width: 1280px) {
    background-image: url('${theme.assetsPath}/background_1920.webp');
  }
`;

const form = css`
  width: 100%;
  max-width: 285px;
  text-align: center;
  fieldset {
    border: 0;
  }
  p {
    margin: 0 0 1.5rem 0;
  }
`;

const logo = css`
  width: 161px;
  height: 80px;
  @media screen and (min-width: 870px) {
    width: 276px;
    height: 137px;
  }
`;

const button = css`
  margin-top: 1.5rem;
  width: 106px;
`;

const Login = ({location, decorate}) => {
  const theme = useTheme();
  const history = useHistory();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    let timeout = null;

    if (!isLoaded && !timeout) {
      timeout = window.setTimeout(() => {
        setLoaded(true);
      }, 3500);
    }

    return () => window.clearTimeout(timeout);
  }, [isLoaded]);

  const submitLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('loggedIn', true);
    history.push('/');
  };

  if (!isLoaded) {
    return (<div css={container}><Loader /></div>);
  }

  return (
    <div css={[container, loadedContainer(theme)]}>
      <form css={form} onSubmit={submitLogin}>
        <strong>
          <img
            src={`${theme.assetsPath}/logo.png`}
            srcSet={`${theme.assetsPath}/logo_2x.png 2x, ${theme.assetsPath}/logo_sm.png 870w`}
            alt="The Witcher - Wild Hunt"
            width="276"
            height="137"
            css={logo}
          />
        </strong>

        <fieldset>
          <p>
            <TextInput type="email" placeholder="Email" block />
          </p>
          <p>
            <TextInput type="password" placeholder="Pasword" block />
          </p>

      <Button css={button} type="submit" kind="active" decorate={decorate}>
            Login
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

const mapState = state => ({ decorate: state.decorate });
const ConnectedLogin = connect(mapState)(Login);

export default ConnectedLogin;
