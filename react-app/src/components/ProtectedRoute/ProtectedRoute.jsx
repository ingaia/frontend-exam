import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useUser } from "UserContext";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function ProtectedRoute({ render, children, ...rest }) {
  const [userData] = useUser();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.isAuthenticated ? (
          render ? (
            render()
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
