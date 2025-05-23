"use client"; // Required for framer-motion components

import { Heading } from "@/components/typography";
import { ContactConstants } from "@/lib/contact_constants";
import Link from "next/link";
import { BsEnvelope, BsLinkedin, BsGithub } from "react-icons/bs";
import { motion } from "framer-motion"; // Import motion

export default function ContactPage() {
  return (
    <motion.main 
      className="container mx-auto px-4 pt-[82px] pb-8 text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Heading content="Contact Me" clx="text-4xl md:text-6xl text-white mb-12 text-center" />
      <div className="max-w-lg mx-auto grid gap-8">
        <a 
          href={`mailto:${ContactConstants.email}`} 
          className="flex items-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <BsEnvelope size={24} className="mr-4 text-primary" />
          <span className="text-lg">{ContactConstants.email}</span>
        </a>
        <Link 
          href={ContactConstants.linkedIn} // Assuming this constant exists or will be added
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <BsLinkedin size={24} className="mr-4 text-primary" />
          <span className="text-lg">LinkedIn</span>
        </Link>
        <Link 
          href={ContactConstants.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center p-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <BsGithub size={24} className="mr-4 text-primary" />
          <span className="text-lg">GitHub</span>
        </Link>
      </div>
    </motion.main>
  );
}
