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
}

export default function StopContent({ x, y, pos }: StopContentProps) {
  const radius = 3;
  return (
    <svg
      x={x}
      y={y - radius}
      width="400"
      height={333 + radius}
      viewBox={`0 0 400 ${333 + radius}`}
    >
      {
        <motion.circle
          cx="200"
          cy={radius}
          r={radius}
          className={"fill-black"}
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      }
      <motion.line
        x1="200"
        y1={radius}
        x2="200"
        y2="77"
        stroke="black"
        strokeWidth="2.5"
        animate={{ strokeDasharray: [`0 ${77 - radius}`, `${77 - radius} 0`] }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.rect
        x="0"
        y="77"
        width="400"
        height="258"
        rx="10"
        ry="10"
        stroke="black"
        strokeWidth="2"
        fill="green"
        animate={{
          strokeDasharray: [`0 ${400 * 2 + 258 * 2}`, `${400 * 2 + 258 * 2} 0`],
          fillOpacity: [0, 1],
        }}
        transition={{
          strokeDasharray: { duration: 0.5, ease: "easeInOut", delay: 1 },
          fillOpacity: { duration: 0.5, ease: "easeInOut", delay: 1.4 },
        }}
      ></motion.rect>
    </svg>
  );
}
