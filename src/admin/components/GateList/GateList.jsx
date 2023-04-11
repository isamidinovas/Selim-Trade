import React from "react";
import styles from "./GateList.module.scss";
import GateItem from "../GateItem/GateItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGates } from "../../../redux/admin/gateSlice";
const GateList = () => {
  const dispatch = useDispatch();
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
