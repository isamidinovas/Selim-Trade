import React from "react";
import { SwiperSlide } from "swiper/react";

import styles from "./OurWorks.module.scss";
import Img from "../Hero/img/bg.png";
import { useSelector } from "react-redux";

export const WorkItem = ({ item }) => {
  const { projectsPagList } = useSelector((state) => state.projectsPagination);

  const img = `http://161.35.29.179:8090/api/v1/public/image/${item.image}`;

  console.log("imgsss", img);

  return (
    <>
      {projectsPagList.map((img) => (
        <SwiperSlide>
          {({ isActive }) => (
            <img
              className={`${styles.img} ${isActive ? styles.active22 : null}`}
              src={img}
            />
          )}
        </SwiperSlide>
      ))}
    </>
  );
};
