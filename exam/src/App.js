import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./pages/login";
import Trailers from "./pages/trailers";

import GlobalStyles from "./globalStyle";

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/trailers" component={Trailers} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
