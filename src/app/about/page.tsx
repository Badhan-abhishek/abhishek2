"use client"; 
import { Heading } from "@/components/typography";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <motion.main
      className="container mx-auto px-4 md:px-8 lg:px-16 pt-[82px] pb-8 text-white min-h-screen" // Added container, pb-8, min-h-screen for consistency
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }} // Matched duration with other pages
    >
      <Heading content="About Me" clx="text-white text-4xl md:text-7xl mb-8 text-center" /> {/* Added text-center */}
      <section className="max-w-3xl mx-auto text-slate-300 text-lg md:text-xl space-y-6 leading-relaxed"> {/* Added max-w, mx-auto, space-y-6, leading-relaxed */}
        <p>
          Enthusiastic and experienced Full-Stack Developer with a strong
          foundation in building quality software and scalable systems.
          With a proven track record of leading teams, refining developer
          experiences, and delivering impactful projects, I excel at
          problem-solving and adapting to new challenges in fast-paced
          environments.
        </p>
        {/* Further content can be added here */}
      </section>
    </motion.main>
  );
}
