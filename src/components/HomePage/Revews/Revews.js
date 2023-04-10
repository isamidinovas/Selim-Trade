import React, { useRef, useState } from "react";
import styles from "./Revews.module.scss";
import LeftArrow from "../../../assets/icons/LeftArrow.svg";
import RightArrow from "../../../assets/icons/RightArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getReviews } from "../../../redux/user/UserThunk";
import ReviewItem from "./ReviewItem/ReviewItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Revews = () => {
  const [scrollAmount, setScrollAmount] = useState(347);
  const scrollRef = useRef(null);
  const { reviewsList, isloading } = useSelector((state) => state.reviewsList);
  const dispatch = useDispatch();
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= scrollAmount;
  };
  const scrollRight = () => {
    scrollRef.current.scrollLeft += scrollAmount;
  };
  useEffect(() => {
    dispatch(getReviews());
  }, []);
  return (
    <>
      <div id="reviews" className={styles.wrapper}>
        <h2 className={styles.title}>Отзывы наших клиентов</h2>
        {isloading ? (
          <div className={styles.grid}>
            <Skeleton width={330} height={240} />
            <Skeleton width={330} height={240} />
            <Skeleton width={330} height={240} />
            <Skeleton width={330} height={240} />
          </div>
        ) : reviewsList.length ? (
          <div className={styles.grid} ref={scrollRef}>
            {reviewsList.map((item) => (
              <ReviewItem item={item} key={item.id} />
            ))}
          </div>
        ) : (
          <h2>Пока нету отзывов</h2>
        )}
        <div className={styles.scrollBtns}>
          <button onClick={scrollLeft} className={styles.scrollBtn}>
            <img src={LeftArrow} alt="LeftArrow" />
          </button>
          <button onClick={scrollRight} className={styles.scrollBtn}>
            <img src={RightArrow} alt="RightArrow" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Revews;
