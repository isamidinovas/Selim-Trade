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
const OurWorks = () => {
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
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://media.npr.org/assets/img/2022/08/21/moon1_sq-3e2ed2ced72ec3254ca022691e4d7ed0ac9f3a14-s1100-c50.jpg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://mymodernmet.com/wp/wp-content/uploads/2021/12/kristina-makeeva-eoy-photo-1.jpeg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg"
            />
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src="https://media.npr.org/assets/img/2022/08/21/moon1_sq-3e2ed2ced72ec3254ca022691e4d7ed0ac9f3a14-s1100-c50.jpg"
            />
          )}
        </SwiperSlide>

        <div className={styles.slider_controlers}>
          <img className={`next ${styles.nextArrow}`} src={LeftArrow} />
          <img className={`prev ${styles.prevArrow}`} src={RightArrow} />
        </div>
      </Swiper>
    </div>
  );
};

export default OurWorks;
