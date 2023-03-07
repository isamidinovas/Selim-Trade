import React from "react";
import New from "../New/New";
import Img from "./img/image.png";
import TableImg from "./img/info.png";
import styles from "./NewInfos.module.scss";
const NewInfos = () => {
  return (
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.content__top}>
            <img src={Img} alt="img" className={styles.img} />
            <div className={styles.content__info}>
              <h2 className={styles.title}>
                Расширение дизайна ворот стандартной серии RSD01SC BIW
              </h2>
              <p className={styles.text}>
                Компания «SelimTrade» сообщает вам о расширении вариантов
                дизайна гаражных секционных ворот стандартной серии RSD01SC BIW.
                С 10 марта 2016 года для заказа стали доступны ворота с дизайном
                панели «доска» в трёх цветовых решениях (RAL 9003, RAL
                8014 и «золотой дуб»).
              </p>
            </div>
          </div>
          <div className={styles.content__bottom}>
            <img src={TableImg} alt="img" />
          </div>
        </div>
        <h2 className={styles.news__title}>Похожие новости</h2>
        <div className={styles.news}>
          <New />
          <New />
          <New />
        </div>
      </div>
    </div>
  );
};

export default NewInfos;
