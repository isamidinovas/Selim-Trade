import React from "react";
import { GateItem } from "./gate/Gate";
import styles from "./GateTypes.module.scss";

const GateTypes = ({ gates }) => {
  return (
    <div className={styles.types__block}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.types__title}>типы ворот</h2>
          {gates?.length > 0 ? (
            <div className={styles.items}>
              {gates.map((item) => (
                <GateItem item={item} key={item.id} />
              ))}
            </div>
          ) : (
            <h2>Ворот нету</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default GateTypes;
