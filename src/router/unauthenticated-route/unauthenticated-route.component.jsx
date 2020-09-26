// Tools
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const UnauthenticatedRoute = ({ userAuth, component: Comp, ...otherProps }) => (
  <Route
    {...otherProps}
    render={() => userAuth ? (<Redirect to="/" />) : (<Comp />)}
  />
);

UnauthenticatedRoute.defaultProps = {
  userAuth: false,
  component: null,
};

UnauthenticatedRoute.propTypes = {
  userAuth: PropTypes.bool,
  component: PropTypes.shape({}),
};

export default UnauthenticatedRoute;
