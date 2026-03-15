"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  User,
  Trophy,
  DollarSign,
  ImageIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ClubCareer() {
  const router = useRouter();
  const [step, setStep] = useState(3);

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center px-10 text-white">

      <h1 className="text-yellow-400 text-3xl font-bold mb-10">
        Club Career
      </h1>

  
      <div className="flex items-center justify-center gap-6 mb-12">

        <Step icon={<User />} />
        <Line />

        <Step icon={<Trophy />} />
        <Line />

        <Step active={step >= 3} icon={<DollarSign />} />
        <Line />

        <Step icon={<ImageIcon />} />

      </div>

   
      <div className="grid grid-cols-2 gap-6 w-full max-w-4xl mb-12">

        <div className="flex flex-col">
          <label className="text-gray-300 mb-2 font-semibold">
            Current Club
          </label>
          <select className="bg-[#0a0f2c] border border-[#1e2a5a] rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400">
            <option>Al Nassr FC</option>
            <option>Barcelona</option>
            <option>Real Madrid</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-gray-300 mb-2 font-semibold">
            Professional Debut
          </label>
          <select className="bg-[#0a0f2c] border border-[#1e2a5a] rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400">
            <option>2020</option>
            <option>2018</option>
            <option>2015</option>
          </select>
        </div>

        <div className="col-span-2 flex flex-col">
          <label className="text-gray-300 mb-2 font-semibold">
            Previous Clubs
          </label>
          <select className="bg-[#0a0f2c] border border-[#1e2a5a] rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400">
            <option>
              Sporting CP, Manchester United, Real Madrid, Juventus
            </option>
          </select>
        </div>

      </div>

      
      <div className="flex justify-between w-full max-w-4xl">

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg hover:bg-[#0b2b6b] transition"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <button
          onClick={() => router.push("/football")}
          className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg hover:bg-[#0b2b6b] transition"
        >
          Next
          <ChevronRight size={20} />
        </button>

      </div>

    </div>
  );
}

   
function Step({
  icon,
  active = false
}: {
  icon: any;
  active?: boolean;
}) {
  return (
    <div
      className={`w-12 h-12 rounded-full flex items-center justify-center
      ${active ? "bg-yellow-500 text-black" : "bg-[#0f1c3d]"}`}
    >
      {icon}
    </div>
  );
}

function Line() {
  return (
    <div className="w-16 h-[2px] bg-gray-600"></div>
  );
}
