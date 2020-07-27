import React, { memo } from 'react';
import { connect } from 'react-redux';
import { Button } from '@witcher-page/ui';
import { setTheme, setDecorate } from '../components/theme';
import Container from '../components/container';

const Options = memo(({config, dispatch}) => {
  const changeTheme = (t) => (e) => {
    e.preventDefault();
    dispatch(setTheme(t));
  };

  const toggleDecoration = (e) => {
    e.preventDefault();
    dispatch(setDecorate(!config.decorate));
  };

  const isDark = config.theme === 'dark';

  return (
    <Container>
      <h1>Theme</h1>

      <p>
        <Button kind={isDark ? 'active' : 'primary'} onClick={changeTheme('dark')} decorate={config.decorate}>Dark</Button>
        {' '}
        <Button kind={isDark ? 'primary' : 'active'} onClick={changeTheme('light')} decorate={config.decorate}>Light</Button>
      </p>


      <h1>Decorations</h1>

      <p>
        <Button kind={config.decorate ? 'active' : 'primary'} onClick={toggleDecoration} decorate={config.decorate}>
          {config.decorate ? 'on' : 'off'}
        </Button>
      </p>
    </Container>
  );
});

const mapState = state => ({ config: state });
const mapDispatch = dispatch => ({ dispatch });
const ConnectedOptions = connect(mapState, mapDispatch)(Options);

export default ConnectedOptions;
