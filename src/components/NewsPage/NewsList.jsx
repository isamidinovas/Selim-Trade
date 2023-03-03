import React from "react";
import Button from "../Button/Button";
import New from "../New/New";
import Img from "./img/img.png";
import styles from "./NewsList.module.scss";
const NewsList = () => {
  return (
    <div className={styles.news__block}>
      <div className={styles.news__container}>
        <div className={styles.news__section}>
          <h2 className={styles.news__title}>Новости компании</h2>
          <p className={styles.news__text}>
            К вашему вниманию Здесь мы собрали все актуальные новости нашей
            компании
          </p>
        </div>
        <div className={styles.news__items}>
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
          <New />
        </div>
        <Button text="Все новости" />
      </div>
    </div>
  );
};

export default NewsList;
