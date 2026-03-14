"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dribbble,
  Waves,
  Medal,
  Target,
  Activity,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

const sports = [
  { name: "Football", icon: Dribbble },
  { name: "Basketball", icon: Dribbble },
  { name: "Volleyball", icon: Dribbble },
  { name: "Swimming", icon: Waves },
  { name: "Gymnastics", icon: Medal },
  { name: "Tennis", icon: Target },
  { name: "Athletics", icon: Activity },
];

export default function SportsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 4;

  const next = () => {
    if (startIndex + visibleCards < sports.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const visibleSports = sports.slice(startIndex, startIndex + visibleCards);

  return (
    <section className="bg-[#0f0f0f] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-[#F0B100]">
          Target Sports
        </h2>

        <div className="flex gap-8 items-center">

          {/* Sports Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {visibleSports.map((sport, index) => {
              const Icon = sport.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#1a1a1a] hover:bg-[#222]
                    p-8 rounded-2xl text-center
                    border border-white/5
                    shadow-lg transition-all duration-300
                    group hover:-translate-y-2"
                >
                  <div className="w-20 h-20 mx-auto mb-6 
                    flex items-center justify-center 
                    rounded-full 
                    bg-orange-400/10 
                    group-hover:bg-orange-400/20 
                    transition"
                  >
                    <Icon size={36} className="text-[#F0B100]" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {sport.name}
                  </h3>

                  <button className="mt-5 px-5 py-2 
                    bg-orange-400/10 
                    hover:bg-[#F0B100]
                    hover:text-black 
                    rounded-full text-sm 
                    transition duration-300"
                  >
                    Details
                  </button>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col gap-4">
            <button
              onClick={prev}
              disabled={startIndex === 0}
              className="w-14 h-14 rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                hover:bg-[#F0B100] hover:text-black
                disabled:opacity-30
                transition duration-300"
            >
              <ChevronUp size={24} />
            </button>

            <button
              onClick={next}
              disabled={startIndex + visibleCards >= sports.length}
              className="w-14 h-14 rounded-xl
                bg-white/5 backdrop-blur-md
                border border-white/10
                flex items-center justify-center
                hover:bg-[#F0B100] hover:text-black
                disabled:opacity-30
                transition duration-300"
            >
              <ChevronDown size={24} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}