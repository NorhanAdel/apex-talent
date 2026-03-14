"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer dir="ltr" className="relative  bg-[#09091A] text-white pt-20 pb-10 overflow-hidden">

 
      <motion.div
        className="absolute w-[600px] h-[600px] bg-[#F54900]/10 rounded-full blur-3xl -top-40 right-[-200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ================= TOP GRID ================= */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">

          
          <div>
            <Image src="/logo.png" width={150} height={150} alt="Club Logo" />
            <p className="text-gray-200 leading-relaxed text-sm">
              A sports organization specialized in talent development and creating champions.
              We aim to build a generation capable of competing and achieving accomplishments locally and internationally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-gray-50 text-sm">
              <li className="hover:text-[#F0B100] transition cursor-pointer">Home</li>
              <li className="hover:text-[#F0B100] transition cursor-pointer">Sports</li>
              <li className="hover:text-[#F0B100] transition cursor-pointer">About Us</li>
              <li className="hover:text-[#F0B100] transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Sports List */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Sports</h4>
            <ul className="space-y-3 text-gray-50 text-sm">
              <li>Football</li>
              <li>Basketball</li>
              <li>Volleyball</li>
              <li>Swimming</li>
              <li>Gymnastics</li>
              <li>Tennis</li>
              <li>Athletics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Info</h4>

            <div className="space-y-4 text-50 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#F0B100]" />
                +20 123 456 7890
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#F0B100]" />
                info@sportsclub.com
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#F0B100]" />
                Cairo, Egypt
              </div>
            </div>
          </div>

        </div>

        {/* ================= SOCIAL ================= */}
        <div className="flex justify-center gap-6 mb-10">
          {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="p-3 bg-white/5 rounded-full border border-white/10 cursor-pointer hover:border-[#F54900]/50 transition"
            >
              <Icon size={18} />
            </motion.div>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Sports Club. All rights reserved.
        </div>

      </div>
    </footer>
  );
}