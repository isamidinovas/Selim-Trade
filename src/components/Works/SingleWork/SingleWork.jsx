import React from "react";
import styles from "./SingleWork.module.scss";

const SingleWork = ({img}) => {
  return (
    <>
      <section className={styles.container}>
        <img
          className={styles.Haa}
          src={img}
          alt="Фото работы"
        />
       
      </section>
    </>
  );
};

export default SingleWork;
