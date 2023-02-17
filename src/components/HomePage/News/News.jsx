import React from "react";
import styles from "./News.module.scss";
import Img from "./img/img.png";
const News = () => {
  return (
    <div className={styles.news__block}>
      <div className={styles.news__container}>
        <h2 className={styles.news__title}>Наши преимущества</h2>
        <div className={styles.news__items}>
          <div className={styles.new__item}>
            <img src={Img} alt="" className={styles.new__img} />
            <p className={styles.new__text}>
              РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ
              УПРАВЛЕНИЯ PCB-SH
            </p>
            <div className={styles.block__hover}>
              <p className={styles.text__hover}>
                Компания "SelimTrade" сообащает вам о расширении вариантов
                дизайна гаражных сексионных ворот стандартной серии RSD01SC
                BIM.C 10 марта 2016 года для заказа стали доступны ворота с
                дизайном панели
              </p>
              <button className={styles.btn__hover}>Узнать больше</button>
            </div>
          </div>
          <div className={styles.new__item}>
            <img src={Img} alt="" className={styles.new__img} />
            <p className={styles.new__text}>
              РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ
              УПРАВЛЕНИЯ PCB-SH
            </p>
            <div className={styles.block__hover}>
              <p className={styles.text__hover}>
                Компания "SelimTrade" сообащает вам о расширении вариантов
                дизайна гаражных сексионных ворот стандартной серии RSD01SC
                BIM.C 10 марта 2016 года для заказа стали доступны ворота с
                дизайном панели
              </p>
              <button className={styles.btn__hover}>Узнать больше</button>
            </div>
          </div>
          <div className={styles.new__item}>
            <img src={Img} alt="" className={styles.new__img} />
            <p className={styles.new__text}>
              РЕАЛИЗОВАНА ВОЗМОЖНОСТЬ ПОДКЛЮЧЕНИЯ СИГНАЛЬНОЙ ЛАМПЫ К БЛОКАМ
              УПРАВЛЕНИЯ PCB-SH
            </p>
            <div className={styles.block__hover}>
              <p className={styles.text__hover}>
                Компания "SelimTrade" сообащает вам о расширении вариантов
                дизайна гаражных сексионных ворот стандартной серии RSD01SC
                BIM.C 10 марта 2016 года для заказа стали доступны ворота с
                дизайном панели
              </p>
              <button className={styles.btn__hover}>Узнать больше</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
