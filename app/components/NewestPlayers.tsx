"use client";

import { LocateFixed, Star, ChevronLeft, ChevronRight,User } from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
 

export default function NewestPlayers() {

  const players = [
    { name: "Ronaldo", img: "/b2.jpg" },
    { name: "Luis Diaz", img: "/b3.jpg" },
    { name: "Milito Rezkou", img: "/r3.png" },
    { name: "Player Four", img: "/r1.png" },
    { name: "Player Five", img: "/r2.png" },
  ];

  return (
    <div className="mt-20 px-10">

      <div className="flex justify-between items-center mb-8">

        <h2 className="text-white text-3xl font-bold italic">
          Newest Players
        </h2>

        <div className="flex gap-3">

          <div className="prevPlayer cursor-pointer w-11 h-11 flex items-center justify-center bg-[#0b1120] border border-[#1e293b] text-white hover:bg-[#111827] transition">
            <ChevronLeft size={22} />
          </div>

          <div className="nextPlayer cursor-pointer w-11 h-11 flex items-center justify-center bg-[#0b1120] border border-[#1e293b] text-white hover:bg-[#111827] transition">
            <ChevronRight size={22} />
          </div>

        </div>

      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{
          nextEl: ".nextPlayer",
          prevEl: ".prevPlayer",
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >

        {players.map((p, i) => (
          <SwiperSlide key={i}>

            <div className="bg-[#0b1120] h-[450px] overflow-hidden">

              <div className="relative w-full h-[300px]">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">

                <div className="flex items-center justify-between">

                  <h3 className="text-white text-2xl font-bold italic">
                    {p.name}
                  </h3>

                  <div className="flex text-[#FDC700]">
                    {[1,2,3,4,5].map((s)=>(
                      <Star key={s} size={18} fill="currentColor"/>
                    ))}
                  </div>

                </div>

                <div className="flex justify-between items-center mt-7 text-sm text-gray-400">

                  <span className="text-[#8D8D8D] text-lg font-bold">
                    Goalkeeper
                  </span>

                  <span className="flex items-center">
                    <LocateFixed size={16} className="text-[#FDC700] mr-2" />
                    Saudi Arabia
                  </span>

                  <span className=" flex items-center text-[#FDC700]">
                    <User size={16} className="text-[#FDC700] mr-2"/>
                    412Y
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