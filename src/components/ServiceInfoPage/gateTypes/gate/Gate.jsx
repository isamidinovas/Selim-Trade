import React from "react";
import styles from "./Gate.module.scss";
export const GateItem = ({ item }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
  return (
    <div className={styles.item}>
      <img src={img} alt="img" className={styles.item__img} />
      <p className={styles.item__text}>{item.name}</p>
    </div>
  );
};
