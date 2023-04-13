import React from "react";
import styles from "./GateAdvantages.module.scss";
export const GateAdvantages = ({ item, index }) => {
  return (
    <div className={styles.item}>
      <div className={styles.number}>{index + 1}</div>
      <h3 className={styles.item__title}>{item.title}</h3>
      <p className={styles.item__text}>{item.text}</p>
    </div>
  );
};
