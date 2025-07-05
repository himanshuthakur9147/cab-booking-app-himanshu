"use client";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function BlogsPlaceholder() {
  return (
    <>
    <Navbar/>
    <div className="relative flex flex-col items-center justify-center invert h-[85vh] px-4 text-center bg-[#0a0a0a] overflow-hidden">
      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black/30 to-orange-500/5 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />

      {/* Icon */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="z-10"
      >
        <FaRegLightbulb className="text-yellow-400 w-14 h-14 animate-bounce mb-4" />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className="text-white text-2xl sm:text-4xl md:text-5xl font-bold z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        Blogs Coming Soon!
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-3 text-gray-300 text-sm sm:text-lg max-w-md z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Our team at <span className="text-orange-400 font-semibold">Yatra Travel India</span> is curating powerful content for travelers and explorers. Stay tuned!
      </motion.p>

      {/* Button */}
      <motion.div
        className="z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <Link
          href="/"
          className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm sm:text-base transition-all duration-300 shadow-md"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
    </>
  );
}
