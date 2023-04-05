import React from "react";
import Img from "./img/img.png";
import { NavLink } from "react-router-dom";

import styles from "./New.module.scss";

const New = ({ item, id }) => {
  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.coverImage}`;
  const maxLength = 270;
  const shortenedText =
    item.text.slice(0, maxLength) + (item.text.length > maxLength ? "..." : "");
  return (
    <div className={styles.new__item}>
      <img src={img} alt={item.title} className={styles.new__img} />
      <p className={styles.new__text}>{item.title}</p>
      <div className={styles.block__hover}>
        <p className={styles.text__hover}>{shortenedText}</p>
        <NavLink className={styles.btn__hover} to={`/news/${id}`}>
          <button>Узнать больше</button>
        </NavLink>
      </div>
    </div>
  );
};

export default New;
