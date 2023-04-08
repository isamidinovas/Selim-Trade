import React from "react";
import styles from "./Section.module.scss";
const Section = ({ description }) => {
  return (
    <div className={styles.section}>
      <p className={styles.text}>{description}</p>
    </div>
  );
};

export default Section;
