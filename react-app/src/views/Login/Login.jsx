import React, { useState } from "react";

import classnames from "classnames";
import Logo from "components/Logo";
import TextInput from "components/TextInput";
import { useUser } from "UserContext";
import { useHistory } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useUser();

  const history = useHistory();
  return (
    <div className={styles.loginPanel}>
      <Logo className={styles.logo} />
      <TextInput
        id="emailInput"
        label="Email"
        className={styles.email}
        value={email}
        onChange={evt => setEmail(evt.target.value)}
        type="email"
      />
      <TextInput
        id="passwordInput"
        label="Password"
        className={styles.password}
        value={password}
        onChange={evt => setPassword(evt.target.value)}
        type="password"
      />
      <button
        className={classnames(styles.submitLogin)}
        onClick={() => {
          setUserData({ isAuthenticated: true });
          history.push("/ListVideos");
        }}
      >
        LOGIN
      </button>
    </div>
  );
};

export default Login;
