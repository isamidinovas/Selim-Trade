import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div id="about" className={styles.about__block}>
      <div className={styles.container}>
        <h2 className={styles.block__title}>Кто такие Selim trade?</h2>
        <div className={styles.block__texts}>
          <p className={styles.block__text}>
            МЫ являемся официальным представителем DOORHAN.
          </p>
          <p className={styles.block__text}>
            Производственно — монтажная компания Selim trade основана
            в 2003 году.
          </p>
          <p className={styles.block__text}>
            Основа нашей деятельности — это продажа и монтаж: ворот,
            рольставней, шлагбаумов, рол штор, жалюзи и многое другое.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
