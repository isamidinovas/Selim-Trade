import React from "react";
import SingleService from "../SingleService/SingleService";
import styles from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <>
      <div className={styles.list}>
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
        <SingleService />
      </div>
    </>
  );
};

export default ServicesList;
