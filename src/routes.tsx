import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from "react-redux";

import store from './store';

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

const Routes = () => {
  const isLogged = () => {
    const token = localStorage.getItem('isLogged') || '';
    return (!!token);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={((props) => (
            isLogged()
            ? <Home />
            : <Redirect to='/login' />
          ))} />
          <Route exact path='/login' component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;
