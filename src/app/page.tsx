"use client";

import Link from "next/link";
// useRef removed
// Heading removed as it's not directly used on this page after header and about section removal
import { AnimateHeading } from "@/components/typography"; 
import { motion } from "framer-motion"; // useInView removed
// useState removed as isNavOpen is now in SharedHeader
import { ContactConstants } from "@/lib/contact_constants";
import { BsArrowUpRight } from "react-icons/bs"; // BsList removed
import { cn } from "@/lib/utils"; // cn might still be used by other parts of the page
// NavItems removed as it's used in SharedHeader

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

// const buttonAnimateCsx = "text-white cursor-pointer hover:bg-primary"; // Removed as it was for the old header

export default function Home() {
  // const [isNavOpen, setIsNavOpen] = useState(false); // Removed, state moved to SharedHeader
  // const aboutSectionRef = useRef(null); // Removed
  // const isAboutSectionInView = useInView(aboutSectionRef, { once: true, amount: 0.3 }); // Removed

  return (
    <motion.main
      className="relative" // Keep relative if other absolute elements depend on it, or adjust page content padding
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      {/* Header removed from here */}
      <section className="section grid place-content-center min-h-[calc(100vh-50px)]"> {/* Added min-height */}
        {/* Ensure this section has appropriate top padding if SharedHeader is absolute and overlaps */}
        {/* pt-[50px] from .section class handles the overlap */}
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
      {/* "About Me" motion.section removed */}
    </motion.main>
  );
}
