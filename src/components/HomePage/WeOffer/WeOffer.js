import React, { useEffect, useRef, useState } from "react";
import styles from "./WeOffer.module.scss";
import ArrowLeft from "../../../assets/icons/LeftArrow.svg";
import ArrowRight from "../../../assets/icons/RightArrow.svg";
import NavigateBtn from "../NavigateBtn/NavigateBtn";
import WeOfferItem from "./WeOfferItem/WeOfferItem";
import { NavLink } from "react-router-dom";

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
          {/* {BOOKS.length > 0 ? ( */}
          <div className={styles.page3__block} ref={scrollRef}>
            {/* {BOOKS.map((item) => ( */}
            <WeOfferItem />
            {/* ))} */}
          </div>
          {/* ) : ( */}
          {/* <h2>ss</h2> */}
          {/* )} */}
          <div className={styles.btns}>
            <button onClick={scrollLeft} className={styles.scrollBtn}>
              <img src={ArrowLeft} alt="LeftArrow" />
            </button>
            <NavLink className={styles.btn__hover} to="/service">
              <button className={styles.show_all_btn}>Смотреть все</button>
            </NavLink>
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
