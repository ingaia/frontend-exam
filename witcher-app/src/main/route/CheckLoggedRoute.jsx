import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import AuthService from '../../services/AuthService';
import Login from '../../views/login/Login';

const CheckLoggedRoute = ({ ...rest }) => {
    return (
        <Route
            {...rest}  
            render={() => 
                {
                    return (
                        AuthService.isLogged() 
                        ? (<Redirect to="/home" />)
                        : (<Login />)
                    )
                }
        }/>
      );
}
 
CheckLoggedRoute.propTypes = {
    children: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
}

export default CheckLoggedRoute;