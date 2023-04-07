import React from "react";
import styles from "./OurWorks.module.scss";
import LeftArrow from "./icons/Left_arrow.svg";
import RightArrow from "./icons/Right_arrow.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getProjects,
  getProjectsPagination,
} from "../../../redux/user/UserThunk";
import { WorkItem } from "./WorkItem";
const OurWorks = () => {
  const { projectsList } = useSelector((state) => state.projects);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const Slides = projectsList.map((item) => {
    const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;
    return (
      <SwiperSlide key={item.id}>
        {({ isActive }) => (
          <img
            className={`${styles.img} ${isActive ? styles.active22 : null}`}
            src={img}
          />
        )}
      </SwiperSlide>
    );
  });

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Наши работы</h3>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        spaceBetween={40}
        slidesPerView={2}
        modules={[EffectCoverflow, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          slideShadows: false,
        }}
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
          clickable: true,
        }}
        className={styles.swiper_container}
        breakpoints={{
          380: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          532: {
            slidesPerView: 3,
            spaceBetween: 50,
          },

          650: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 116,
          },
        }}
      >
        {Slides}

        <div className={styles.slider_controlers}>
          <img className={`next ${styles.nextArrow}`} src={LeftArrow} />
          <img className={`prev ${styles.prevArrow}`} src={RightArrow} />
        </div>
      </Swiper>
    </div>
  );
};

export default OurWorks;

// export default MySwiper;
