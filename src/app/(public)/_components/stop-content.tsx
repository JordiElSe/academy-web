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

export default function StopContent({
  x,
  y,
  pos,
  lineLength,
  cardWidth,
  cardHeight,
}: StopContentProps) {
  const radius = 5;
  const svgWidth =
    pos === Positions.Bottom ? cardWidth : lineLength + cardWidth + radius;
  const svgHeight =
    pos === Positions.Bottom ? lineLength + cardHeight + radius : cardHeight;
  return (
    <svg
      x="0"
      y="0"
      width="100%"
      height="100%"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
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
      <motion.line
        x1={x}
        y1={y}
        x2={
          pos === Positions.Left
            ? x - lineLength
            : pos === Positions.Right
            ? x + lineLength
            : x
        }
        y2={
          pos === Positions.Left || pos === Positions.Right ? y : y + lineLength
        }
        className={"stroke-black stroke-2 fill-none"}
        animate={{ strokeDasharray: [`0 ${lineLength}`, `${lineLength} 0`] }}
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.rect
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
        {/* <text  x="155" y="50"  className={"text-sm fill-black opacity-0"}>
          Possessive pronouns
        </text> */}
      </motion.rect>
    </svg>
  );
}
