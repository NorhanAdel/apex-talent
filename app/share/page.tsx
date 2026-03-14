"use client";

import { useRef, useState } from "react";
import { ImagePlus } from "lucide-react";
import Image from "next/image";

export default function ShareAdPage() {

  const fileRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const handleClick = () => {
    fileRef.current.click();
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center px-10">

      <div className="w-full max-w-6xl">

        <h1 className="text-center text-yellow-400 text-3xl font-bold mb-10">
          Share AD
        </h1>

        <div className="grid grid-cols-2 gap-10">

          {/* Upload Box */}
          <div
            onClick={handleClick}
            className="border border-yellow-400 rounded-xl h-[310px] flex items-center justify-center cursor-pointer relative overflow-hidden"
          >

            {preview ? (
              <Image
                src={preview}
                alt="preview"
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center text-gray-400">
                <ImagePlus size={40} />
                <p className="mt-4 text-sm">Click To Add Photo Of AD</p>
              </div>
            )}

            {/* hidden input */}
            <input
              type="file"
              ref={fileRef}
              onChange={handleImage}
              accept="image/*"
              className="hidden"
            />
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-6">

            <div>
              <label className="text-gray-300 mb-2 block font-semibold">
                Title
              </label>
              <input
                type="text"
                placeholder="Title Of AD"
                className="w-full bg-[#0a0f2c] border border-[#1e2a5a] rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400"
              />
            </div>

            <div>
              <label className="text-gray-300 mb-2 block font-semibold">
                Description
              </label>
              <textarea
                rows="6"
                placeholder="Description of player"
                className="w-full bg-[#0a0f2c] border border-[#1e2a5a] rounded-lg px-4 py-3 text-white outline-none focus:border-yellow-400 resize-none"
              />
            </div>

          </div>
        </div>

        {/* Button */}
        <button className="mt-12 w-full h-[55px] bg-[#081f4d] border-x border-yellow-400 flex items-center justify-center gap-3 text-white font-semibold text-lg hover:bg-[#0b2b6b] transition">
          <span>Share AD</span>
          <span className="w-6 h-6 flex items-center justify-center border border-yellow-400 rounded-full text-yellow-400 text-xs">
            AD
          </span>
        </button>

      </div>
    </div>
  );
}