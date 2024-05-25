"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { icon: "🍅", label: "Roadmap A1-A2" },
  { icon: "🥬", label: "Roadmap A2-B1" },
  { icon: "🧀", label: "Roadmap B1-B2" },
  { icon: "🥕", label: "Roadmap B2-C1" },
  { icon: "🍌", label: "Roadmap C1-C2" },
];

export default function TabSwitch() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="w-[90%] h-80 mt-10 rounded-[5px] flex flex-col shadow overflow-hidden">
      <nav className="bg-gray-50 pt-1.5 px-1.5 rounded-[5px] border-b border-gray-200 h-11">
        <ul className="flex w-full">
          {tabs.map((item) => (
            <li
              key={item.label}
              className={`${
                item === selectedTab ? "bg-[#eee]" : ""
              } rounded-[5px] w-full bg-white cursor-pointer h-6 flex justify-center items-center min-w-0 relative select-none`}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div
                  className="absolute bottom-[-1px] left-0 right-0 h-px bg-[#8855ff]"
                  layoutId="underline"
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center items-center user-flex-grow select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Roadmap
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
