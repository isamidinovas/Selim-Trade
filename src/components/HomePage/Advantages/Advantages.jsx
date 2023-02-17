import React from "react";
import styles from "./Advantages.module.scss";
import Icon from "./img/icon.png";
const Advantages = () => {
  return (
    <div className={styles.advantages__block}>
      <div className={styles.container}>
        <h2 className={styles.advantages__title}>Наши преимущества</h2>
        <div className={styles.advantages__items}>
          <div className={styles.advantages__item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.advantages__item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.advantages__item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.advantages__item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
          <div className={styles.advantages__item}>
            <img src={Icon} alt="icon" className={styles.advantager__img} />
            <p>Бесплатный выезд специалиста для замеров</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
