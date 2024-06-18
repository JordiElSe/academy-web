"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useTheme } from "next-themes";
import Stop from "./stop";

enum Positions {
  Left,
  Right,
  BottomLeft,
  BottomRight,
}

const Path: React.FC<{ svgWidth: number }> = ({ svgWidth }) => {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const [gradientStops, setGradientStops] = useState("0%, 0%");
  // const [isStopClicked, setIsStopClicked] = useState(false);
  const [stops, setStops] = useState<React.ReactNode[]>([]);
  const pathRef = useRef<SVGPathElement>(null);
  const pathLengthRef = useRef(0);

  // const toggleIsStopClicked = useCallback(() => {
  //   setIsStopClicked((prevState) => !prevState);
  // }, []);

  //Path + stops dimensions
  const strokeWidth = 5;
  const buttonTopMargin = 50;
  // const svgWidth = 1458.5;
  /*   const pathHeight = 900;
  const stopEffectDepth = 100;
  const svgHeight = svgWidth * 0.68; //1000; */
  const repetitions = 2;
  // Stops dimensions
  /*   const baseHeight = svgHeight * 0.013; //13;
  const baseWidth = svgWidth * 0.07; //100
  const baseDepth = baseHeight * 3;
  const buttonDepth = baseDepth / 2; */

  let startPoint = [750, buttonTopMargin];
  let endPoint1 = [750, 1000 / 2 + buttonTopMargin / 2];
  let endPoint2 = [750, 1000];
  let controlPoint1 = [0, buttonTopMargin];
  let controlPoint2 = [0, 1000 / 2 + buttonTopMargin / 2];
  let controlPoint3 = [1500, 1000 / 2 + buttonTopMargin / 2];
  let controlPoint4 = [1500, 1000];

  let d = "";

  for (let i = 0; i < repetitions; i++) {
    let yOffset = i * (1000 - buttonTopMargin);
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
        let yOffset = i * (1000 - buttonTopMargin);

        // Calculate positions for stops
        const stopPositions = [
          {
            x: 750 - 125,
            y: 0 + yOffset,
            pos: Positions.BottomRight,
          },

          {
            x: 187.5 - 125,
            y:
              buttonTopMargin +
              (1000 - buttonTopMargin) / 4 -
              260 / 2 +
              yOffset,
            pos: Positions.Right,
          },
          {
            x: 750 - 125,
            y: 1000 / 2 - buttonTopMargin / 2 + yOffset,
            pos: Positions.BottomLeft,
          },
          {
            x: 1312.5 - 125,
            y:
              buttonTopMargin +
              ((1000 - buttonTopMargin) * 3) / 4 -
              260 / 2 +
              yOffset,
            pos: Positions.Left,
          },
        ];

        // Push Stop components to the stops array
        stopPositions.forEach((pos, index) => {
          temp.push(
            <Stop
              key={`stop-${i}-${index}`}
              x={pos.x}
              y={pos.y}
              baseBottomY={buttonTopMargin}
              position={pos.pos}
              // onStopClick={toggleIsStopClicked}
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
        padding: "40 0 80 0",
      }}
      viewBox={`0 0 1500 ${
        buttonTopMargin + (1000 - buttonTopMargin) * repetitions + strokeWidth
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
          y2={1000 * repetitions + strokeWidth}
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
      <svg x={365} y={50 + 475 / 2 - 260 / 2} width={375} height={260}>
        <rect x={0} y={0} width={375} height={260} rx={5} ry={5} fill="white" />
      </svg>
      {/* <svg x={760} y={50 + 475 / 2 - 260 / 2} width={375} height={260}>
        <rect x={0} y={0} width={375} height={260} rx={5} ry={5} fill="white" />
      </svg>
      <svg x={365} y={641} width={375} height={258}>
        <rect x={0} y={0} width={375} height={258} rx={5} ry={5} fill="red" />
      </svg>
      <svg x={760} y={641} width={375} height={258}>
        <rect x={0} y={0} width={375} height={258} rx={5} ry={5} fill="red" />
      </svg> */}
    </svg>
  );
};

export default Path;
