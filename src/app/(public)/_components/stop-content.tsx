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
    <svg width="100%" height="100%">
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
        x2={
          pos === Positions.BottomRight
            ? 510 - cardWidth / 2
            : pos === Positions.BottomLeft
            ? cardWidth / 2
            : pos === Positions.Left
            ? 375
            : 302.5
        }
        y2={
          pos === Positions.BottomRight || pos === Positions.BottomLeft
            ? 417.5 - cardHeight
            : y
        }
        stroke="black"
        strokeWidth="2.5"
        animate={{ strokeDasharray: ["0 300", "300 0"] }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.rect
        style={{ boxSizing: "border-box" }}
        x={
          pos === Positions.BottomRight
            ? 510 - cardWidth
            : pos === Positions.BottomLeft || pos === Positions.Left
            ? 1
            : 302.5
        }
        y={
          pos === Positions.BottomRight || pos === Positions.BottomLeft
            ? 417.5 - cardHeight + 1
            : 1
        }
        width={cardWidth - 2}
        height={cardHeight - 2}
        rx="5"
        ry="5"
        stroke="black"
        strokeWidth="2"
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
