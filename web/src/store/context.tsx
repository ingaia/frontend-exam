import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};
const defaultValue = {
  is_login: false,
  setLogin: (x: any) => null,
};
const AppContext = React.createContext(defaultValue);
const AppProvider = ({ children }: Props) => {
  const [is_login, setLogin] = useState(false);
  return (
    <AppContext.Provider
      value={{
        is_login,
        setLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer, AppContext };
