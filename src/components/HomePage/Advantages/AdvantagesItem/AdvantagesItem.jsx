import React from "react";
import styles from "./AdvantagesItem.module.scss";
const AdvantagesItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt="icon" className={styles.img} />
      <p className={styles.text}>{item.text}</p>
    </div>
  );
};

export default AdvantagesItem;
