"use client";

import { Camera, Video, Megaphone, Trophy } from "lucide-react";

export default function ParticipationPrime() {
  return (
    <div className="min-h-screen bg-[#020b1c] flex flex-col items-center justify-center text-white py-38">
      <h1 className="text-yellow-400 text-3xl font-bold mb-20">
        Participation Prime
      </h1>

      <div className="flex gap-10 items-end">

        <PlanCard
          title="Bronze Prime"
          color="from-[#c98b3c] to-[#7a4a13]"
          photos="2 Photos"
          videos="1 Video"
          promo="1 Free Promotion"
          price="50"
        />

        <div className="scale-110">
          <PlanCard
            title="Gold Prime"
            color="from-yellow-400 to-yellow-600"
            gold
            photos="10 Photos"
            videos="5 Video"
            promo="3 Free Promotion"
            price="120"
          />
        </div>

        <PlanCard
          title="Silver Prime"
          color="from-gray-300 to-gray-500"
          photos="5 Photos"
          videos="2 Video"
          promo="2 Free Promotion"
          price="80"
        />

      </div>
    </div>
  );
}

  
function PlanCard({
  title,
  color,
  photos,
  videos,
  promo,
  price,
  gold = false
}: {
  title: string;
  color: string;
  photos: string;
  videos: string;
  promo: string;
  price: string;
  gold?: boolean;
}) {
  return (
    <div className={`relative w-[320px] rounded-xl bg-[#06122c] border border-[#1a2b55] p-6 shadow-xl
      ${gold ? "shadow-yellow-500/30" : ""}`}>

      {/* Ribbon */}
      <div className="absolute -top-5 left-0 flex items-center">
        <div className={`ribbon bg-gradient-to-r ${color} text-black font-bold px-7 py-2 flex items-center gap-2`}>
          <Trophy size={16} className="text-[#FFD400]"/>
          {title}
        </div>
      </div>

      <div className="mt-12 space-y-4 text-xl text-gray-300">

        <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
          <Camera size={16} className="text-[#FFD400]"/>
          {photos}
        </div>

        <div className="flex items-center gap-2 border-b border-gray-700 pb-2">
          <Video size={16} className="text-[#FFD400]"/>
          {videos}
        </div>

        <div className="flex items-center gap-2">
          <Megaphone size={16} className="text-[#FFD400]"/>
          {promo}
        </div>

      </div>

      <div className="flex justify-end mt-6 italic text-[#FFD400] font-bold text-lg">
         {price}
      </div>

      <button className="mt-4 w-full bg-[#021448] border-x-3 border-[#FFD400] py-2 rounded-md hover:bg-[#123a8a] transition">
        Upgrade
      </button>

    </div>
  );
}
