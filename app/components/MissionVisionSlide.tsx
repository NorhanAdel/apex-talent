"use client";

import { motion } from "framer-motion";

export default function MissionVisionSlide() {
  return (
    <div className="bg-[#000] min-h-screen flex flex-col justify-center font-sans px-5 py-20">
      
   
      <div className="mb-16 max-w-6xl  mx-auto">
        <h1 className="text-2xl md:text-6xl font-bold leading-tight text-[#F0B100]">
          Our Mission & Vision
        </h1>
        
      </div>

 
      <div className="w-[70%] mx-auto flex flex-col gap-20">

       
        <div className="flex justify-end relative">
          <div className="bg-[#160906] w-[80%] md:w-3/4 py-12 pl-28 pr-10 rounded-3xl relative overflow-visible shadow-lg">
      
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-48 text-left h-48 rounded-full border-8 border-[#F0B100] overflow-hidden shadow-lg grayscale">
              <img 
                src="/api/placeholder/400/400" 
                alt="Mission" 
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold text-[#fff] mb-3 text-left">Mission</h2>
            <p className="text-gray-50 leading-relaxed max-w-md text-left text-sm">
                        To be a leading sports organization at the local and regional level, 
            providing advanced training programs, discovering and nurturing talents, 
            and building a generation capable of competing and achieving remarkable accomplishments.
            </p>
          </div>
        </div>


        <div className="flex justify-start relative">
          <div className="bg-[#F0B100] w-full md:w-3/4 py-12 pr-28 pl-10 rounded-3xl relative overflow-visible shadow-lg text-right">
            
            <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-8 border-white overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/400/400" 
                alt="Vision" 
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
              />
            </div>

            <h2 className="text-3xl font-bold text-[#fff] text-left mb-3">Vision</h2>
            <p className="text-gray-50 leading-relaxed text-left max-w-md text-sm">
            To provide a professional training environment based on modern scientific principles, 
            promoting sports values such as discipline and teamwork, 
            in order to achieve sports and community excellence..
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}