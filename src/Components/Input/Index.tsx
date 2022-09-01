import React from "react";
import { IInput } from "./IInput";
import styles from "./Input.module.scss";
import glass from "../../Assets/SVG/magnifying-glass-light.svg";

const Input = ({
  type,
  handleChangeEvent,
  handleChange,
  placeholder,
  name,
  className,
}: IInput) => {
  return (
    <div className={styles.search}>
      <input
        onChange={handleChangeEvent}
        name={name}
        className={`${styles[type + "_input"]} ${className}`}
        placeholder={placeholder}
      />

      <img src={glass} className={styles.find} onClick={() => alert()} />
    </div>
  );
};

export default Input;
