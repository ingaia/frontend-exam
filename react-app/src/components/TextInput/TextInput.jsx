import React from "react";
import classnames from "classnames";
import styles from "./TextInput.module.scss";

const TextInput = ({ id, label, value, onChange, type, className }) => (
  <div className={classnames(className, styles.InputContainer)}>
    <label
      htmlFor={id}
      className={classnames({ [styles.inputHasValue]: !!value })}
    >
      {label}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      {...(type === "email"
        ? { autoCapitalize: "off", spellCheck: "false" }
        : {})}
    />
  </div>
);

TextInput.defaultProps = {
  value: "",
  onChange: () => undefined,
  type: "text"
};

export default TextInput;
