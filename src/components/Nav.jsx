import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <main className="w-[100dvw] flex flex-col gap-5">
      <nav className="w-full flex flex-row px-6 md:px-10 gap-10 md:gap-10 items-center justify-between sm:justify-start">
        <Link href="/" className="flex flex-row items-center">
          <h1 className="font-bold text-lg sm:text-2xl text-black">
            AIAirdropRadar
          </h1>
        </Link>
        {/* Links */}
        <ul className="flex flex-row gap-5 sm:gap-6 text-base sm:text-lg items-center font-medium text-slate-500">
          <Link href="/blog" className="cursor-pointer hover:text-black">
            Blog
          </Link>
        </ul>
      </nav>
      {/* Line */}
      <div className="w-screen h-[0.35px] bg-slate-400"></div>
    </main>
  );
};

export default Nav;
