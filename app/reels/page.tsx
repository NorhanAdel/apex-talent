"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Send,
  MoreHorizontal,
  Camera,
} from "lucide-react";

interface Reel {
  id: number;
  video: string;
  user: string;
  profile: string;
  description: string;
  likes: number;
}

const reelsData: Reel[] = [
  {
    id: 1,
    video: "/oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
    user: "Luis Díaz",
    profile: "/b3.jpg",
    description: "Lorem ipsum dolor sit amet...",
    likes: 234,
  },
  {
    id: 2,
    video: "/oEYSADDgSIpGFIWVUVfBRjYfyq7IDAEjAEEA9Q.mp4",
    user: "Luis Díaz",
    profile: "/b3.jpg",
    description: "Lorem ipsum dolor sit amet...",
    likes: 120,
  },
];

export default function ReelsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [comments, setComments] = useState<Record<number, string[]>>({});
  const [openComments, setOpenComments] = useState<number | null>(null);
  const [commentText, setCommentText] = useState("");

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Scroll handler مع النوع الصح
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollTop = target.scrollTop;
    const height = target.clientHeight;
    const newIndex = Math.round(scrollTop / height);
    setCurrentIndex(newIndex);
  };

  const toggleLike = (id: number) => {
    const isLiked = liked[id];
    setLiked({ ...liked, [id]: !isLiked });

    if (!isLiked) reelsData[id - 1].likes += 1;
    else reelsData[id - 1].likes -= 1;
  };

  const addComment = (id: number) => {
    if (!commentText) return;

    const updated = comments[id] ? [commentText, ...comments[id]] : [commentText];
    setComments({ ...comments, [id]: updated });
    setCommentText("");
  };

  return (
    <div
      className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black"
      onScroll={handleScroll}
    >
      {reelsData.map((reel, index) => (
        <div
          key={reel.id}
          className="relative h-screen w-full max-w-[420px] mx-auto snap-start bg-black overflow-hidden"
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)}
            src={reel.video}
            className="w-full h-full object-cover"
            autoPlay={currentIndex === index}
            muted
            loop
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70"></div>

          <div className="absolute top-6 right-6 text-white z-20">
            <Camera size={26} />
          </div>

          <div className="absolute bottom-10 left-4 right-16 text-white z-20">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-300">
                <Image src={reel.profile} width={36} height={36} alt="user" />
              </div>
              <span className="font-semibold text-sm">{reel.user}</span>
            </div>
            <p className="text-sm opacity-90">{reel.description}</p>
          </div>

          <div className="absolute right-3 bottom-14 flex flex-col items-center gap-6 text-white z-20">
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => toggleLike(reel.id)}
            >
              <Heart
                size={28}
                fill={liked[reel.id] ? "red" : "none"}
                className={liked[reel.id] ? "text-red-500" : "text-white"}
              />
              <span className="text-xs">{reel.likes}</span>
            </div>

            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={() => setOpenComments(reel.id)}
            >
              <MessageCircle size={28} />
              <span className="text-xs">{comments[reel.id]?.length || 0}</span>
            </div>

            <Send size={28} className="-rotate-12 cursor-pointer" />
            <MoreHorizontal size={28} />

            <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={reel.profile}
                width={32}
                height={32}
                alt="music"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className={`absolute bottom-0 left-0 w-full z-30 transition-all duration-500 h-[50%] ${
              openComments === reel.id
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0 pointer-events-none"
            }`}
          >
            <div className="absolute inset-0 backdrop-blur-md bg-black/60 flex flex-col justify-end p-4">
              <div className="flex-1 overflow-y-auto mb-4 space-y-3">
                {(comments[reel.id] || []).map((c, i) => (
                  <div key={i} className="flex gap-2 items-start text-white">
                    <Image
                      src="/b3.jpg"
                      width={30}
                      height={30}
                      alt="user"
                      className="rounded-full"
                    />
                    <div>
                      <span className="font-semibold text-sm">user</span>
                      <p className="text-sm">{c}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Image
                  src="/b3.jpg"
                  width={30}
                  height={30}
                  alt="user"
                  className="rounded-full"
                />

                <input
                  value={commentText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCommentText(e.target.value)
                  }
                  placeholder="Add a comment..."
                  className="flex-1 bg-white/20 text-white placeholder-gray-300 px-3 py-2 rounded-full outline-none text-sm"
                />

                <button
                  className="text-blue-400 font-semibold"
                  onClick={() => addComment(reel.id)}
                >
                  Post
                </button>
              </div>

              <button
                className="text-white text-sm mt-3"
                onClick={() => setOpenComments(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
