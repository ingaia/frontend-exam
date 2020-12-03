import React, { memo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trailers from "./pages/Trailers/Trailers";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={Home} />
        <Route path="/trailers" render={Trailers} />
      </Switch>
    </BrowserRouter>
  );
}

export default memo(Routing);
