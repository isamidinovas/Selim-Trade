import React from "react";
import Img from "./img/img.png";
import styles from "./GateTypes.module.scss";
const GateTypes = () => {
  return (
    <div className={styles.types__block}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.types__title}>типы ворот</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <img src={Img} alt="img" className={styles.item__img} />
              <p className={styles.item__text}>
                Противопожарные распашные ворота
              </p>
            </div>
            <div className={styles.item}>
              <img src={Img} alt="img" className={styles.item__img} />
              <p className={styles.item__text}>
                Противопожарные распашные ворота
              </p>
            </div>
            <div className={styles.item}>
              <img src={Img} alt="img" className={styles.item__img} />
              <p className={styles.item__text}>
                Противопожарные распашные ворота
              </p>
            </div>
            <div className={styles.item}>
              <img src={Img} alt="img" className={styles.item__img} />
              <p className={styles.item__text}>
                Противопожарные распашные ворота
              </p>
            </div>
            <div className={styles.item}>
              <img src={Img} alt="img" className={styles.item__img} />
              <p className={styles.item__text}>
                Противопожарные распашные ворота
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GateTypes;
