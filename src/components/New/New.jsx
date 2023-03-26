import React from "react";
import Img from "./img/img.png";
import { NavLink } from "react-router-dom";

import styles from "./New.module.scss";

const New = ({ item, id }) => {
  return (
    <div className={styles.new__item}>
      <img src={Img} alt={item.title} className={styles.new__img} />
      <p className={styles.new__text}>{item.title}</p>
      <div className={styles.block__hover}>
        <p className={styles.text__hover}>{item.text}</p>
        <NavLink className={styles.btn__hover} to={`/news/${id}`}>
          <button>Узнать больше</button>
        </NavLink>
      </div>
    </div>
  );
};

export default New;
