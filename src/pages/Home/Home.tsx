import React, { useContext } from "react";
import { Container } from "./style";
import Logo from "../../components/Common/Logo/Logo";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
import { AppContext } from "../../store/context";

function Home() {
  const { setLogin, setPassword, setEmail, email, password } = useContext(
    AppContext
  );
  const toogleLogin = () => {
    setLogin(true);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <Container>
      <Logo />
      <Input
        name="email"
        type="email"
        value={email}
        onChange={changeEmail}
        label="Email"
      />
      <Input
        type="password"
        name="password"
        onChange={changePassword}
        value={password}
        label="Password"
      />
      <Button onClick={toogleLogin} label="LOGIN" />
    </Container>
  );
}
export default Home;
