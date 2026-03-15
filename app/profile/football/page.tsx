"use client";

import {
  User,
  Activity,
  Users,
  Trophy,
  Image as ImageIcon,
  ChevronRight,
  ChevronLeft,
  ChevronDown
} from "lucide-react";

import { useRouter } from "next/navigation";

export default function FootballInformation() {

  const router = useRouter();

  return (
    <div className="min-h-screen py-38 bg-[#020617] text-white flex items-center justify-center relative">

      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-center bg-cover"></div>

      <div className="relative w-full max-w-6xl px-6 py-14">

        <h1 className="text-center text-3xl font-bold text-yellow-400 mb-10">
          Football Information
        </h1>

  
        <div className="flex items-center justify-center gap-6 mb-12">

          <Step icon={<User />} />
          <Line />

          <Step active icon={<Trophy />} />
          <Line />

          <Step icon={<Users />} />
          <Line />

          <Step icon={<ImageIcon />} />

        </div>

       
        <form className="grid md:grid-cols-2 gap-6">

          <Select label="Position" />
          <Select label="Preferred Foot" />

          <Select label="Jersey Number" />
          <Input label="Playing Style" />

          <Input label="Strengths" />
          <Input label="Market Value" />

          <div className="md:col-span-2">
            <label className="text-sm text-gray-300 block mb-2">
              Description
            </label>

            <textarea
              placeholder="Description of player"
              className="w-full h-36 bg-[#0b1736] border border-[#1e2d5a] rounded-xl p-4 outline-none"
            />
          </div>

        </form>
 
        <div className="flex justify-between mt-12">

          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg hover:bg-[#0b2b6b] transition"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            onClick={() => router.push("/profile/clubcareer")}
            className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg hover:bg-[#0b2b6b] transition"
          >
            Next
            <ChevronRight size={20} />
          </button>

        </div>

      </div>
    </div>
  );
}


function Step({
  icon,
  active = false
}: {
  icon: React.ReactNode
  active?: boolean
}) {
  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center 
      ${active ? "bg-yellow-500 text-black" : "bg-[#0f1c3d]"}`}
    >
      {icon}
    </div>
  );
}

function Line() {
  return <div className="w-16 h-[2px] bg-gray-500"></div>;
}

function Input({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm text-gray-300 block mb-2">{label}</label>

      <input
        placeholder={label}
        className="w-full bg-[#0b1736] border border-[#1e2d5a] rounded-xl px-4 py-3 outline-none"
      />
    </div>
  );
}

function Select({ label }: { label: string }) {
  return (
    <div>
      <label className="text-sm text-gray-300 block mb-2">{label}</label>

      <div className="flex items-center bg-[#0b1736] border border-[#1e2d5a] rounded-xl px-4 py-3">

        <select className="bg-transparent w-full outline-none">
          <option>{label}</option>
        </select>

        <ChevronDown size={18} />
      </div>
    </div>
  );
}
