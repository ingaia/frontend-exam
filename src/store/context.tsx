import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};
const defaultValue = {
  is_login: false,
  setLogin: (x: any) => null,
  setEmail: (x: any) => null,
  setPassword: (x: any) => null,
};
const AppContext = React.createContext(defaultValue);
const AppProvider = ({ children }: Props) => {
  const [is_login, setLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AppContext.Provider
      value={{
        is_login,
        setLogin,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer, AppContext };
