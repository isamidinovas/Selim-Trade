import React from "react";
import styles from "./ServiceItem.module.scss";
const ServiceItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <img src={item.image} alt="icon" className={styles.img} />
      <p className={styles.text}>{item.text}</p>
    </div>
  );
};

export default ServiceItem;
