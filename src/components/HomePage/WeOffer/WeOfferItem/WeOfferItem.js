import React from "react";
import styles from "./WeOfferItem.module.scss";
import Img from "../img/image 3.png";
const WeOfferItem = ({ gates, item }) => {
  return (
    // <div className={styles.block__item}>
    //   <img src={gates.image} alt="avatar" className="im" />
    //   <span className={styles.item__text}>{gates.name}</span>
    // </div>
    <div className={styles.block__item}>
      <img src={Img} alt="avatar" className="im" />
      <span className={styles.item__text}>Ворота</span>
    </div>
  );
};

export default WeOfferItem;
