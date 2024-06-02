"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";

const Path = () => {
  const { scrollYProgress } = useScroll();
  const [gradientStops, setGradientStops] = useState("0%, 100%");
  const pathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      pathLengthRef.current = pathRef.current.getTotalLength();
    }
    const updateGradientStops = () => {
      if (pathLengthRef.current) {
        const progress =
          (scrollYProgress.get() * pathLengthRef.current) /
          pathLengthRef.current;
        const highlightStart = Math.max(0, progress - 0.05);
        setGradientStops(`${highlightStart * 100}%, ${progress * 100}%`);
      }
    };

    const unsubscribe = scrollYProgress.onChange(updateGradientStops);
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log("gradientStops", gradientStops);
  }, [gradientStops]);

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

  /*   const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, pathLength]), {
    stiffness: 500,
    damping: 90,
  }); */

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "fit", overflow: "visible" }}
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
            stopOpacity="0.2"
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
        stroke="url(#roadmapGradient)"
        strokeWidth="3"
        fill="none"
      />
      <path
        ref={pathRef}
        d={d}
        stroke="grey"
        opacity={0.2}
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};

export default Path;

/* d="M801.001 1C1867.66 1 1867.66 616.385 801.001 616.385C-265.667 616.385 -265.667 1231.77 801 1231.77C1867.66 1231.77 1867.66 1847.16 801.009 1847.16C-265.667 1847.16 -265.667 2462.54 801.009 2462.54C1867.66 2462.54 1867.66 3077.92 801.009 3077.92C-265.667 3077.92 -265.667 3693.31 801.009 3693.31C1867.66 3693.31 1867.66 4308.69 801.009 4308.69C-265.667 4308.69 -265.667 4924.08 801.009 4924.08C1867.66 4924.08 1867.66 5539.46 801.009 5539.46C-265.667 5539.46 -265.667 6154.85 801.009 6154.85C1867.66 6154.85 1867.66 6770.23 801.009 6770.23C-265.667 6770.23 -265.667 7385.62 801.009 7385.62C1867.66 7385.62 1867.66 8001 801.009 8001" */
