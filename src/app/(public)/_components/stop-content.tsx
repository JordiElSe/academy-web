import React from "react";
import { motion } from "framer-motion";

enum Positions {
  Left,
  Right,
  BottomLeft,
  BottomRight,
}

interface StopContentProps {
  x: number;
  y: number;
  pos: Positions;
}

export default function StopContent({ x, y, pos }: StopContentProps) {
  const radius = 3;
  const cardWidth = 375;
  const cardHeight = 260;
  return (
    <svg /* x={x} y={y} */ width="100%" height="100%">
      {
        <motion.circle
          cx={x}
          cy={y}
          r={radius}
          className={"fill-black"}
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      }
      <motion.line
        x1={x}
        y1={y}
        x2={pos === Positions.BottomRight ? 510 - 375 / 2 : 2}
        y2={pos === Positions.BottomRight ? 417.5 - 260 : 2}
        stroke="black"
        strokeWidth="2.5"
        animate={{ strokeDasharray: ["0 300", "300 0"] }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.rect
        style={{ boxSizing: "border-box" }}
        x={pos === Positions.BottomRight ? 510 - 375 : 2}
        y={pos === Positions.BottomRight ? 417.5 - 260 : 2}
        width="375"
        height="260"
        rx="5"
        ry="5"
        stroke="black"
        strokeWidth="1"
        fill="#afc2d2"
        animate={{
          strokeDasharray: [`0 ${375 * 2 + 260 * 2}`, `${375 * 2 + 260 * 2} 0`],
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
