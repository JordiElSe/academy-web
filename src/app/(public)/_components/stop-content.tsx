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
        y1="25"
        x2="51"
        y2="75"
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
      {/* <motion.rect
        x={
          pos === Positions.Bottom
            ? x - cardWidth / 2
            : pos === Positions.Left
            ? x + lineLength
            : x - lineLength
        }
        y={pos === Positions.Bottom ? y + lineLength : y - cardHeight / 2}
        width={cardWidth - 1}
        height={cardHeight - 1}
        rx="10"
        ry="10"
        className={"stroke-black stroke-2 fill-white"}
        animate={{
          strokeDasharray: [
            `0 ${cardWidth * 2 + cardHeight * 2}`,
            `${cardWidth * 2 + cardHeight * 2} 0`,
          ],
          fillOpacity: [0, 1],
        }}
        transition={{
          strokeDasharray: { duration: 0.5, ease: "easeInOut", delay: 1 },
          fillOpacity: { duration: 0.5, ease: "easeInOut", delay: 1.5 },
        }}
      >
      
      </motion.rect> */}
    </svg>
  );
}
