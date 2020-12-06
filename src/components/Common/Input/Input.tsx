import React from "react";
import { Input, Container, Label } from "./style";
import { InputInterface } from "../../../types/input";
function InputComp(props: InputInterface) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input onChange={props.onChange} type={props.type} value={props.value} />
    </Container>
  );
}
export default InputComp;
