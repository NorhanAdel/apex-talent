"use client";

import Image from "next/image";

export default function TransfersSection() {

  const transfers = [
    {
      player: "Ronaldo",
      img: "/b3.jpg",
      from: "Manchester United",
      fromLogo: "/logo1.png",
      to: "Al-Nassr",
      toLogo: "/logo3.png",
      date: "24-Aug-2026",
    },
    {
      player: "Luis Diaz",
      img: "/b2.jpg",
      from: "Liverpool FC",
      fromLogo: "/logo6.png",
      to: "Bayern Munich",
      toLogo: "/logo1.png",
      date: "24-Aug-2026",
    },
    {
      player: "Milos Kerkez",
      img: "/b2.jpg",
      from: "AFC Bournemouth",
      fromLogo: "/logo1.png",
      to: "Liverpool FC",
      toLogo: "/logo3.png",
      date: "24-Aug-2026",
    },
  ];

  const logos = [
    "/logo1.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
     
    "/logo6.png",
  ];

  return (
    <section className="mt-24 px-12 pb-20 text-white">

       
      <h2 className="text-center text-3xl font-bold italic mb-10">
        Transfers
      </h2>

       
      <div className="space-y-4 max-w-5xl mx-auto">

        {transfers.map((t, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-[#0b1a3a] px-6 py-4 rounded-lg border border-[#132a55]"
          >

          
            <div className="flex items-center gap-4 w-[220px]">

              <Image
                src={t.img}
                alt={t.player}
                width={45}
                height={45}
                className="rounded-full object-cover"
              />

              <span className="font-semibold italic text-sm">
                {t.player}
              </span>

            </div>

           
            <div className="flex items-center gap-2 text-[#facc15] font-semibold">

              <span>{t.from}</span>

              <Image
                src={t.fromLogo}
                alt="club"
                width={22}
                height={22}
              />

            </div>

             
            <span className="text-gray-400 font-bold text-lg">
              &gt;&gt;&gt;
            </span>

            {/* To Club */}
            <div className="flex items-center gap-2 text-[#facc15] font-semibold">

              <Image
                src={t.toLogo}
                alt="club"
                width={22}
                height={22}
              />

              <span>{t.to}</span>

            </div>

            {/* Date */}
            <span className="text-gray-400 text-xs">
              {t.date}
            </span>

          </div>
        ))}

      </div>

      {/* Logos */}
      <div className="flex justify-center items-center gap-8 mt-12 flex-wrap">

        {logos.map((logo, i) => (
          <div key={i} className="relative w-[45px] h-[45px]">
            <Image
              src={logo}
              alt="club logo"
              fill
              className="object-contain"
            />
          </div>
        ))}

      </div>

    </section>
  );
}