import React from "react";
import styles from "./Hero.module.scss";
const Hero = ({ name, gateInfoList }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${gateInfoList.image}`;
  return (
    <div
      className={styles.hero__block}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1 className={styles.hero__title}>{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
