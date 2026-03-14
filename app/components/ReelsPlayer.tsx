"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function ReelsPlayer() {
  const videos = [
    "/by.mp4",
    "/o8nEcUdwIBXoQQDhBbR1EqTBxkeimgoqgiAIek.mp4",
    "/oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
    "/oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
     "/by.mp4",
    "/o8nEcUdwIBXoQQDhBbR1EqTBxkeimgoqgiAIek.mp4",
    "/oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
  ];

  const [currentVideo, setCurrentVideo] = useState(videos[0]);
  const [likes, setLikes] = useState(6);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="w-full max-w-[900px] mx-auto mt-20 text-white">

      <h2 className="text-yellow-400 text-4xl mb-15 text-center font-bold mb-4">Reels</h2>

      <div className="relative rounded-xl overflow-hidden border border-[#1c2c55]">

        <video
          key={currentVideo}
          src={currentVideo}
          controls
          className="w-full h-[420px] object-cover"
        />

        <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/60 px-3 py-1 rounded-full">
          <Heart
            className={`cursor-pointer ${liked ? "text-red-500 fill-red-500" : "text-white"}`}
            size={18}
            onClick={handleLike}
          />
          <span className="text-sm">{likes}</span>
        </div>
      </div>

      <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
        {videos.map((video, i) => (
          <video
            key={i}
            src={video}
            onClick={() => setCurrentVideo(video)}
            className="min-w-[150px] h-[90px] object-cover rounded-lg cursor-pointer border border-[#1c2c55]"
          />
        ))}
      </div>

      <button className="w-full mt-6 py-3 bg-[#0a1a3a] hover:bg-[#11265e] rounded-lg font-semibold">
        Send Request
      </button>
    </div>
  );
}