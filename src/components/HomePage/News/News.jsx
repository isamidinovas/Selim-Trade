import React from "react";
import styles from "./News.module.scss";
import Img from "./img/img.png";
import Button from "../../Button/Button";
import New from "../../New/New";
const News = () => {
  return (
    <div className={styles.news__block}>
      <div className={styles.news__container}>
        <h2 className={styles.news__title}>Последние новости</h2>
        <div className={styles.news__items}>
          <New />
          <New />
          <New />
        </div>
        <Button text="Все новости" />
      </div>
    </div>
  );
};

export default News;
