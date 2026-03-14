"use client";

import Image from "next/image";
import { useState } from "react";

export default function PlayerGallery() {

  const images = [
   "/b2.jpg",
    "/download2.jpg",
    "/download3.jpg",
    "/download5.jpg"
  ];

  const [active, setActive] = useState(images[0]);

  return (
    <div>

      <div className=" rounded-xl overflow-hidden">
        <Image
          src={active}
          width={500}
          height={600}
          alt="player"
          className="w-full"
        />
      </div>

      <div className="flex gap-3 justify-end  mt-4">
        {images.map((img, i) => (
          <Image
            key={i}
            src={img}
            width={70}
            height={70}
            alt="thumb"
            onClick={() => setActive(img)}
            className="cursor-pointer rounded-lg"
          />
        ))}
      </div>

    </div>
  );
}