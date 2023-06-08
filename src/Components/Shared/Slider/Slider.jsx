import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import slider1 from "../../../assets/banner/banner1.jpg";
import slider2 from "../../../assets/banner/banner2.jpg";
import slider3 from "../../../assets/banner/banner3.jpg";
import slider4 from "../../../assets/banner/banner4.jpg";

const Slider = () => {
  return (
    <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-3/4 h-[650px] mb-10"
      >
        <SwiperSlide>
          <img src={slider1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} />
        </SwiperSlide>
        
      </Swiper>
  );
};

export default Slider;
