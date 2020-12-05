import React from "react";
import { Button } from "./style";
import { ButtonInterface } from "../../../types/button";
function ButtonComp(props: ButtonInterface) {
  return <Button>{props.label}</Button>;
}
export default ButtonComp;
