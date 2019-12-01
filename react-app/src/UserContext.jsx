import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ initialState, children }) => (
  <UserContext.Provider value={useState(initialState)}>
    {children}
  </UserContext.Provider>
);

UserProvider.defaultProps = { initialState: { isAuthenticated: true } };

export const useUser = () => useContext(UserContext);

export default UserContext;
