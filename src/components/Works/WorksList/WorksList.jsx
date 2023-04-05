import React from "react";

import SingleWork from "../SingleWork/SingleWork";
import styles from "./WorksList.module.scss";
const WorksList = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.items}>
          <SingleWork />
        </div>
      </section>
    </>
  );
};

export default WorksList;
