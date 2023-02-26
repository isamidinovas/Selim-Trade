import React from "react";
import styles from "./ServicesBlock.module.scss";
import Icon from "./img/icon.png";
const ServicesBlock = () => {
  return (
    <div className={styles.services__block}>
      <div className={styles.container}>
        <h2 className={styles.services__title}>Сервис</h2>
        <div className={styles.items}>
          <div className={styles.item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesBlock;
