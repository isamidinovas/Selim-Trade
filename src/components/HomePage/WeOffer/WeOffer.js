import React, { useEffect, useRef, useState } from "react";
import styles from "./WeOffer.module.scss";
import ArrowLeft from "../../../assets/icons/LeftArrow.svg";
import ArrowRight from "../../../assets/icons/RightArrow.svg";
import NavigateBtn from "../NavigateBtn/NavigateBtn";
import WeOfferItem from "./WeOfferItem/WeOfferItem";
import { useDispatch, useSelector } from "react-redux";

const WeOffer = () => {
  const [scrollAmount, setScrollAmount] = useState(270);
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollAmount;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += scrollAmount;
  };

  return (
    <>
      <div className={styles.background_img_container}>
        <div className={styles.container}>
          <h2 className={styles.page_title}>Мы предлагаем</h2>
          <div className={styles.page3__block} ref={scrollRef}>
            {/* <WeOfferItem gates={gates} /> */}
            {/* <WeOfferItem />
            <WeOfferItem />  */}
            <div className={styles.block__item}>
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
                alt="avatar"
                className="im"
              />
              <span className={styles.item__text}>Секционные</span>
            </div>
            <div className={styles.block__item}>
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
                alt=""
                className="im"
              />
              <span className={styles.item__text}>Автоматика</span>
            </div>
            {/* <div className={`${styles.block__item}  ${styles.verticle}`}>
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
                alt=""
                className="im"
              />
              <span className={styles.item__text}>Роль ворота</span>
            </div> */}
            {/* <div className={styles.block__item}>
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
                alt="avatar"
                className="im"
              />
              <span className={styles.item__text}>Распашные</span>
            </div>
            <div className={styles.block__item}>
              <img
                src="https://www.energy.gov/sites/default/files/styles/full_article_width/public/door_5481543.jpg?itok=l_TeNrgh"
                alt=""
                className="im"
              />
              <span className={styles.item__text}>Складные</span>
            </div> */}
          </div>
          <div className={styles.btns}>
            <button onClick={scrollLeft} className={styles.scrollBtn}>
              <img src={ArrowLeft} alt="LeftArrow" />
            </button>
            <button className={styles.show_all_btn}>Смотреть все</button>
            <button onClick={scrollRight} className={styles.scrollBtn}>
              <img src={ArrowRight} alt="RightArrow" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeOffer;
