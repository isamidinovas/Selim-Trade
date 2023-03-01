import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleService.module.scss";

const SingleService = () => {
  return (
    <>
      <div className={styles.singleService}>
        <Link to={"/service/id"}>
          <img
            className={styles.img}
            src="https://news.airbnb.com/wp-content/uploads/sites/4/2021/11/Home-Alone-Airbnb-01-Exterior-Credit-Sarah-Crowley.jpg?fit=2500%2C1667"
            alt="img"
          />
          <p className={styles.service_text}>Промышленные секционные ворота</p>
        </Link>
      </div>
    </>
  );
};

export default SingleService;
