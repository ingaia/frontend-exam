import React, { useState } from "react";
import classnames from "classnames";
import Logo from "components/Logo";
import TextInput from "components/TextInput";
import styles from "./App.module.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className={styles.App}>
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
        <button className={classnames(styles.submitLogin)}>LOGIN</button>
      </div>
    </div>
  );
}

export default App;
