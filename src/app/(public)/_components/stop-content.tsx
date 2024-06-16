import React from "react";
import { motion } from "framer-motion";

enum Positions {
  Left,
  Right,
  Bottom,
}

interface StopContentProps {
  x: number;
  y: number;
  pos: Positions;
  lineLength: number;
  cardWidth: number;
  cardHeight: number;
}

export default function StopContent() {
  return (
    <svg width="300" height="300" viewBox={`0 0 100 100`}>
      {/*  <motion.circle
        cx={x}
        cy={y}
        r={radius}
        className={"fill-black"}
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      /> */}
      <motion.line
        x1="50"
        y1="50"
        x2="55"
        y2="100"
        stroke="black"
        strokeWidth="1.5"
        animate={{ rotateX: [90, 0] }}
        transition={{
          duration: 0.25,
          repeatDelay: 1,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ originX: 1.0, originY: 1.0 }}
      />
      <motion.rect
        x={20}
        y={1}
        width={60}
        height={50}
        rx="2"
        ry="2"
        stroke="black"
        strokeWidth="1.5"
        fill={"grey"}
        animate={{ rotateX: [90, 0] }}
        transition={{
          duration: 0.25,
          repeatDelay: 1,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
        style={{ originX: 1.0, originY: 1.0 }}
      ></motion.rect>
    </svg>
  );
}
