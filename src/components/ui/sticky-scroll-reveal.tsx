"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes"; // Add this import

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ["start 25%", "end 65%"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log(latest);
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColorsLight = [
    "hsl(var(--background))",
    "hsl(var(--bg-200))",
    "hsl(var(--bg-300))",
  ];
  const backgroundColorsDark = [
    "hsl(var(--background))",
    "hsl(var(--bg-700))",
    "hsl(var(--bg-900))",
  ];

  const { theme } = useTheme();
  const backgroundColors =
    theme === "dark" ? backgroundColorsDark : backgroundColorsLight;

  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="flex flex-col md:flex-row justify-center relative space-y-4 md:space-y-0 md:space-x-10 rounded-md p-10"
      ref={ref}
    >
      <div className="div relative flex items-start px-4 mx-auto md:mx-0">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-900 dark:text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-700 dark:text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
              {/* Render the content div here for small screens, using the card's own content */}
              <div className="md:hidden mt-6">
                <div
                  style={{
                    background: linearGradients[index % linearGradients.length],
                  }}
                  className={cn(
                    "mb-20 h-60 w-full rounded-md bg-white",
                    contentClassName
                  )}
                >
                  {item.content ?? null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Keep the sticky version for md and above unchanged */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden md:block mb-20 h-60 w-80 rounded-md bg-white sticky top-[calc(50vh-7.5rem)]",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
