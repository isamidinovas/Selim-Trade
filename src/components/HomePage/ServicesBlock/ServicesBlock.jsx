import React from "react";
import ServiceItem from "./ServiceItem/ServiceItem";
import Icon1 from "./img/icon.png";
import Icon2 from "./img/icon2.png";
import Icon3 from "./img/icon3.png";
import Icon4 from "./img/icon4.png";

import styles from "./ServicesBlock.module.scss";
const ServicesBlock = () => {
  const SERVICE = [
    {
      image: Icon1,
      text: "Консультация и техническая поддержка",
    },
    {
      image: Icon2,
      text: "Настройка пультов управления",
    },
    {
      image: Icon3,
      text: "Монтаж",
    },
    {
      image: Icon4,
      text: "Послегарантийное обслуживание",
    },
  ];
  return (
    <div className={styles.services__block}>
      <div className={styles.container}>
        <h2 className={styles.services__title}>Сервис</h2>
        <div className={styles.items}>
          {SERVICE.map((item, index) => (
            <ServiceItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServicesBlock;
