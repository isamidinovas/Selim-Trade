import React from "react";
import styles from "./SingleWork.module.scss";

const SingleWork = ({ img }) => {
  console.log("imf", img);
  return (
    <>
      {/* <section className={styles.containerr}> */}
      <img className={styles.Haa} src={img} alt="Фото работы" />
      {/* </section> */}
    </>
  );
};

export default SingleWork;
