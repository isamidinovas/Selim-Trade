import React from "react";
import styles from "./SingleWork.module.scss";

const SingleWork = ({ item }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
  return (
    <>
      <img className={styles.Haa} src={img} alt="Фото работы" />
    </>
  );
};

export default SingleWork;
