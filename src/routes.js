import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import TrailersPage from './pages/TrailersPage';

export default function Routes(){
    return (
        <HashRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/trailers" component={TrailersPage}></Route>
            </Switch>
        </HashRouter>
    )
}
