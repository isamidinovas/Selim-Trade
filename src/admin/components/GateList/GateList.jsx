import React, {useState } from "react";
import styles from "./GateList.module.scss";
import GateItem from "../GateItem/GateItem";
import { useSelector } from "react-redux";
const GateList = () => {
  const { gates } = useSelector((store) => store.gate);
  return (
    <>
      <div className={styles.gate_list}>
        {gates.map((gate) => {
          return (
            <div key={gate?.id}>
              <GateItem {...gate} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GateList;
