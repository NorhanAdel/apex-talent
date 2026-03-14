"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export default function Reviews() {

  const reviews = [
    {
      name: "Ronald Richards",
      image: "/b2.jpg",
      rating: 5,
    },
    {
      name: "Ronald Richards",
      image: "/download3.jpg",
      rating: 5,
    },
    {
      name: "Ronald Richards",
      image: "/download5.jpg",
      rating: 5,
    },
  ];

  return (
    <div className="mt-14">

      <div className="flex justify-center gap-8">

        {reviews.map((review, i) => (
          <div
            key={i}
            className="
            bg-[#06163a]
            border border-[#102b5c]
            px-8
            py-5
            rounded-xl
            flex
            items-center
            gap-4
            min-w-[260px]
            shadow-[0_0_20px_rgba(0,60,255,0.15)]
            "
          >

            <Image
              src={review.image}
              alt="user"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />

            <div>

              <h4 className="text-white font-semibold text-sm">
                {review.name}
              </h4>

              <div className="flex text-yellow-400 mt-1">

                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor"/>
                ))}

              </div>

            </div>

          </div>
        ))}

      </div>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-6">

        <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-600 rounded-full"></span>
        <span className="w-2 h-2 bg-gray-600 rounded-full"></span>

      </div>

    </div>
  );
}