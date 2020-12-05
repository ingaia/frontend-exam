import React from "react";
import { Container } from "./style";
import Logo from "../../components/Common/Logo/Logo";
import Input from "../../components/Common/Input/Input";
import Button from "../../components/Common/Button/Button";
function Home() {
  return (
    <Container>
      <Logo />
      <Input label="Email" />
      <Input label="Password" />
      <Button label="LOGIN" />
    </Container>
  );
}
export default Home;
