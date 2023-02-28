import React from "react";
import styles from "./SingleService.module.scss";

const SingleService = () => {
  return (
    <>
      <div className={styles.singleService}>
        <img
          className={styles.img}
          src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg?fit=2500%2C1667"
          alt="img"
        />
        <p className={styles.service_text}>Промышленные секционные ворота</p>
      </div>
    </>
  );
};

export default SingleService;
