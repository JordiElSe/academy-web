"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Path = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.svg
      className="pt-20"
      width="1602"
      height="8002"
      viewBox="0 0 1602 8002"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        /* initial={{ pathLength: 1 }}
        style={{ pathLength: scrollYProgress }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
        }} */
        d="M801.001 1C1867.66 1 1867.66 616.385 801.001 616.385C-265.667 616.385 -265.667 1231.77 801 1231.77C1867.66 1231.77 1867.66 1847.16 801.009 1847.16C-265.667 1847.16 -265.667 2462.54 801.009 2462.54C1867.66 2462.54 1867.66 3077.92 801.009 3077.92C-265.667 3077.92 -265.667 3693.31 801.009 3693.31C1867.66 3693.31 1867.66 4308.69 801.009 4308.69C-265.667 4308.69 -265.667 4924.08 801.009 4924.08C1867.66 4924.08 1867.66 5539.46 801.009 5539.46C-265.667 5539.46 -265.667 6154.85 801.009 6154.85C1867.66 6154.85 1867.66 6770.23 801.009 6770.23C-265.667 6770.23 -265.667 7385.62 801.009 7385.62C1867.66 7385.62 1867.66 8001 801.009 8001"
        stroke="black"
        strokeWidth="5"
      />
    </motion.svg>
  );
};

export default Path;
