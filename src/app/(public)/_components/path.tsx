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

  let strokeWidth = 15;
  let svgWidth = 1458.5;
  let svgHeight = 1000;
  let repetitions = 2;

  let startPoint = [(svgWidth + strokeWidth) / 2, strokeWidth / 2];
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
    </svg>
  );
};

export default Path;
