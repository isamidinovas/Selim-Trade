import React from "react";
import styles from "./SingleFilter.module.scss";
const SingleFilter = ({ text }) => {
  return (
    <>
      <button className={styles.container}>{text}</button>
    </>
  );
};

export default SingleFilter;
