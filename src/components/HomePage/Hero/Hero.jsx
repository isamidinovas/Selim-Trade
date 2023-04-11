import React from "react";

import Hand from "./img/hand.png";
import Scroll from "./img/scroll.png";
import Tab from "./img/Tap.png";
import styles from "./Hero.module.scss";

import { HiArrowNarrowUp } from "react-icons/hi";

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

            <a href="#form" className={styles.block__btn}>
              Заказать ворота
            </a>
            <div className={styles.scroll}>
              <img className={styles.scroll__img} src={Scroll} alt="scroll" />
              <img src={Hand} alt="hand" className={styles.hand__img} />
              <img className={styles.tab} src={Tab} alt="" />
              <HiArrowNarrowUp className={styles.arrow__left} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
