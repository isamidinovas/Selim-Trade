import React from "react";
import { Link } from "react-router-dom";
import styles from "./SingleService.module.scss";

const SingleService = ({ item, id }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
  return (
    <>
      <div className={styles.singleService}>
        <Link to={`/service/${id}`}>
          <img className={styles.img} src={img} alt="img" />
          <p className={styles.service_text}>{item.name}</p>
        </Link>
      </div>
    </>
  );
};

export default SingleService;
