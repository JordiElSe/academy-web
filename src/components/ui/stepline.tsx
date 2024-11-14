"use client";
import { throttle } from "lodash";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState, useMemo } from "react";

// Add custom hook for media query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
};

interface SteplineEntry {
  title: string;
  content: React.ReactNode;
}

export const Stepline = ({ data }: { data: SteplineEntry[] }) => {
  const isMdScreen = useMediaQuery("(min-width: 768px)");
  const topOffset = isMdScreen ? 64 : 0; // 64px (4rem) for md screens, 0 for smaller screens

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<HTMLDivElement[]>([]);
  const activeCirclesRef = useRef<boolean[]>(Array(data.length).fill(false));
  const lastCircleRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const [activeCircles, setActiveCircles] = useState<boolean[]>(
    Array(data.length).fill(false)
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 40%", "end 75%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Set the bar height based on the last circle's position
  useEffect(() => {
    if (ref.current && lastCircleRef.current) {
      const steplineRect = ref.current.getBoundingClientRect();
      const lastCircleRect = lastCircleRef.current.getBoundingClientRect();

      // Calculate the height based on the relative position within the container
      // Add 4rem (64px) to account for the top-16 offset of the bar
      const relativeTop = lastCircleRect.top - steplineRect.top - topOffset;

      // Use the greater of the relative position or container height
      setHeight(relativeTop + lastCircleRect.height);
    }
  }, [data.length, topOffset]);

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

            // Add 64px to account for the top-16 offset of the bar
            const reached =
              scrollValue * height >=
              circleRect.top - containerRect.top - topOffset;

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
    [height, scrollYProgress, topOffset]
  );

  useEffect(() => {
    // Run handleScroll on scroll change
    handleScroll();
    return scrollYProgress.on("change", handleScroll);
  }, [handleScroll, scrollYProgress]);

  return (
    <div
      className="flex flex-col md:flex-row w-full bg-white dark:bg-bg-700 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="w-full md:w-1/2 max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Getting Started!
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div
        ref={ref}
        className="w-full md:w-1/2 relative max-w-7xl mx-auto pb-20"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="md:sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-12 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-bg-700 flex items-center justify-center">
                <div
                  ref={(el) => {
                    if (el) {
                      circleRefs.current[index] = el;
                      if (index === data.length - 1) {
                        lastCircleRef.current = el; // Assign the ref for the last circle
                      }
                    }
                  }} // Assign ref to each circle
                  className={`h-6 w-6 rounded-full border flex items-center justify-center text-base font-medium ${
                    activeCircles[index]
                      ? "bg-neutral-400 border-neutral-500 dark:bg-neutral-500 dark:border-neutral-700 text-black dark:text-white" // Active color
                      : "bg-neutral-200 dark:bg-neutral-800 border-neutral-300 dark:border-neutral-700 text-neutral-500 dark:text-neutral-600" // Default color
                  }`}
                >
                  ✓
                </div>
              </div>
              <div className="hidden md:block relative w-full md:pl-20 md:text-2xl">
                <h3
                  className={`text-xl font-bold ${
                    activeCircles[index]
                      ? "text-neutral-800 dark:text-neutral-200"
                      : "text-neutral-500 dark:text-neutral-500"
                  }`}
                >
                  {item.title}
                </h3>
                <div
                  className={`${
                    activeCircles[index]
                      ? "text-neutral-800 dark:text-neutral-300"
                      : "text-neutral-600"
                  }`}
                >
                  {item.content}
                </div>
              </div>
            </div>

            <div className="md:hidden block relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className={`text-2xl mb-4 text-left font-bold ${
                  activeCircles[index]
                    ? "text-neutral-800 dark:text-neutral-200"
                    : "text-neutral-500 dark:text-neutral-500"
                }`}
              >
                {item.title}
              </h3>
              <div
                className={`${
                  activeCircles[index]
                    ? "text-neutral-800 dark:text-neutral-300"
                    : "text-neutral-600"
                }`}
              >
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 md:top-16 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-white dark:to-black to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-neutral-900 dark:bg-neutral-400 md:bg-gradient-to-t md:from-neutral-700 md:via-neutral-900 dark:md:from-neutral-200  dark:md:via-neutral-400 md:to-transparent md:from-[0%] md:via-[5%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
