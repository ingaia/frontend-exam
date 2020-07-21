import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from './pages/Loading';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Loading} />
      <Route path="/signin" component={SignIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
