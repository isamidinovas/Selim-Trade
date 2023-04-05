import React from "react";
import New from "../New/New";
import Img from "./img/image.png";
import styles from "./NewInfos.module.scss";
const NewInfos = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content__top}>
            <img src={Img} alt="img" className={styles.img} />
            <div className={styles.content__info}>
              <h2 className={styles.title}></h2>
              <p className={styles.text}></p>
            </div>
          </div>
          <div className={styles.content__bottom}>
            <img src={Img} alt="img" />
          </div>
        </div>
        <h2 className={styles.news__title}>Похожие новости</h2>
        <New />
      </div>
    </div>
  );
};

export default NewInfos;
