"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function ComingSoonSection() {
  return (
    <section className="relative h-[85vh] flex items-center text-white overflow-hidden">

 
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/photo_2026-03-04_00-01-19.jpg')" }}
      />

   
      <div className="absolute inset-0 bg-black/80" />

    
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-full bg-gradient-to-b from-[#F0B100]/40 via-transparent to-transparent blur-3xl"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

 
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">

         
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="border-l border-white/30 pl-8"
        >
          <p className="text-gray-300 mb-6 max-w-md">
            Subscribe and get updates about our official launch.
          </p>

          
          <div className="flex w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-3 bg-transparent border border-white/40 focus:outline-none"
            />
            <button className="bg-[#F0B100] hover:bg-[#FF6900] transition px-6">
              SUBSCRIBE
            </button>
          </div>

         
          <div className="flex gap-4 mt-6">
            <a href="#" className="border border-white/40 p-2 hover:bg-[#F0B100] hover:text-black transition">
              <Facebook size={18} />
            </a>
            <a href="#" className="border border-white/40 p-2 hover:bg-[#F0B100] hover:text-black transition">
              <Twitter size={18} />
            </a>
            <a href="#" className="border border-white/40 p-2 hover:bg-[#F0B100] hover:text-black transition">
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>
   <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-wide text-[]">
            WE ARE <br />
            COMING <br />
            SOON!
          </h1>
        </motion.div>

      </div>
    </section>
  );
}