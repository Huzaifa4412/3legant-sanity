"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider = () => {
  return (
    <div className="w-max-[1120px] h-[536px] mx-auto relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Navigation]}
        className="h-full w-full"
      >
        <SwiperSlide className="w-full h-full ">
          <Image
            src={"/images/slider/img1.png"}
            alt={"Slider Image"}
            className="w-full h-full object-cover object-center"
            width={1120}
            height={538}
          />
        </SwiperSlide>
        <SwiperSlide className="w-full h-full ">
          <Image
            src={"/images/slider/img2.png"}
            className="w-full h-full object-cover object-center"
            alt={"Slider Image"}
            width={1120}
            height={538}
          />
        </SwiperSlide>
      </Swiper>

      {/* Custom navigation buttons */}
      <Image
        src={"/images/hero_section/slider_button.svg"}
        className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
        width={52}
        height={52}
        alt="Slider Button"
      />
      <Image
        src={"/images/hero_section/slider_button.svg"}
        className="custom-next absolute top-1/2 right-0 transform rotate-180 -translate-y-1/2 z-10"
        width={52}
        height={52}
        alt="Slider Button"
      />
    </div>
  );
};

export default Slider;
