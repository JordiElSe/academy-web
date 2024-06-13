import React from "react";
import { motion } from "framer-motion";

interface StopContentProps {
  x: number;
  y: number;
  showCard: boolean;
}

export default function StopContent({ x, y, showCard }: StopContentProps) {
  const radius = 5;
  return showCard ? (
    <svg x={x} y={y} width="500" height="200" viewBox="0 0 200 200">
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        className={"fill-black"}
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
      <motion.line
        x1="55"
        y1="50"
        x2="150"
        y2="50"
        className={"stroke-black stroke-2 fill-none"}
        animate={{ strokeDasharray: ["0 90", "90 0"] }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.rect
        x="150"
        y="20"
        width="150"
        height="60"
        rx="10"
        ry="10"
        className={"stroke-black stroke-2 fill-white"}
        animate={{ strokeDasharray: ["0 420", "420 0"], fillOpacity: [0, 1] }}
        transition={{
          strokeDasharray: { duration: 0.5, ease: "easeInOut", delay: 1 },
          fillOpacity: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
        }}
      />
      <text x="155" y="50" className={"text-sm fill-black opacity-0"}>
        Possessive pronouns
      </text>
    </svg>
  ) : null;
}
