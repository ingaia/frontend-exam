import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CheckLoggedRoute from './CheckLoggedRoute';
import PrivateRoute from './PrivateRoute';
import Home from '../../views/home/Home';
import NotFound from '../../views/not-found/NotFound';

const Routes = () => {
    return (
        <Switch>
            <CheckLoggedRoute path='/' exact />

            <PrivateRoute path="/home">
                <Home />
            </PrivateRoute>

            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    );
}
 
export default Routes;