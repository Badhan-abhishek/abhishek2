"use client";

import Link from "next/link";

import { AnimateHeading, Heading } from "@/components/typography";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactConstants } from "@/lib/contact_constants";
import { BsArrowUpRight, BsList } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { NavItems } from "@/components/nav-items";

const MotionLink = motion(Link);

const linkIconMotion = {
  rest: {
    opacity: 0,
    x: 50,
  },
  hover: {
    opacity: 1,
    x: 0,
  },
};

const buttonAnimateCsx = "text-white cursor-pointer hover:bg-primary";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <main className="relative">
      <header className="absolute w-screen top-0 left-0 border-b bg-slate-800 border-gray-600 h-[50px] flex justify-between items-center">
        <div className="border-r border-gray-600 px-4 h-full flex items-center bg-primary text-white justify-center cursor-pointer">
          <Heading content="abhishek" clx="text-4xl" />
        </div>
        <nav className="h-full hidden md:block">
          <ul className="grid grid-cols-3 h-full">
            <NavItems />
          </ul>
        </nav>
        <nav className="h-full md:hidden block relative">
          <ul className="grid grid-cols-1 h-full">
            <li
              className={cn(
                "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
                buttonAnimateCsx,
              )}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <BsList />
            </li>
          </ul>
          {isNavOpen ? (
            <ul className="absolute top-[52px] min-w-fit grid grid-rows-3 border-b border-gray-600">
              <NavItems />
            </ul>
          ) : null}
        </nav>
      </header>
      <section className="section grid place-content-center">
        <div className="px-2 md:px-0">
          <AnimateHeading
            content="I make software"
            clx="text-white text-4xl md:text-7xl"
            staggerInitalCtrl={0.5}
          />
          <MotionLink
            whileHover="hover"
            initial="rest"
            className="flex items-center"
            href={ContactConstants.cuilsoft}
            target="_blank"
          >
            <AnimateHeading
              content="@ Cuilsoft"
              clx="text-primary text-4xl md:text-7xl"
              staggerInitalCtrl={1.5}
            />
            <motion.span variants={linkIconMotion}>
              <BsArrowUpRight className="text-primary" width={20} size={50} />
            </motion.span>
          </MotionLink>
        </div>
      </section>
    </main>
  );
}
