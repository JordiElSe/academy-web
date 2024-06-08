"use client";
import React, { useState } from "react";
import Stop from "../_components/stop";
import TabSwitch from "../_components/tab-switch";
import { motion } from "framer-motion";

export default function RoadmapPage() {
  const baseHeight = 13;
  const baseWidth = 100;
  const baseDepth = 35;
  const buttonHeight = baseHeight;
  const [buttonClickedHeight, setButtonClickedHeight] = useState(0);
  const buttonWidth = baseWidth * 0.58;
  const buttonDepth = baseDepth / 2;
  const svgHeight = baseHeight + buttonHeight + baseDepth / 2 + buttonDepth;

  const centerBaseEllipse = [baseWidth / 2, buttonHeight + buttonDepth / 2];
  const centerButtonEllipse = [baseWidth / 2, buttonDepth / 2];
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
  const baseTopLeft = [0, centerBaseEllipse[1]];
  const baseTopRight = [baseWidth, centerBaseEllipse[1]];
  const baseBottomRight = [baseTopRight[0], centerBaseEllipse[1] + baseHeight];
  const baseBottomLeft = [baseTopLeft[0], baseBottomRight[1]];

  const handleClick = () => {
    setButtonClickedHeight((prev) => (prev === 0 ? buttonHeight * 0.7 : 0));
  };

  return (
    <div className="flex flex-col items-center justify-start w-full pt-10">
      <TabSwitch />

      {/* <Stop /> */}
      <svg
        className="cursor-pointer"
        width={baseWidth + 100}
        height={svgHeight + 100}
        viewBox={`0 0 ${baseWidth + 100} ${svgHeight + 100}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClick}
      >
        <motion.ellipse
          cx={centerBaseEllipse[0]}
          cy={centerBaseEllipse[1] + baseHeight}
          rx={baseWidth / 2}
          ry={baseDepth / 2}
          fill="grey"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 1.1, 2],
          }}
        />
        <motion.ellipse
          cx={centerBaseEllipse[0]}
          cy={centerBaseEllipse[1] + baseHeight}
          rx={baseWidth / 2}
          ry={baseDepth / 2}
          fill="grey"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.25,
            times: [0, 1.1, 2],
          }}
        />
        <motion.ellipse
          cx={centerBaseEllipse[0]}
          cy={centerBaseEllipse[1] + baseHeight}
          rx={baseWidth / 2}
          ry={baseDepth / 2}
          fill="grey"
          animate={{
            scale: [1, 2.5, 1],
            opacity: [1, 0, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
            times: [0, 1.1, 2],
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
        />
        <ellipse
          cx={centerBaseEllipse[0]}
          cy={centerBaseEllipse[1]}
          rx={baseWidth / 2}
          ry={baseDepth / 2}
          fill="#838383"
          stroke="black"
        />

        <motion.path
          d={`M${buttonTopLeft[0]} ${buttonTopLeft[1]} L${
            buttonBottomLeft[0]
          } ${buttonBottomLeft[1]} A ${buttonWidth / 2} ${
            buttonDepth / 2
          } 0 1 0 ${buttonBottomRight[0]} ${buttonBottomRight[1]} L${
            buttonTopRight[0]
          } ${buttonTopRight[1]}`}
          animate={{
            d: `M${buttonTopLeft[0]} ${
              buttonTopLeft[1] + buttonClickedHeight
            } L${buttonBottomLeft[0]} ${buttonBottomLeft[1]} A ${
              buttonWidth / 2
            } ${buttonDepth / 2} 0 1 0 ${buttonBottomRight[0]} ${
              buttonBottomRight[1]
            } L${buttonTopRight[0]} ${buttonTopRight[1] + buttonClickedHeight}`,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
          }}
          fill="#4F4F4F"
          stroke="black"
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
        />
      </svg>
    </div>
  );
}
