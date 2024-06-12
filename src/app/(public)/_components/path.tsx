"use client";
import React, { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import Stop from "./stop";

const Path: React.FC<{ svgWidth: number }> = ({ svgWidth }) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [gradientStops, setGradientStops] = useState("0%, 0%");
  const [stops, setStops] = useState<React.ReactNode[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);

  //Path + stops dimensions
  const strokeWidth = 5;
  // const svgWidth = 1458.5;
  const svgHeight = svgWidth * 0.68; //1000;
  const repetitions = 5;
  // Stops dimensions
  const baseHeight = svgHeight * 0.013; //13;
  const baseWidth = svgWidth * 0.07; //100
  const baseDepth = baseHeight * 3;
  const buttonDepth = baseDepth / 2;

  let startPoint = [
    (svgWidth + strokeWidth) / 2,
    strokeWidth / 2 + (baseDepth * 2.5) / 2 - buttonDepth / 2,
  ];
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

  useEffect(() => {
    if (pathRef.current) {
      pathLengthRef.current = pathRef.current.getTotalLength();

      const temp: React.ReactNode[] = [];

      for (let i = 0; i < repetitions; i++) {
        let yOffset = i * svgHeight;

        // Calculate positions for stops
        const stopPositions = [
          {
            x: svgWidth / 2 - (baseWidth * 2.5) / 2,
            y: yOffset,
          },

          {
            x:
              pathRef.current.getPointAtLength(
                (i * pathLengthRef.current) / repetitions +
                  pathLengthRef.current / repetitions / 4
              ).x -
              (baseWidth * 2.5) / 2,
            y: svgHeight / 4 + yOffset,
          },
          {
            x: svgWidth / 2 - (baseWidth * 2.5) / 2,
            y: startPoint[1] + svgHeight / 2 + yOffset - (baseDepth * 2.5) / 2,
          },
          {
            x:
              pathRef.current.getPointAtLength(
                (i * pathLengthRef.current) / repetitions +
                  (pathLengthRef.current / repetitions / 4) * 3
              ).x -
              (baseWidth * 2.5) / 2,
            y: (svgHeight * 3) / 4 + yOffset,
          },
        ];

        // Push Stop components to the stops array
        stopPositions.forEach((pos, index) => {
          temp.push(
            <Stop
              key={`stop-${i}-${index}`}
              x={pos.x}
              y={pos.y}
              baseDepth={baseDepth}
              baseHeight={baseHeight}
              baseWidth={baseWidth}
            />
          );
        });
      }
      setStops(temp);
    }
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (pathLengthRef.current) {
      const progress = (latest * pathLengthRef.current) / pathLengthRef.current;
      const highlightStart = Math.max(0, progress - 0.03);
      setGradientStops(`${highlightStart * 100}%, ${progress * 100}%`);
    }
  });

  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "auto",
      }}
      viewBox={`0 0 ${svgWidth + strokeWidth} ${
        (svgHeight + strokeWidth / 2) * repetitions +
        strokeWidth / 2 +
        baseHeight * 2.5
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
      {stops}
    </svg>
  );
};

export default Path;
