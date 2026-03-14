"use client";

import Image from "next/image";
import { Search } from "lucide-react";

const events = [
  { id: 1, img: "/b2.jpg", status: "Soon" },
  { id: 2, img: "/b2.jpg", status: "Soon" },
  { id: 3, img: "/b2.jpg", status: "Soon" },
  { id: 4, img: "/b2.jpg", status: "Ended" },
  { id: 5, img: "/b2.jpg", status: "Ended" },
  { id: 6, img: "/b2.jpg", status: "Soon" },
];

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#020b1c] text-white px-30 py-38">

      <div className="flex items-center gap-4 mb-10">

        <div className="flex items-center bg-[#071632] border border-[#F0B100] rounded-lg px-3 py-2 w-[77%]">
          <Search size={18} className="text-[#F0B100] mr-2" />
          <input
            placeholder="Search"
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <select className="bg-[#071632] border border-[#F0B100] px-4 py-2 rounded-lg text-sm">
          <option>Highest Rated</option>
        </select>

        <select className="bg-[#071632] border border-[#F0B100] px-4 py-2 rounded-lg text-sm">
          <option>Stadium</option>
        </select>

        <select className="bg-[#071632] border border-[#F0B100] px-4 py-2 rounded-lg text-sm">
          <option>Most Popular</option>
        </select>

      </div>

      <div className="grid grid-cols-3 gap-8">

        {events.map((event) => (
          <div
            key={event.id}
            className="relative h-[450px] overflow-hidden border border-[#0f2b70] bg-[#020b1c] shadow-[0_0_30px_rgba(0,60,255,0.15)]"
          >

            <Image
              src={event.img}
              alt=""
              width={600}
              height={400}
              className="w-full h-[320px] object-cover"
            />

            <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-transparent via-[#020b1c70] to-[#020b1c]"></div>

            <div className="absolute bottom-6 left-6 right-6">

              <h3 className="text-xl font-bold italic mb-4">
                Kora Event
              </h3>

              <div className="flex items-center justify-between text-sm text-gray-300">

                <span
                  className={`font-semibold ${
                    event.status === "Soon"
                      ? "text-orange-400"
                      : "text-red-500"
                  }`}
                >
                  {event.status}
                </span>

                <span>⚽ Saudi Arabia</span>

                <span>📅 24 Aug, 2026</span>

              </div>

            </div>

          </div>
        ))}
      </div>

    </div>
  );
}