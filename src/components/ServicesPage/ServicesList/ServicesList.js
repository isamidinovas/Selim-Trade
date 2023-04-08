import React, { useEffect } from "react";
import SingleService from "../SingleService/SingleService";
import styles from "./ServicesList.module.scss";
import { getGates } from "../../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";

const ServicesList = () => {
  const { gatesList } = useSelector((state) => state.gates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGates());
  }, []);
  return (
    <>
      {gatesList.length > 0 ? (
        <div className={styles.list}>
          {gatesList.map((item) => (
            <SingleService item={item} id={item.id} key={item.id} />
          ))}
        </div>
      ) : (
        <h2>Пока нету ворот</h2>
      )}
    </>
  );
};

export default ServicesList;
