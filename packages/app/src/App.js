import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Theme, themeReducer } from './components/theme';
import PrivateRoute from './components/private-router';

import Login from './pages/login';
import Options from './pages/options';
import Trailers from './pages/trailers';
import NotFound from './pages/not-found';

const store = createStore(themeReducer);

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path="/" component={Trailers} />
            <PrivateRoute exact path="/options" component={Options} />
            <Route exact path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Theme>
    </Provider>
  );
}

export default App;
