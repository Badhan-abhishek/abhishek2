"use client";

import Link from "next/link";
import { useRef } from "react"; // Import useRef

import { AnimateHeading, Heading } from "@/components/typography";
import { motion, useInView } from "framer-motion"; // Import useInView
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
  const aboutSectionRef = useRef(null); // Create ref for About Me section
  const isAboutSectionInView = useInView(aboutSectionRef, { once: true, amount: 0.3 }); // Track view status

  return (
    <motion.main
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <header className="absolute w-screen top-0 left-0 border-b bg-slate-800 border-gray-600 h-[50px] flex justify-between items-center">
        <div className="border-r border-gray-600 px-4 h-full flex items-center bg-primary text-white justify-center cursor-pointer">
          <Heading content="abhishek" clx="text-4xl" />
        </div>
        <nav className="h-full hidden md:block">
          <ul className="grid grid-cols-5 h-full">
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
            <ul className="absolute top-[52px] min-w-fit grid grid-rows-5 border-b border-gray-600">
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
      <motion.section 
        ref={aboutSectionRef}
        className="section grid place-content-center px-2 md:px-0"
        initial={{ opacity: 0, y: 50 }}
        animate={isAboutSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.75, delay: 0.2 }}
      >
        <div className="max-w-2xl">
          <Heading content="About Me" clx="text-3xl md:text-5xl text-white mb-4" />
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            Enthusiastic and experienced Full-Stack Developer with a strong
            foundation in building quality software and scalable systems. With a
            proven track record of leading teams, refining developer
            experiences, and delivering impactful projects, I excel at
            problem-solving and adapting to new challenges in fast-paced
            environments.
          </p>
        </div>
      </motion.section>
    </motion.main>
  );
}
