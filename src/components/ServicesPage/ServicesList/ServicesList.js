import React, { useEffect } from "react";
import SingleService from "../SingleService/SingleService";
import styles from "./ServicesList.module.scss";
import { getGates } from "../../../redux/user/UserThunk";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const ServicesList = () => {
  const { gatesList, isloading } = useSelector((state) => state.gates);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGates());
  }, []);
  return (
    <>
      {isloading ? (
        <div className={styles.list}>
          <Skeleton width={580} height={350} />
          <Skeleton width={580} height={350} />
          <Skeleton width={580} height={350} />
        </div>
      ) : (
        gatesList.length > 0 && (
          <div className={styles.list}>
            {gatesList.map((item) => (
              <SingleService item={item} id={item.id} key={item.id} />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default ServicesList;
