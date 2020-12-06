import React, { useEffect } from "react";
import { Container } from "./style";
import { ReactComponent as Logo } from "../../assets/loader.svg";

function Loading() {
  useEffect(() => {
    const interval = setInterval(() => {
      LogoAnimation();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const LogoAnimation = () => {
    let paths = document.querySelectorAll("path");
    paths.forEach((path, index) => {
      setTimeout(() => {
        path.setAttribute("style", "fill:#FF3509");
      }, (1 + index) * 250);
    });
    paths.forEach((path, index) => {
      path.setAttribute("style", "fill:#4C4C4C");
    });
  };
  return (
    <Container>
      <Logo />
    </Container>
  );
}
export default Loading;
