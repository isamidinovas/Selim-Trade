import React from "react";
import styles from "./WeOfferItem.module.scss";
import Img from "../img/image 3.png";
const WeOfferItem = ({ gates }) => {
  return (
    <div className={styles.block__item}>
      <img src={gates.image} alt="avatar" className="im" />
      <span className={styles.item__text}>{gates.name}</span>
    </div>
  );
};

export default WeOfferItem;
