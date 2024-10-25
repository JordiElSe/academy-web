"use client";
import { throttle } from "lodash";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const activeCirclesRef = useRef<boolean[]>(Array(data.length).fill(false));
  const lastCircleRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [activeCircles, setActiveCircles] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  //   useEffect(() => {
  //     if (ref.current) {
  //       const rect = ref.current.getBoundingClientRect();
  //       setHeight(rect.height - 90);
  //     }
  //   }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Set the bar height based on the last circle's position
  useEffect(() => {
    if (ref.current && lastCircleRef.current) {
      const timelineRect = ref.current.getBoundingClientRect();
      const lastCircleRect = lastCircleRef.current.getBoundingClientRect();

      // Calculate the height from the top of the timeline to the bottom of the last circle
      setHeight(lastCircleRect.top + lastCircleRect.height - timelineRect.top);
    }
  }, [data.length]); // Re-run this effect if the data length changes

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const value = scrollYProgress.get();
  //       const newActiveCircles = [...activeCircles];

  //       circleRefs.current.forEach((circleRef, index) => {
  //         if (circleRef && ref.current) {
  //           const circleRect = circleRef.getBoundingClientRect();
  //           const containerRect = ref.current.getBoundingClientRect();

  //           // Determine if the height of motion.div (height * scroll progress) reached this circle
  //           const reached = value * height >= circleRect.top - containerRect.top;

  //           newActiveCircles[index] = reached;
  //         }
  //       });

  //       setActiveCircles(newActiveCircles);
  //     };

  //     // Run handleScroll whenever scrollYProgress changes
  //     handleScroll();
  //   }, [height, scrollYProgress, activeCircles]);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const scrollValue = scrollYProgress.get();
        const newActiveCircles = [...activeCirclesRef.current];
        let shouldUpdate = false;

        circleRefs.current.forEach((circleRef, index) => {
          if (circleRef && ref.current) {
            const circleRect = circleRef.getBoundingClientRect();
            const containerRect = ref.current.getBoundingClientRect();

            const reached =
              scrollValue * height >= circleRect.top - containerRect.top;

            if (reached !== activeCirclesRef.current[index]) {
              newActiveCircles[index] = reached;
              shouldUpdate = true;
            }
          }
        });

        if (shouldUpdate) {
          activeCirclesRef.current = newActiveCircles;
          setActiveCircles(newActiveCircles);
        }
      }, 100), // Adjust throttle timing as needed
    [height, scrollYProgress]
  );

  useEffect(() => {
    // Run handleScroll on scroll change
    handleScroll();
    return scrollYProgress.on("change", handleScroll);
  }, [handleScroll, scrollYProgress]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Getting Started!
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  ref={(el) => {
                    if (el) {
                      circleRefs.current[index] = el;
                      if (index === data.length - 1) {
                        lastCircleRef.current = el; // Assign the ref for the last circle
                      }
                    }
                  }} // Assign ref to each circle
                  className={`h-4 w-4 rounded-full p-2 border ${
                    activeCircles[index]
                      ? "bg-green-700 border-green-900" // Active color
                      : "bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700" // Default color
                  }`}
                />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
