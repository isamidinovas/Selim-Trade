import React from "react";
import Img from "./img/img.png";
import { NavLink } from "react-router-dom";

import styles from "./New.module.scss";

const New = () => {
  return (
    <div className={styles.new__item}>
      <img src={Img} alt="" className={styles.new__img} />
      <p className={styles.new__text}>
        РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ УПРАВЛЕНИЯ
        PCB-SH
      </p>
      <div className={styles.block__hover}>
        <p className={styles.text__hover}>
          Компания "SelimTrade" сообащает вам о расширении вариантов дизайна
          гаражных сексионных ворот стандартной серии RSD01SC BIM.C 10 марта
          2016 года для заказа стали доступны ворота с дизайном панели
        </p>
        <NavLink className={styles.btn__hover} to="/new">
          <button>Узнать больше</button>
        </NavLink>
      </div>
    </div>
  );
};

export default New;
