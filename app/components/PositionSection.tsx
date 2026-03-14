"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function PositionSlider() {
  const positions = [
    { name: "Attack", img: "/p1.png" },
    { name: "Midfield", img: "/p2.jpg" },
    { name: "Defence", img: "/p3.png" },
    { name: "Goalkeeper", img: "/goal.jpg" },
  ];

  return (
    <section className="mt-20 px-12">

      <h2 className="text-center text-white text-3xl font-bold italic mb-8">
        Position
      </h2>

      <Swiper
        spaceBetween={25}
        slidesPerView={2.3}
        centeredSlides={false}
        className="w-full"
      >
        {positions.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-[120px] rounded-xl overflow-hidden cursor-pointer bg-[#020617]">

              <div className="absolute left-0 top-0 h-full w-[60%]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-l from-[#020617] via-[#020617]/90 to-transparent" />

              <div className="absolute inset-0 flex items-center justify-end pr-6">
                <h3 className="text-white text-2xl font-semibold italic">
                  {p.name}
                </h3>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}