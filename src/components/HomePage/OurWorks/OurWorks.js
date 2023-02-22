import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";
const OurWorks = () => {
  return (
    <Swiper spaceBetween={116} slidesPerView={3}>
      <SwiperSlide>
        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default OurWorks;
