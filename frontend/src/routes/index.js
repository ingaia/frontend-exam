import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import DashBoard from '../pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={DashBoard} />
        </Switch>
    );
}
