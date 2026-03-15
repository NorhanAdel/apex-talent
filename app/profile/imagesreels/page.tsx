"use client";

import { User, Trophy, DollarSign, Users, Image as ImageIcon, Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ImagesReels() {
  const [video, setVideo] = useState<string | null>(null);
  const [photos, setPhotos] = useState<string[]>([]);
  const [reels, setReels] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

 
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setPhotos((prev) => [...prev, ...urls]);
  };

 
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setReels((prev) => [...prev, url]);
    setVideo(url);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white flex justify-center py-38">
      <div className="w-full max-w-6xl">
        <h1 className="text-center text-yellow-400 text-3xl font-bold mb-10">
          Images & Reels
        </h1>

  
        <div className="flex justify-center items-center gap-6 mb-10">
          <Step icon={<User />} />
          <Line />
          <Step icon={<Trophy />} />
          <Line />
          <Step icon={<DollarSign />} />
          <Line />
          <Step active icon={<ImageIcon />} />
        </div>

 
        <h3 className="text-gray-300 mb-8">Photos</h3>
        <div className="flex gap-6 mb-15 flex-wrap">
          {photos.map((p, i) => (
            <PhotoCard key={i} img={p} />
          ))}

          <label className="w-32 h-32 rounded-full border border-blue-500 flex items-center justify-center cursor-pointer hover:bg-[#0b1736]">
            <Plus size={30} />
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handlePhotoUpload}
              className="hidden"
            />
          </label>
        </div>

     
        <h3 className="text-gray-300 mb-4">Reels</h3>

        <div className="w-full h-[420px] bg-black rounded-xl overflow-hidden mb-6 relative">
          {video ? (
            <video src={video} controls className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400"></div>
          )}

       
          <label className="absolute inset-0 flex items-center justify-center cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:scale-110 transition">
              <Plus size={30} className="text-black" />
            </div>
            <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
          </label>
        </div>

  
        <div className="flex items-center gap-4 flex-wrap">
          {reels.map((r, i) => (
            <VideoCard key={i} video={r} setVideo={setVideo} />
          ))}

     
          <label className="w-20 h-20 rounded-full border border-blue-500 flex items-center justify-center cursor-pointer">
            <Plus />
            <input type="file" accept="video/*" onChange={handleVideoUpload} className="hidden" />
          </label>
        </div>

    
        <div className="flex items-center gap-3 mt-6">
          <span className="text-sm text-gray-300">Share as Reels</span>
          <input type="checkbox" />
        </div>
  
        <div className="flex justify-between mt-12">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg"
          >
            Previous
          </button>

          <button
            onClick={() => setSuccess(true)}
            className="flex items-center gap-2 bg-[#081f55] border-x border-yellow-400 px-8 py-3 rounded-lg"
          >
            Submit
          </button>
        </div>
      </div>

      {/* success modal */}
      {success && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#081f55] p-10 rounded-2xl text-center shadow-2xl">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500 flex items-center justify-center text-3xl">
              ✓
            </div>
            <h2 className="text-2xl font-bold mb-2">Profile Uploaded</h2>
            <p className="text-gray-300 mb-6">Your football profile has been successfully submitted</p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Step({ icon, active = false }: { icon: React.ReactNode; active?: boolean }) {
  return (
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center ${
        active ? "bg-yellow-400 text-black" : "bg-[#0f1c3d]"
      }`}
    >
      {icon}
    </div>
  );
}

function Line() {
  return <div className="w-16 h-[2px] bg-gray-600"></div>;
}

function PhotoCard({ img }: { img: string }) {
  return (
    <div className="w-32 h-32 rounded-lg overflow-hidden bg-gradient-to-b from-yellow-400 to-[#0b1736]">
      <img src={img} className="w-full h-full object-cover" />
    </div>
  );
}

function VideoCard({ video, setVideo }: { video: string; setVideo: (v: string) => void }) {
  return (
    <div onClick={() => setVideo(video)} className="w-32 h-20 rounded-lg overflow-hidden cursor-pointer bg-black">
      <video src={video} className="w-full h-full object-cover" />
    </div>
  );
}
