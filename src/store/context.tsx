import React, { useState } from "react";

type Props = {
  children: React.ReactNode;
};

const defaultValue = {
  is_login: false,
  setLogin: (x: boolean) => {},
  setPassword: (x: string) => {},
  setEmail: (x: string) => {},

  email: "",
  password: "",
};
const AppContext = React.createContext(defaultValue);
const AppProvider = ({ children }: Props) => {
  const [is_login, setLogin] = useState(defaultValue.is_login);
  const [email, setEmail] = useState(defaultValue.email);
  const [password, setPassword] = useState(defaultValue.password);
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
