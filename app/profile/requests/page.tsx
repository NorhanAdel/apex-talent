"use client";

import Image from "next/image";

type Request = {
  id: number;
  name: string;
  role: string;
  img: string;
  text: string;
  date: string;
};

export default function RequestsPage() {
  const requests: Request[] = [
    {
      id: 1,
      name: "Ronald Richards",
      role: "Agent",
      img: "/b3.jpg",
      text: "I have been following your performances and I am truly impressed by your talent and potential on the field. I would like to represent you as your official agent and support your professional football career by helping you find the best opportunities and clubs.",
      date: "24 Aug, 2026",
    },
    {
      id: 2,
      name: "Ronald Richards",
      role: "Scout",
      img: "/b3.jpg",
      text: "I recently discovered you as a talented player and was truly impressed by your skills, discipline, and potential on the field. You have shown great ability and determination that could help you succeed at a higher level of competition.",
      date: "24 Aug, 2026",
    },
    {
      id: 3,
      name: "Ronald Richards",
      role: "Club",
      img: "/b3.jpg",
      text: "I recently discovered you as a talented player and was truly impressed by your skills, discipline, and potential on the field. You have shown great ability and determination that could help you succeed at a higher level of competition.",
      date: "24 Aug, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] flex justify-center py-38 text-white">
      <div className="w-full max-w-6xl p-10 relative">
        <h1 className="text-center text-yellow-400 text-3xl font-bold mb-10">
          Requests
        </h1>

        <div className="flex flex-col gap-8">
          {requests.map((req) => (
            <RequestCard key={req.id} req={req} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RequestCard({ req }: { req: Request }) {
  return (
    <div className="border border-[#0d2a5f] bg-[#020d24] p-6 rounded-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <img src={req.img} className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h3 className="font-semibold">{req.name}</h3>
            <span className="text-yellow-400 text-sm">{req.role}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-7 py-1 border-x-3 italic border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white transition ">
            Reject
          </button>
          <button className="px-7 py-1 border-x-3 italic bg-[#021448] border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white transition">
            Accept
          </button>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">{req.text}</p>
      <div className="text-right text-sm text-gray-400">{req.date}</div>
    </div>
  );
}
