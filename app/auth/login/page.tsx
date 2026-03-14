"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Lock, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">

   
      <Image
        src="/b3.jpg"
        alt="bg"
        fill
        className="object-cover"
      />

    
      <div className="absolute inset-0 bg-black/40"></div>
 
      <div
        className="
        relative w-[500px]
        px-10 py-10
        rounded-2xl
        bg-[#0a1a3a]/40
        backdrop-blur-2xl
        border border-white/10
        shadow-2xl
        my-28
      "
      >

        <h2 className="text-center text-4xl font-bold text-yellow-400 italic mb-8">
          Login
        </h2>

      
        <div className="mb-6">
          <label className="text-gray-200 font-semibold text-sm">Email</label>

          <div className="flex items-center mt-2 bg-white/30 rounded-xl px-4">
            <Mail size={18} className="text-blue-900 mr-3" />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-transparent outline-none text-white"
            />
          </div>
        </div>

     
        <div className="mb-3">
          <label className="text-gray-200 font-semibold text-sm">
            Password
          </label>

          <div className="flex items-center mt-2 bg-white/30 rounded-xl px-4">
            <Lock size={18} className="text-blue-900 mr-3" />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-transparent outline-none text-white"
            />

            <Eye size={18} className="text-blue-900" />
          </div>
        </div>

    
        <div className="flex justify-between items-center text-xs text-gray-200 mb-6 mt-2">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-yellow-400" />
            Remember Me
          </label>

          <span className="cursor-pointer hover:text-yellow-400">
            Forgot Password?
          </span>
        </div>

       
    <button
  className="
  w-full py-3
  bg-[#0b2a6b]
  text-white
  rounded-xl
  border-l-4 border-r-4 border-yellow-400
  font-semibold
  hover:opacity-90
  transition
  cursor-pointer
"
>
  Login
</button>

 
<button
  className="
  mt-4
  w-full py-3
  rounded-xl
  border border-black/40
  text-white
  flex items-center
  justify-center
  gap-3
  hover:bg-white/10
  transition
  cursor-pointer
"
>
  <img
    src="/icons8-google-48.png"
    alt="google"
    className="w-5 h-5"
  />

  Log In With Google
</button>

        <p className="text-center text-gray-300 text-sm mt-5">
          haven't an account?{" "}
          <Link href="/register" className="text-yellow-400">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}