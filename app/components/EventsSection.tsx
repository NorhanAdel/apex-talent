"use client";

import { LocateFixed, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

export default function EventsSection() {

  const events = [
    { img: "/r1.png", title: "Kora Event" },
    { img: "/r2.png", title: "Kora Event" },
    { img: "/r3.png", title: "Kora Event" },
    { img: "/r1.png", title: "Kora Event" },
    { img: "/r2.png", title: "Kora Event" },
  ];

  return (
    <div className="mt-28 px-10">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-white text-3xl font-bold italic">
          Events
        </h2>

        <div className="flex gap-3">

          <div className="prevEvent cursor-pointer w-11 h-11 flex items-center justify-center bg-[#0b1120] border border-[#1e293b] text-white hover:bg-[#111827] transition">
            <ChevronLeft size={22} />
          </div>

          <div className="nextEvent cursor-pointer w-11 h-11 flex items-center justify-center bg-[#0b1120] border border-[#1e293b] text-white hover:bg-[#111827] transition">
            <ChevronRight size={22} />
          </div>

        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".nextEvent",
          prevEl: ".prevEvent",
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        {events.map((e, i) => (
          <SwiperSlide key={i}>

            <div className="bg-[#0b1120] h-[400px] overflow-hidden">

              <div className="relative h-[280px]">
                <Image
                  src={e.img}
                  alt="event"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">

                <h3 className="text-white text-2xl font-bold italic mb-6">
                  {e.title}
                </h3>

                <div className="flex justify-between items-center text-sm text-gray-400">

                  <span className="text-[#FDC700] text-lg font-bold">
                    Soon
                  </span>

                  <span className="flex items-center">
                    <LocateFixed size={16} className="text-[#FDC700] mr-2" />
                    Saudi Arabia
                  </span>

                  <span className="text-[#FDC700]">
                    4,Aug,2026
                  </span>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}