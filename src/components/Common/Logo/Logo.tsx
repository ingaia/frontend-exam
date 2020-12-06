import React from "react";
import { Image } from "./style";
function Logo() {
  return <Image src={`${process.env.PUBLIC_URL}/images/logo_dark.png`} />;
}
export default Logo;
