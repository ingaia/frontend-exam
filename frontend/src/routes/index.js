import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import Route from './Route';

import { Dashboard, SignIn } from '~/pages';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/dashboard" component={Dashboard} isPrivate />

            <Route path="/" component={() => <Redirect to="/" />} />
        </Switch>
    );
}
