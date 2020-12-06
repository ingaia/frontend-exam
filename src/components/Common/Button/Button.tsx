import React from "react";
import { Button } from "./style";
import { ButtonInterface } from "../../../types/button";
function ButtonComp(props: ButtonInterface) {
  return (
    <Button
      noMargin={props.noMargin}
      onlyMobile={props.onlyMobile}
      longButton={props.longButton}
      noBorder={props.noBorder}
      disable={props.disable}
      onClick={props.onClick}
    >
      {props.label}
    </Button>
  );
}
export default ButtonComp;
