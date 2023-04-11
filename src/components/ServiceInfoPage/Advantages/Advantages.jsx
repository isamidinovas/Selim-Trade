import React from "react";
import { AdvantageItem } from "./AdvantageItem/AdvantageItem";
import styles from "./Advantages.module.scss";

const Advantages = ({ advantages }) => {
  return (
    <div className={styles.advantages__block}>
      <div className={styles.container}>
        <h2 className={styles.advantages__title}>Основные преимущества</h2>
        {advantages?.length > 0 ? (
          <div className={styles.items}>
            {advantages.map((item, index) => (
              <AdvantageItem item={item} index={index} key={item.id} />
            ))}
          </div>
        ) : (
          <h2>Преимуществ нету</h2>
        )}
      </div>
    </div>
  );
};

export default Advantages;
