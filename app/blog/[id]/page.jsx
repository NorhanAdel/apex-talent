"use client";

import { useParams } from "next/navigation";

const blogs = [
  {
    id: 1,
    img: "/b2.jpg",
    title: "All Eyes on Ronaldo: The Upcoming Football Clash",
    date: "24 Aug, 2026",
    content: `Football fans around the world are turning their attention to the pitch as excitement builds for the upcoming match featuring the legendary Cristiano Ronaldo.

Known for his incredible goal-scoring ability, leadership, and unmatched determination, Ronaldo continues to be one of the most influential players in modern football.

As the star forward of Al Nassr FC, Ronaldo brings experience, skill, and passion to every match he plays. Fans eagerly await this clash, expecting moments of brilliance, powerful shots, and the competitive spirit that has defined his legendary career.

This upcoming game promises an intense battle on the field, where strategy, teamwork, and individual talent will all play a role in determining the outcome.

Beyond the scoreline, the event represents the global love for football. Thousands of fans in the stadium and millions watching around the world will tune in to see if Ronaldo can once again deliver a moment of magic and inspire his team to victory.

For football lovers, this is more than just a game — it’s a chance to watch a living legend continue to make history.`,
  },
];

export default function BlogDetails() {
  const params = useParams();
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#020617]">
        Blog not found
      </div>
    );
  }

  return (
    <section dir="ltr" className="bg-[#020617] min-h-screen flex items-center justify-center px-6 py-29">
      <div className="max-w-6xl w-full grid md:grid-cols-2 rounded-xl overflow-hidden shadow-2xl border border-blue-900">
        {/* Image */}
        <div className="relative h-[100%]">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/10 via-[#020617]/40 to-[#020617]"></div>
        </div>

        {/* Text Side */}
        <div className="relative bg-[#06122a] p-10 text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('/pattern.png')]"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6 leading-snug">
              {blog.title}
            </h1>

            <div className="space-y-4 text-gray-300 text-[14px] leading-relaxed">
              {blog.content.split("\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="text-right text-gray-400 mt-8 text-sm">
              {blog.date}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
