import React, { memo } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Trailers from "./pages/Trailers/Trailers";

function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact render={Home} />
        <Route path="/trailers" exact render={Trailers} />
      </Switch>
    </BrowserRouter>
  );
}

export default memo(Routing);
