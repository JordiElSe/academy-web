"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@components/ui/aurora-background";

export default function LandingPage() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center w-[80%]">
          Learn Catalan with our convenient and accessible approach
        </div>
        <div className="font-extralight text-base md:text-3xl dark:text-neutral-200 py-4 text-center w-[75%]">
          Our platform is designed to guide you all the way and is based on
          learning through listening
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get Started For Free
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
