import React from "react";
import styles from "./WeOfferItem.module.scss";
const WeOfferItem = ({ item }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
  return (
    <div className={styles.block__item}>
      <img src={img} alt="avatar" className="im" />
      <span className={styles.item__text}>{item.name}</span>
    </div>
  );
};

export default WeOfferItem;
