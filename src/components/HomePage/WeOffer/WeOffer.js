import React, { useEffect, useRef, useState } from "react";
import styles from "./WeOffer.module.scss";
import ArrowLeft from "../../../assets/icons/LeftArrow.svg";
import ArrowRight from "../../../assets/icons/RightArrow.svg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import WeOfferItem from "./WeOfferItem/WeOfferItem";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGates } from "../../../redux/user/UserThunk";

const WeOffer = () => {
  const { gatesList, isloading } = useSelector((state) => state.gates);
  const dispatch = useDispatch();
  const [scrollAmount, setScrollAmount] = useState(270);
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollAmount;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += scrollAmount;
  };
  useEffect(() => {
    dispatch(getGates());
  }, []);

  return (
    <div className={styles.background_img_container}>
      <div className={styles.container}>
        <h2 className={styles.page_title}>Мы предлагаем</h2>
        {isloading ? (
          <div className={styles.page3__block}>
            <Skeleton width={410} height={240} />
            <Skeleton width={350} height={240} />
            <Skeleton width={440} height={530} />
            <Skeleton width={410} height={240} />
            <Skeleton width={350} height={240} />
          </div>
        ) : (
          gatesList.length > 0 && (
            <div className={styles.page3__block} ref={scrollRef}>
              {gatesList.map((item) => (
                <WeOfferItem item={item} key={item.id} />
              ))}
            </div>
          )
        )}
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
  );
};

export default WeOffer;
