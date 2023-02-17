import React from "react";

import Hand from "./img/hand.png";
import Scroll from "./img/scroll.png";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero__block}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.block}>
            <h1 className={styles.block__title}>
              Современная и надёжная защита
            </h1>
            <p className={styles.block__text}>
              Найдите идеальный вариант сами <br />
              или предоставьте это нам
            </p>
            <button className={styles.block__btn}>Заказать ворота</button>
            <img className={styles.scroll__img} src={Scroll} alt="scroll" />
            <img src={Hand} alt="hand" className={styles.hand__img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
