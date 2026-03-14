"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const cards = [
  { id: 1, img: "/b2.jpg", title: "Blog One", date: "24 Aug 2026" },
  { id: 2, img: "/download5.jpg", title: "Ronaldo Football Clash", date: "25 Aug 2026" },
  { id: 3, img: "/download3.jpg", title: "Cristiano Ronaldo News", date: "26 Aug 2026" },
  { id: 4, img: "/download2.jpg", title: "Ronaldo Latest Match", date: "27 Aug 2026" },
  { id: 5, img: "/b2.jpg", title: "Football World Update", date: "28 Aug 2026" },
  { id: 6, img: "/download5.jpg", title: "Champions League Story", date: "29 Aug 2026" },
];

export default function BlogSlider() {
  const [index, setIndex] = useState(0);
  const router = useRouter();

  const next = () => {
    setIndex((prev) => (prev + 1 > cards.length - 3 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? cards.length - 3 : prev - 1));
  };

  const goToDetails = (id) => {
    router.push(`/blog/${id}`);
  };

  return (
    <section className="bg-gray-900 py-16 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#F0B100]">
        Blogs
      </h2>

      <div className="relative max-w-7xl mx-auto">

        <div className="flex overflow-hidden">
          {cards.slice(index, index + 3).map((card) => (
            <div
              key={card.id}
              className="flex-shrink-0 w-1/3 px-3 cursor-pointer"
              onClick={() => goToDetails(card.id)}
            >
              <div className="relative overflow-hidden shadow-xl h-[400px] rounded-xl group">

                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-6 left-0 w-full text-center text-white px-4">

                  <p className="text-sm text-right text-gray-300 mb-1">
                    {card.date}
                  </p>

                  <h3 className="text-lg font-semibold">
                    {card.title}
                  </h3>

                </div>

              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prev}
          className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-[#F0B100] hover:bg-[#F0B100]/50 text-white w-[45px] h-[45px]"
        >
          {"<"}
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-[#F0B100] hover:bg-[#F0B100]/50 text-white w-[45px] h-[45px]"
        >
          {">"}
        </button>

      </div>
    </section>
  );
}