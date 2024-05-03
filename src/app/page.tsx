"use client";

import Link from "next/link";

import { AnimateHeading, Heading } from "@/components/typography";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactConstants } from "@/lib/contact_constants";
import { BiCheck } from "react-icons/bi";
import {
  BsArrowUpRight,
  BsArrowUpRightSquare,
  BsClipboard,
  BsEnvelope,
  BsGithub,
  BsTwitterX,
} from "react-icons/bs";

const buttonAnimateCsx = "text-white cursor-pointer hover:bg-primary";

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

export default function Home() {
  const [isContactTapped, setIsContactTapped] = useState(false);

  const handleCopyContact = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(ContactConstants.email);
      setIsContactTapped(true);
      setTimeout(() => {
        setIsContactTapped(false);
      }, 1000);
    }
  };

  return (
    <main className="relative">
      <header className="absolute w-screen top-0 left-0 border-b bg-slate-800 border-gray-600 h-[50px] flex justify-between items-center">
        <div className="border-r border-gray-600 px-4 h-full flex items-center bg-primary text-white justify-center cursor-pointer">
          <Heading content="abhishek" clx="text-4xl" />
        </div>
        <nav className="h-full">
          <ul className="grid grid-cols-3 h-full">
            <motion.li
              className={cn(
                "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out",
                buttonAnimateCsx,
              )}
              onClick={handleCopyContact}
            >
              {isContactTapped ? (
                <span className="flex items-center gap-2 h-full w-full">
                  <BiCheck />
                </span>
              ) : (
                <motion.span className="flex items-center gap-2 h-full w-full transistion-all ease-in-out group">
                  <BsEnvelope className="group-hover:hidden" />
                  <BsClipboard className="hidden group-hover:block" />
                </motion.span>
              )}
            </motion.li>
            <motion.li
              className={cn(
                "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
                buttonAnimateCsx,
              )}
            >
              <Link
                target="_blank"
                className="h-full w-full grid place-content-center"
                href={ContactConstants.github}
              >
                <BsGithub className="group-hover:hidden" />
                <BsArrowUpRightSquare className="hidden group-hover:block" />
              </Link>
            </motion.li>
            <motion.li
              className={cn(
                "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
                buttonAnimateCsx,
              )}
            >
              <Link
                className="h-full w-full grid place-content-center"
                target="_blank"
                href={ContactConstants.x}
              >
                <BsTwitterX className="group-hover:hidden" />
                <BsArrowUpRightSquare className="hidden group-hover:block" />
              </Link>
            </motion.li>
          </ul>
        </nav>
      </header>
      <section className="section grid place-content-center">
        <div>
          <AnimateHeading
            content="I make software"
            clx="text-white text-7xl"
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
              clx="text-primary text-7xl"
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
