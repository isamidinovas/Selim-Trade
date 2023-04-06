import React, { useRef, useState } from "react";
import styles from "./ReviewItem.module.scss";

const ReviewItem = ({ item }) => {
  return (
    <>
      <div className={styles.grid_item}>
        <div className={styles.card_header}>
          <img
            className={styles.img}
            src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
            alt=""
          />

          <div className={styles.author}>
            <h4>Мадина Аимбекова </h4>
            <p>секционные ворота</p>
          </div>
        </div>
        <p>
          Ворота стоят уже более двух лет. За это время с ними не было никаких
          проблем. Спасибо, Selim Trade!
        </p>
      </div>
      {/* <div className={styles.grid_item}>
        <div className={styles.card_header}>
          <img
            className={styles.img}
            src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
            alt=""
          />

          <div className={styles.author}>
            <h4>{item.firstName + " " + item.lastName} </h4>
            <p>{item.gateCategoryId}</p>
          </div>
        </div>
        <p>{item.reviewText}</p>
      </div> */}
    </>
  );
};
export default ReviewItem;
