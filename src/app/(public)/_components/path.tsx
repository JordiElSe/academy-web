"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";

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

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "auto", overflow: "visible" }}
      viewBox={`0 0 ${svgWidth} ${svgHeight * repetitions}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="roadmapGradient"
          gradientUnits="userSpaceOnUse"
          x1={startPoint[0]}
          x2={startPoint[0]}
          y1="0"
          y2={svgHeight * repetitions}
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
        strokeWidth="4"
        fill="none"
      />
      <path
        ref={pathRef}
        d={d}
        stroke="url(#roadmapGradient)"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default Path;
