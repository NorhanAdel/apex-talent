"use client";

import {
  User,
  Mail,
  Phone,
  Calendar,
  MapPin,
  Flag,
  Lock,
  Ruler,
  Weight,
  Trophy,
  Users,
  Camera,
  ChevronRight,
  ChevronLeft,
  ChevronDown
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div dir="ltr" className="min-h-screen py-38 bg-[#020b1c] text-white relative overflow-hidden">

    
      <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')] bg-center bg-cover"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-14">

       
        <h1 className="text-center text-3xl md:text-4xl font-bold text-yellow-400 mb-10">
          Personal Information
        </h1>

      
        <div className="flex items-center justify-center gap-8 mb-12">

          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center">
            <User size={22} />
          </div>
          <div className="w-20 h-[2px] bg-gray-500"></div>

          <div className="w-14 h-14 rounded-full bg-[#0f1c3d] flex items-center justify-center">
            <Trophy size={22} />
          </div>
          <div className="w-20 h-[2px] bg-gray-500"></div>

          <div className="w-14 h-14 rounded-full bg-[#0f1c3d] flex items-center justify-center">
            <Users size={22} />
          </div>
          <div className="w-20 h-[2px] bg-gray-500"></div>

          <div className="w-14 h-14 rounded-full bg-[#0f1c3d] flex items-center justify-center">
            <Camera size={22} />
          </div>

        </div>

  
        <form className="grid md:grid-cols-2 gap-6">

          <Input label="First Name*" icon={<User />} />
          <Input label="Last Name*" icon={<User />} />
          <Input label="Email Address*" icon={<Mail />} />
          <Input label="Phone Number*" icon={<Phone />} />
          <Input label="Date of Birth*" icon={<Calendar />} />
          <Select label="Nationality*" icon={<Flag />} />
          <Select label="Country" icon={<MapPin />} />
          <Select label="City" icon={<MapPin />} />
          <Input label="Height" icon={<Ruler />} />
          <Input label="Weight" icon={<Weight />} />
          <Input label="Password" icon={<Lock />} type="password" />
          <Select label="Role" icon={<User />} />

        </form>

      
        <div className="flex justify-between mt-12">

          <button
            type="button"
            className="flex items-center gap-2 text-gray-500 bg-[#090B6E]/20 border-x border-gray-500 px-8 py-3 rounded-lg cursor-not-allowed transition"
          >
            <ChevronLeft size={20} />
            Previous
          </button>

          <button
            type="button"
            onClick={() => router.push("/profile/football")}
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

// ==================== Input Component ====================
type InputProps = {
  label: string;
  icon: React.ReactNode;
  type?: string;
};

function Input({ label, icon, type = "text" }: InputProps) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-300">{label}</label>
      <div className="flex items-center bg-[#0b1736] rounded-xl px-4 py-3 border border-[#1e2d5a]">
        <span className="text-yellow-400 mr-3">{icon}</span>
        <input
          type={type}
          placeholder={label}
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>
    </div>
  );
}

// ==================== Select Component ====================
type SelectProps = {
  label: string;
  icon: React.ReactNode;
};

function Select({ label, icon }: SelectProps) {
  return (
    <div>
      <label className="block text-sm mb-2 text-gray-300">{label}</label>
      <div className="flex items-center bg-[#0b1736] rounded-xl px-4 py-3 border border-[#1e2d5a]">
        <span className="text-yellow-400 mr-3">{icon}</span>
        <select className="bg-transparent outline-none w-full text-sm">
          <option>Select</option>
        </select>
        <ChevronDown size={18} />
      </div>
    </div>
  );
}
