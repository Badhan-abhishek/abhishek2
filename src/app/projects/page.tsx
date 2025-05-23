"use client"; // Required for framer-motion components

import { Heading } from "@/components/typography";
import { motion } from "framer-motion"; // Import motion

export default function ProjectsPage() {
  return (
    <motion.main 
      className="container mx-auto px-4 pt-[82px] pb-8 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Heading content="My Projects" clx="text-4xl md:text-6xl text-white mb-12 text-center" />
      
      <section className="mb-16">
        <Heading content="Projects at Cuilsoft" clx="text-3xl md:text-5xl text-primary mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tradecafe Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="Tradecafe" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
              <li>Led the development of a feature-rich B2B platform for agricultural commodities trading.</li>
              <li>Managed a team of 5 developers, fostering a collaborative and high-performance environment.</li>
              <li>Architected and implemented scalable solutions using Next.js, TypeScript, and Tailwind CSS.</li>
              <li>Integrated with various third-party APIs for market data, logistics, and payment processing.</li>
              <li>Successfully delivered the project on time and within budget, resulting in a significant increase in client engagement.</li>
            </ul>
          </div>
          {/* Quartermaster Chatbot Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="Quartermaster Chatbot" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
              <li>Developed an AI-powered chatbot for inventory management and logistics.</li>
              <li>Utilized Python, Flask, and NLP libraries to create a conversational interface.</li>
              <li>Integrated with existing inventory systems to provide real-time updates and support.</li>
              <li>Reduced manual workload for inventory managers by 30%.</li>
            </ul>
          </div>
          {/* Padder Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="Padder" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
              <li>Created a minimalist note-taking PWA with a focus on simplicity and speed.</li>
              <li>Built with Preact and TypeScript, leveraging service workers for offline capabilities.</li>
              <li>Achieved near-native performance and a lightweight footprint.</li>
            </ul>
          </div>
          {/* PerfectDraft Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="PerfectDraft" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300">
              <li>Contributed to the development of a popular home beer dispensing system's companion app.</li>
              <li>Focused on UI/UX improvements using React Native and TypeScript.</li>
              <li>Implemented features for tracking beer consumption, keg levels, and discovering new beers.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <Heading content="Personal Projects" clx="text-3xl md:text-5xl text-primary mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Go HTMX Task Manager Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="Go HTMX Task Manager" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300 mb-3">
              <li>A simple task management application built with Go, HTMX, and Tailwind CSS.</li>
              <li>Explores the use of HTMX for dynamic server-rendered HTML.</li>
              <li>Features basic CRUD operations for tasks.</li>
            </ul>
            <a 
              href="https://github.com/Abhishek-90/go-htmx-task-manager" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
          {/* RNAM Card */}
          <div className="border border-gray-700 rounded-lg p-6 hover:shadow-xl hover:border-primary transition-all duration-300 ease-in-out">
            <Heading content="RNAM (React Native Asset Manager)" clx="text-2xl md:text-4xl text-white mb-4" />
            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-300 mb-3">
              <li>A command-line tool for managing assets in React Native projects.</li>
              <li>Simplifies the process of adding, removing, and linking assets.</li>
              <li>Written in Node.js and published on npm.</li>
            </ul>
            <a 
              href="https://github.com/Abhishek-90/rnam" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline mt-4 inline-block"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
