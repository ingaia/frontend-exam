import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

// React context that stores user data. For this application
// there is no backend, so the auth is a simple state variable
export const UserProvider = ({ initialState, children }) => (
  <UserContext.Provider value={useState(initialState)}>
    {children}
  </UserContext.Provider>
);

UserProvider.defaultProps = { initialState: { isAuthenticated: false } };

export const useUser = () => useContext(UserContext);

export default UserContext;
