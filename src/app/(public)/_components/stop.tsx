"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import StopContent from "./stop-content";

enum Positions {
  Left,
  Right,
  BottomLeft,
  BottomRight,
}

interface StopProps {
  x: number;
  y: number;
  baseBottomY: number;
  position: Positions;
}

export default function Stop({ x, y, baseBottomY, position }: StopProps) {
  const [buttonClickedHeight, setButtonClickedHeight] = useState(0);
  const svgWidth =
    position === Positions.BottomLeft || position === Positions.BottomRight
      ? 510
      : 677.5;
  const svgHeight =
    position === Positions.BottomLeft || position === Positions.BottomRight
      ? 417.5
      : 260;

  //If too small for small screen devices
  /*   const [baseWidth, setBaseWidth] = useState(100);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) { // Tailwind's 'sm' breakpoint
        setBaseWidth(150);
      } else if (window.innerWidth < 768) { // Tailwind's 'md' breakpoint
        setViewBoxSize(125);
      } else {
        setViewBoxSize(100);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => window.removeEventListener('resize', handleResize);
  }, []); */

  const baseWidth = 100;
  const baseDepth = (baseBottomY / 2.5) * 2;
  const baseHeight = 10;
  const buttonWidth = 55;
  const buttonHeight = 10;
  const buttonDepth = baseDepth / 2;

  const centerBaseEllipse = [
    position === Positions.BottomLeft
      ? 375 + 10
      : position === Positions.Left
      ? 552.5
      : (baseWidth / 2) * 2.5,
    position === Positions.BottomLeft || position === Positions.BottomRight
      ? baseBottomY - baseHeight
      : svgHeight / 2 - baseHeight,
  ];
  const centerButtonEllipse = [
    position === Positions.BottomLeft
      ? 375 + 10
      : position === Positions.Left
      ? 552.5
      : (baseWidth / 2) * 2.5,
    position === Positions.BottomLeft || position === Positions.BottomRight
      ? baseBottomY - buttonHeight - baseHeight
      : svgHeight / 2 - baseHeight - buttonHeight,
  ];
  const buttonTopLeft = [
    centerButtonEllipse[0] - buttonWidth / 2,
    centerButtonEllipse[1],
  ];
  const buttonTopRight = [
    buttonTopLeft[0] + buttonWidth,
    centerButtonEllipse[1],
  ];
  const buttonBottomRight = [
    buttonTopRight[0],
    centerButtonEllipse[1] + buttonHeight,
  ];
  const buttonBottomLeft = [buttonTopLeft[0], buttonBottomRight[1]];
  const baseTopLeft = [
    centerBaseEllipse[0] - baseWidth / 2,
    centerBaseEllipse[1],
  ];
  const baseTopRight = [
    centerBaseEllipse[0] + baseWidth / 2,
    centerBaseEllipse[1],
  ];
  const baseBottomRight = [baseTopRight[0], centerBaseEllipse[1] + baseHeight];
  const baseBottomLeft = [baseTopLeft[0], baseBottomRight[1]];

  const handleClick = () => {
    setButtonClickedHeight((prev) => (prev === 0 ? buttonHeight * 0.7 : 0));
  };

  return (
    <svg
      x={x}
      y={y}
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
    >
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={
          position === Positions.BottomLeft ||
          position === Positions.BottomRight
            ? baseBottomY
            : svgHeight / 2
        }
        rx={baseWidth / 2}
        ry={baseDepth / 2}
        fill="grey"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.8, 0, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 1.1, 2],
          repeatDelay: 1,
        }}
      />
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={
          position === Positions.BottomLeft ||
          position === Positions.BottomRight
            ? baseBottomY
            : svgHeight / 2
        }
        rx={baseWidth / 2}
        ry={baseDepth / 2}
        fill="grey"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.8, 0, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.25,
          times: [0, 1.1, 2],
          repeatDelay: 1,
        }}
      />
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={
          position === Positions.BottomLeft ||
          position === Positions.BottomRight
            ? baseBottomY
            : svgHeight / 2
        }
        rx={baseWidth / 2}
        ry={baseDepth / 2}
        fill="grey"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.8, 0, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          delay: 0.5,
          times: [0, 1.1, 2],
          repeatDelay: 1,
        }}
      />
      <path
        d={`M${baseTopLeft[0]} ${baseTopLeft[1]} L${baseBottomLeft[0]} ${
          baseBottomLeft[1]
        } A ${baseWidth / 2} ${baseDepth / 2} 0 1 0 ${baseBottomRight[0]} ${
          baseBottomRight[1]
        } L${baseTopRight[0]} ${baseTopRight[1]}`}
        fill="#4F4F4F"
        stroke="black"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <ellipse
        cx={centerBaseEllipse[0]}
        cy={centerBaseEllipse[1]}
        rx={baseWidth / 2}
        ry={baseDepth / 2}
        fill="#838383"
        stroke="black"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <motion.path
        d={`M${buttonTopLeft[0]} ${buttonTopLeft[1]} L${buttonBottomLeft[0]} ${
          buttonBottomLeft[1]
        } A ${buttonWidth / 2} ${buttonDepth / 2} 0 1 0 ${
          buttonBottomRight[0]
        } ${buttonBottomRight[1]} L${buttonTopRight[0]} ${buttonTopRight[1]}`}
        animate={{
          d: `M${buttonTopLeft[0]} ${buttonTopLeft[1] + buttonClickedHeight} L${
            buttonBottomLeft[0]
          } ${buttonBottomLeft[1]} A ${buttonWidth / 2} ${
            buttonDepth / 2
          } 0 1 0 ${buttonBottomRight[0]} ${buttonBottomRight[1]} L${
            buttonTopRight[0]
          } ${buttonTopRight[1] + buttonClickedHeight}`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 15,
        }}
        fill="#4F4F4F"
        stroke="black"
        onClick={handleClick}
        className="cursor-pointer"
      />
      <motion.ellipse
        cx={centerButtonEllipse[0]}
        cy={centerButtonEllipse[1]}
        rx={buttonWidth / 2}
        ry={buttonDepth / 2}
        animate={{
          cy: centerButtonEllipse[1] + buttonClickedHeight,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
        }}
        fill="#838383"
        stroke="black"
        onClick={handleClick}
        className="cursor-pointer"
      />
      {buttonClickedHeight ? (
        <StopContent
          x={centerButtonEllipse[0]}
          y={centerButtonEllipse[1] + 0.7 * buttonHeight}
          pos={position}
        />
      ) : null}
    </svg>
  );
}

/* return (
    <div className={cn(className, "flex justify-center items-center")}>
      <div className="absolute w-9 h-9 bg-blue-300 rounded-xl border-2 border-slate-700  z-40"></div>
      <div className="absolute w-9 h-[2.75rem] bg-blue-500 border-2 border-slate-700 rounded-xl z-30 transform translate-y-1"></div>
      <div className="absolute w-16 h-16 bg-blue-300 rounded-3xl border-2 border-slate-700  z-20"></div>
      <div className="absolute w-16 h-[4.5rem] bg-blue-500 border-2 border-slate-700 rounded-3xl z-10 transform translate-y-1.5"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-3xl animate-pingWithDelay"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-2xl animate-pingWithDelay delay-300"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-3xl animate-pingWithDelay delay-600"></div>
    </div>
  ); */
