"use client";
import React, { useState, useRef, useEffect } from "react";
import Stop from "./stop";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const Path = () => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [gradientStops, setGradientStops] = useState("0%, 0%");
  const pathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);

  useEffect(() => {
    if (pathRef.current) {
      pathLengthRef.current = pathRef.current.getTotalLength();
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathLengthRef.current) {
      const progress = (latest * pathLengthRef.current) / pathLengthRef.current;
      const highlightStart = Math.max(0, progress - 0.03);
      setGradientStops(`${highlightStart * 100}%, ${progress * 100}%`);
    }
  });

  let strokeWidth = 5;
  let svgWidth = 1458.5;
  let svgHeight = 1000;
  let repetitions = 2;

  let startPoint = [(svgWidth + strokeWidth) / 2, strokeWidth / 2 + 30];
  let endPoint1 = [startPoint[0], startPoint[1] + svgHeight / 2];
  let endPoint2 = [startPoint[0], startPoint[1] + svgHeight];
  let controlPoint1 = [startPoint[0] - svgWidth / 2, startPoint[1]];
  let controlPoint2 = [
    startPoint[0] - svgWidth / 2,
    startPoint[1] + svgHeight / 2,
  ];
  let controlPoint3 = [
    startPoint[0] + svgWidth / 2,
    startPoint[1] + svgHeight / 2,
  ];
  let controlPoint4 = [startPoint[0] + svgWidth / 2, startPoint[1] + svgHeight];

  let d = "";

  for (let i = 0; i < repetitions; i++) {
    let yOffset = i * svgHeight;
    d += `M${startPoint[0]} ${startPoint[1] + yOffset}C${controlPoint1[0]} ${
      controlPoint1[1] + yOffset
    } ${controlPoint2[0]} ${controlPoint2[1] + yOffset} ${endPoint1[0]} ${
      endPoint1[1] + yOffset
    }C${controlPoint3[0]} ${controlPoint3[1] + yOffset} ${controlPoint4[0]} ${
      controlPoint4[1] + yOffset
    } ${endPoint2[0]} ${endPoint2[1] + yOffset}`;
  }

  const baseHeight = 13;
  const baseWidth = 100;
  const baseDepth = 35;
  const buttonHeight = baseHeight;
  const [buttonClickedHeight, setButtonClickedHeight] = useState(0);
  const buttonWidth = baseWidth * 0.58;
  const buttonDepth = baseDepth / 2;
  // const svgHeight = baseHeight + buttonHeight + baseDepth / 2 + buttonDepth;

  const centerBaseEllipse = [startPoint[0], startPoint[1] - 5];
  const centerButtonEllipse = [startPoint[0], startPoint[1] - 5 - buttonHeight];
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
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "auto",
      }}
      viewBox={`0 0 ${svgWidth + strokeWidth} ${
        (svgHeight + strokeWidth / 2) * repetitions + strokeWidth / 2
      }`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="roadmapGradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1="0"
          y2={(svgHeight + strokeWidth / 2) * repetitions + strokeWidth / 2}
        >
          <stop offset="0%" stopColor="#264DFF" stopOpacity="0" />
          <stop
            offset={gradientStops.split(",")[0]}
            stopColor="#002EFF"
            stopOpacity="0.4"
          />
          <stop offset={gradientStops.split(",")[1]} stopColor="#002EFF" />
          <stop
            offset={gradientStops.split(",")[1]}
            stopColor="green"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      <path
        ref={pathRef}
        d={d}
        stroke={theme === "dark" ? "white" : "grey"}
        opacity={0.75}
        strokeWidth={strokeWidth}
        fill="none"
      />
      <path
        ref={pathRef}
        d={d}
        stroke="url(#roadmapGradient)"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={centerBaseEllipse[1] + baseHeight - 5}
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
          repeatDelay: 0.5,
        }}
      />
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={centerBaseEllipse[1] + baseHeight - 5}
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
          repeatDelay: 0.5,
        }}
      />
      <motion.ellipse
        cx={centerBaseEllipse[0]}
        cy={centerBaseEllipse[1] + baseHeight - 5}
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
          repeatDelay: 0.5,
        }}
      />
      <path
        onClick={handleClick}
        d={`M${baseTopLeft[0]} ${baseTopLeft[1]} L${baseBottomLeft[0]} ${
          baseBottomLeft[1]
        } A ${baseWidth / 2} ${baseDepth / 2} 0 1 0 ${baseBottomRight[0]} ${
          baseBottomRight[1]
        } L${baseTopRight[0]} ${baseTopRight[1]}`}
        fill="#4F4F4F"
        stroke="black"
      />
      <ellipse
        onClick={handleClick}
        cx={centerBaseEllipse[0]}
        cy={centerBaseEllipse[1]}
        rx={baseWidth / 2}
        ry={baseDepth / 2}
        fill="#838383"
        stroke="black"
      />

      <motion.path
        onClick={handleClick}
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
      />
      <motion.ellipse
        onClick={handleClick}
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
  );
};

export default Path;
