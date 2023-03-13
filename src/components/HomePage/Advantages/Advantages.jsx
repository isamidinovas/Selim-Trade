import React from "react";
import AdvantagesItem from "./AdvantagesItem/AdvantagesItem";
import BulderIcon from "./img/builder.png";
import PersonIcon from "./img/person.png";
import ToolIcon from "./img/tool.png";
import Tool2Icon from "./img/tool2.png";
import WatchIcon from "./img/watch.png";

import styles from "./Advantages.module.scss";

const Advantages = () => {
  const ADVANTAGES = [
    {
      image: BulderIcon,
      text: "Бесплатный выезд специалиста для замеров",
    },
    {
      image: ToolIcon,
      text: "Многолетний опыт работы",
    },
    {
      image: WatchIcon,
      text: "Минимальные сроки производства",
    },
    {
      image: PersonIcon,
      text: "Высокая квалификация сотрудиков",
    },
    {
      image: Tool2Icon,
      text: "Постгарантийное обслуживание и ремонт",
    },
  ];
  return (
    <div className={styles.advantages__block}>
      <div className={styles.container}>
        <h2 className={styles.advantages__title}>Наши преимущества</h2>
        <div className={styles.items}>
          {ADVANTAGES.map((item, index) => (
            <AdvantagesItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
