"use client";

import { motion } from "framer-motion";
import { Eye, Target, Users, Trophy } from "lucide-react";

export default function About() {
  return (
    <section dir="ltr" className="relative  bg-[#0c0c0c] py-28 text-white overflow-hidden">

      {/* Animated Background Circle */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#F54900]/10 rounded-full blur-3xl top-[-200px] right-[-200px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* ================= ABOUT ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">

          {/* Left Text */}
          <div>
            <span className="text-xl tracking-widest text-[#F0B100] uppercase">
              About
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Building the Future of Sports <br /> Professionally with a Clear Vision
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              We are a specialized sports organization dedicated to developing talents across various sports.
              We follow a modern scientific approach aimed at creating champions capable of competing
              locally and internationally while achieving sustainable accomplishments.
            </p>

            <button className="px-7 py-3 bg-[#F0B100] hover:bg-[#9F0712] transition rounded-full font-semibold">
              Learn More
            </button>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-6">

            {/* Players Registered */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-[#151515] p-8 rounded-2xl border border-white/5 text-center"
            >
              <Users size={32} className="mx-auto mb-4 text-[#F0B100]" />

              <motion.h3
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold"
              >
                500+
              </motion.h3>

              <p className="text-gray-400 text-sm mt-2">Players Registered</p>
            </motion.div>

            {/* Championships Achieved */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="bg-[#151515] p-8 rounded-2xl border border-white/5 text-center"
            >
              <Trophy size={32} className="mx-auto mb-4 text-[#F0B100]" />

              <motion.h3
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl font-bold"
              >
                120+
              </motion.h3>

              <p className="text-gray-400 text-sm mt-2">Championships Achieved</p>
            </motion.div>

            {/* Years of Experience */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="bg-[#151515] p-8 rounded-2xl border border-white/5 text-center col-span-2"
            >
              <h3 className="text-2xl font-bold text-[#F0B100] mb-2">
                10 Years Experience
              </h3>
              <p className="text-gray-400 text-sm">
                In talent development and creating champions
              </p>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}