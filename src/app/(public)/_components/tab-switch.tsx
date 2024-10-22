"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Path from "./path";
import StopContent from "./stop-content";

const tabs = [
  { label: "Roadmap A1-A2" },
  { label: "Roadmap A2-B1" },
  { label: "Roadmap B1-B2" },
  { label: "Roadmap B2-C1" },
  { label: "Roadmap C1-C2" },
];

export default function TabSwitch() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [pathWidth, setPathWidth] = useState(0);
  const pathRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pathRef.current) {
      console.log(pathRef.current.offsetWidth);
      setPathWidth(pathRef.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-[90%] h-full rounded-2xl flex flex-col shadow overflow-auto">
      <nav className="bg-gray-50 border-b-[2px] border-gray-300 h-14">
        <ul className="flex w-full h-full items-center">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${
                item === selectedTab ? "bg-[#eee]" : ""
              } w-full h-full bg-gray-50 dark:bg-slate-600 cursor-pointer flex justify-center items-center min-w-0 relative select-none`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-[#8855ff]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center w-full h-full items-center select-none bg-gray-50 dark:bg-slate-600 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            ref={pathRef}
            className="relative w-full h-full" /* px-4 py-4 xl:px-24 xl:py-6" */
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {pathWidth > 0 && <Path repetitions={5} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
