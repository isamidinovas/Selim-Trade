import React from "react";
import styles from "./Button.module.scss";

const Button = ({text, outline, icon }) => {
  return (
    <button
      className={styles.btn}
      style={{ outline: outline }}
    >
    {text} <span className={styles.icon}>{icon}</span>
    </button>
  );
};



export default Button;
