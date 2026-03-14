"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function PlayersSlider() {
  const players = [
    "/p1.png",
    "/p2.jpg",
    "/p3.png",
    "/p2.jpg",
     "/p1.png",
  ];

  return (
    <div className="w-full px-12 pt-35 pb-10">

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 2,
          slideShadows: false,
        }}
        className="w-full"
      >
        {players.map((img, i) => (
          <SwiperSlide key={i}>

            <div className="relative w-[600px] h-[350px] rounded-xl overflow-hidden">

              <Image
                src={img}
                alt="player"
                fill
                className="object-cover"
              />

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}