import React from "react";
import styles from "./Hero.module.scss";
const Hero = () => {
  return (
    <div className={styles.hero__block}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.hero__title}>Промышленные секционные ворота</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
