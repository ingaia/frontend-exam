import React from "react";
import classnames from "classnames";
import image from "assets/logo_dark.png";
import styles from "./Logo.module.scss";

const Logo = ({ className }) => (
  <img
    src={image}
    className={classnames(styles.Logo, className)}
    alt="The Witcher Wild Hunt logo"
  />
);

export default Logo;
