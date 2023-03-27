import React from "react";
import { SwiperSlide } from "swiper/react";

import styles from "./OurWorks.module.scss";

export const WorkItem = ({ item }) => {
  const img = `http://198.199.91.23/${item.coverImage}`;
  console.log("item", item);

  return (
    <SwiperSlide>
      {({ isActive }) => (
        <img
          className={`${styles.img} ${isActive ? styles.active22 : null}`}
          src={img}
          //   src="https://media.wired.com/photos/5fb70f2ce7b75db783b7012c/master/pass/Gear-Photos-597589287.jpg"
        />
      )}
    </SwiperSlide>
  );
};
