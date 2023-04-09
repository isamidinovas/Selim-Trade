import React from "react";
import { GateItem } from "./gate/Gate";
import styles from "./GateTypes.module.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const GateTypes = ({ gates, isloading }) => {
  return (
    <div className={styles.types__block}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2 className={styles.types__title}>типы ворот</h2>
          {isloading ? (
            <div className={styles.items}>
              <Skeleton width={256} height={314} />
              <Skeleton width={256} height={314} />
              <Skeleton width={256} height={314} />
            </div>
          ) : gates?.length > 0 ? (
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
