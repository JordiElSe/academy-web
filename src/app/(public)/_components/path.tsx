"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const Path = () => {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  console.log("pathLength", pathLength);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  let svgWidth = 1458.5;
  let svgHeight = 1000;
  let repetitions = 5;
  let controlPoint1 = [0, 0];
  let controlPoint2 = [svgWidth, svgHeight];
  let startPoint = [svgWidth / 2, 0];
  let endPoint1 = [svgWidth / 2, svgHeight / 2];
  let endPoint2 = [svgWidth / 2, svgHeight];

  let d = "";

  for (let i = 0; i < repetitions; i++) {
    let yOffset = i * svgHeight;
    d += `M${startPoint[0]} ${startPoint[1] + yOffset}C${controlPoint1[0]} ${
      controlPoint1[1] + yOffset
    } ${controlPoint1[0]} ${endPoint1[1] + yOffset} ${endPoint1[0]} ${
      endPoint1[1] + yOffset
    }C${controlPoint2[0]} ${endPoint1[1] + yOffset} ${controlPoint2[0]} ${
      endPoint2[1] + yOffset
    } ${endPoint2[0]} ${endPoint2[1] + yOffset}`;
  }
  const { scrollYProgress } = useScroll();

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, svgHeight * repetitions]),
    {
      stiffness: 500,
      damping: 90,
    }
  );

  return (
    <motion.svg
      /* width="1602"
      height="8002" */
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", overflow: "visible" }}
      viewBox={`0 0 ${svgWidth} ${svgHeight * repetitions}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        ref={pathRef}
        d={d}
        fill="none"
        strokeOpacity="0.16"
        transition={{
          duration: 10,
        }}
        stroke="black"
        strokeWidth="10"
      />

      <motion.path
        fill="none"
        stroke="url(#gradient)"
        className="motion-reduce:hidden"
        transition={{
          duration: 10,
        }}
        /* initial={{ pathLength: 1 }}
        style={{ pathLength: scrollYProgress }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1, 
        }} */
        d={d}
        /* style={{
          strokeDasharray: pathLength,
          strokeDashoffset: dashOffset,
        }} */
        strokeWidth="10"
      />
      <defs>
        <motion.linearGradient
          id="gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="0"
          y1="0"
          y2={y2}
        >
          <stop stopColor="#5876FE" stopOpacity="1"></stop>
          <stop offset="0.96" stopColor="#5876FE"></stop>
          <stop offset="1" stopColor="#5876FE" stopOpacity="0"></stop>
        </motion.linearGradient>
      </defs>
    </motion.svg>
  );
};

export default Path;

/* d="M801.001 1C1867.66 1 1867.66 616.385 801.001 616.385C-265.667 616.385 -265.667 1231.77 801 1231.77C1867.66 1231.77 1867.66 1847.16 801.009 1847.16C-265.667 1847.16 -265.667 2462.54 801.009 2462.54C1867.66 2462.54 1867.66 3077.92 801.009 3077.92C-265.667 3077.92 -265.667 3693.31 801.009 3693.31C1867.66 3693.31 1867.66 4308.69 801.009 4308.69C-265.667 4308.69 -265.667 4924.08 801.009 4924.08C1867.66 4924.08 1867.66 5539.46 801.009 5539.46C-265.667 5539.46 -265.667 6154.85 801.009 6154.85C1867.66 6154.85 1867.66 6770.23 801.009 6770.23C-265.667 6770.23 -265.667 7385.62 801.009 7385.62C1867.66 7385.62 1867.66 8001 801.009 8001" */
