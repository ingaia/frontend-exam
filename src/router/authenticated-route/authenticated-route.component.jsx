// Tools
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ userAuth, component: Comp, ...otherProps }) => (
  <Route
    {...otherProps}
    render={() => !userAuth ? (<Redirect to="/login" />) : (<Comp />)}
  />
);

AuthenticatedRoute.defaultProps = {
  userAuth: false,
  component: null,
};

AuthenticatedRoute.propTypes = {
  userAuth: PropTypes.bool,
  component: PropTypes.func,
};

export default AuthenticatedRoute;
