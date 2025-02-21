import React from "react";
import Nav from "@/components/Nav";
import Link from "next/link";

const page = () => {
  const blogPosts = [
    {
      Date: "February 22, 2025",
      Title: "Video 1: 5 Crypto Games To Earn Money From",
      Subtitle: "Learn about 5 crypto games that will make you money",
      Link: "video1",
    },
  ];

  return (
    <main className="w-screen h-fit px-10 py-6 gap-6 flex flex-col items-center justify-start">
      <Nav />
      <div className="flex gap-6 my-5 flex-col items-center justify-center">
        <h1 className="font-bold text-5xl">Blog Posts</h1>
        <h3 className="font-medium text-slate-500 text-2xl">
          Make Millions From Airdrops
        </h3>
      </div>
      {blogPosts.map((item, index) => {
        return (
          <Link
            href={`/blog/${item.Link}`}
            key={index}
            className="transition-transform duration-300 transform hover:-translate-y-1.5 hover:shadow-xl shadow-lg h-fit p-6 gap-3 flex items-start justify-center flex-col cursor-pointer border-slate-200 border rounded-2xl w-full md:w-[88%]"
          >
            <p className="text-slate-500 text-lg">{item.Date}</p>
            <h1 className="text-black text-2xl font-bold">{item.Title}</h1>
            <h2 className="font-medium text-slate-500 text-xl">
              {item.Subtitle}
            </h2>
          </Link>
        );
      })}
    </main>
  );
};

export default page;
