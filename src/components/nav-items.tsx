import { ContactConstants } from "@/lib/contact_constants";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { BiCheck } from "react-icons/bi";
import {
  BsArrowUpRightSquare,
  BsClipboard,
  BsEnvelope,
  BsGithub,
  BsTwitterX,
} from "react-icons/bs";

const buttonAnimateCsx =
  "text-white cursor-pointer hover:bg-primary h-[50px] w-[50px]";

export const NavItems = () => {
  return (
    <>
      <motion.li
        className={cn(
          "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
          buttonAnimateCsx,
        )}
      >
        <Link
          href="/"
          className="h-full w-full grid place-content-center"
        >
          Home
        </Link>
      </motion.li>
      <motion.li
        className={cn(
          "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
          buttonAnimateCsx,
        )}
      >
        <Link
          href="/projects"
          className="h-full w-full grid place-content-center"
        >
          Projects
        </Link>
      </motion.li>
      <motion.li
        className={cn(
          "border-l border-gray-600 px-4 flex items-center justify-center transistion-all ease-in-out group",
          buttonAnimateCsx,
        )}
      >
        <Link
          href="/contact"
          className="h-full w-full grid place-content-center"
        >
          Contact
        </Link>
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
          <BsGithub />
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
          <BsTwitterX />
        </Link>
      </motion.li>
    </>
  );
};
