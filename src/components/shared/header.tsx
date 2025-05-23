"use client"; // Required for useState and event handlers

import Link from "next/link";
import { useState } from "react";
import { Heading } from "@/components/typography";
import { NavItems } from "@/components/nav-items";
import { BsList } from "react-icons/bs";
import { cn } from "@/lib/utils";
// motion components are not directly used in the static header parts,
// but NavItems might use them. If direct motion usage is needed here, import { motion } from "framer-motion";

const buttonAnimateCsx = "text-white cursor-pointer hover:bg-primary"; // Copied from page.tsx

export default function SharedHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="absolute w-screen top-0 left-0 border-b bg-slate-800 border-gray-600 h-[50px] flex justify-between items-center z-50">
      {/* Added z-50 for stacking context if needed */}
      <div className="border-r border-gray-600 px-4 h-full flex items-center bg-primary text-white justify-center cursor-pointer">
        {/* Consider making this a Link to "/" */}
        <Link href="/">
          <Heading content="abhishek" clx="text-4xl" />
        </Link>
      </div>
      <nav className="h-full hidden md:block">
        <ul className="grid grid-cols-6 h-full">
          {/* Changed from grid-cols-5 to grid-cols-6 */}
          <NavItems />
        </ul>
      </nav>
      <nav className="h-full md:hidden block relative">
        <ul className="grid grid-cols-1 h-full">
          <li
            className={cn(
              "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
              buttonAnimateCsx
            )}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <BsList />
          </li>
        </ul>
        {isNavOpen ? (
          <ul className="absolute top-[52px] right-0 md:right-auto bg-slate-800 min-w-[200px] grid grid-rows-6 border-b border-l border-r border-gray-600 md:border-r-0">
            {/* Changed from grid-rows-5 to grid-rows-6 */}
            <NavItems />
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
