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
    <>
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
    </>
  );
};
