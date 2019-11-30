import React, { useState } from "react";

import classnames from "classnames";
import Logo from "components/Logo";
import styles from "./VideoList.module.scss";

const VideoList = () => {
  return (
    <div className={styles.loginPanel}>
      <Logo className={styles.logo} />
    </div>
  );
};

export default VideoList;
