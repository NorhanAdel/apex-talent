"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tv } from "lucide-react";

export default function Hero() {
  return (
    <section dir="ltr" className="min-h-screen bg-[#000] flex items-center justify-center px-6 py-30">

      <div className="relative w-full max-w-7xl bg-[#0b0b0b] rounded-3xl overflow-hidden shadow-2xl border border-white/10">

        <div className="absolute inset-0 opacity-30">
          <div className="absolute w-[600px] h-[600px] bg-[#FF6900] blur-[200px] -top-40 -left-40 rounded-full"></div>
          <div className="absolute w-[500px] h-[500px] bg-[#F0B100] blur-[200px] bottom-0 right-0 rounded-full"></div>
        </div>

        <div className="relative grid md:grid-cols-2 items-center px-12 py-5 gap-10">

          <div className="space-y-4">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold text-white leading-tight"
            >
              CR Super
              <span className="text-[#F0B100]">7</span> <br /> Bourse
            </motion.h1>

            <p className="text-white/70 max-w-lg">
              Super7 is your platform to shine—helping you develop your talent,
              share it with the world, and reach audiences everywhere
            </p>

            <div className="flex items-center gap-6">

              <button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:scale-105 transition">
                Discover More
              </button>

              <a
                href="#"
                className="flex items-center gap-2 text-[#F0B100] font-semibold hover:gap-3 transition"
              >
                <Tv size={20} />
                Watch TV Channel
              </a>

            </div>

          </div>

          <div className="relative flex justify-center">

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative w-[420px] h-[420px]"
            >
              <Image
                src="/h.png"
                alt="player"
                fill
                className="object-contain"
              />
            </motion.div>

          </div>
        </div>

        <div className="relative grid md:grid-cols-3 gap-6 px-12 pb-8">

          {[
            "oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
            "o8nEcUdwIBXoQQDhBbR1EqTBxkeimgoqgiAIek.mp4",
            "owI1PoEBuCimkB1YXZcEIlArYlC8Qh9iA1IiV.mp4"
          ].map((video, i) => {

            const videoRef = useRef<HTMLVideoElement | null>(null);

            return (
              <div
                key={i}
                className="relative h-[200px] overflow-hidden group cursor-pointer"
                onMouseEnter={() => videoRef.current?.play()}
                onMouseLeave={() => {
                  videoRef.current?.pause();
                  if (videoRef.current) {
                    videoRef.current.currentTime = 0;
                  }
                }}
              >

                <video
                  ref={videoRef}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  preload="auto"
                >
                  <source src={`/${video}`} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center text-black text-lg">
                    ▶
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                  Sports Highlights
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
