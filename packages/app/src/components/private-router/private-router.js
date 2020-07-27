import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogged = localStorage.getItem('loggedIn');

  return (
    <Route {...rest} render={(props) => (
      isLogged
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  );
};

export default PrivateRoute;
