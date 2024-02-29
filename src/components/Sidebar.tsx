"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import DashboardIcon from "./icons/DashboardIcon";
import RoadmapIcon from "./icons/RoadmapIcon";
import MaterialsIcon from "./icons/MaterialsIcon";
import CommunityIcon from "./icons/CommunityIcon";
import ContactIcon from "./icons/ContactIcon";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };
  const [isNarrow, setIsNarrow] = useState(false);
  const toggleIsNarrow = () => {
    setIsNarrow(!isNarrow);
  };

  return (
    <nav className="bg-slate-300 dark:bg-[#ffffffd2] shadow-md w-56 h-full sticky top-0 left-0">
      <div className="flex flex-col items-center h-full w-full">
        <Link href="/">
          <div> Logo </div>
        </Link>
        <div>
          <ul className="mt-10 flex flex-col items-start h-full w-full">
            <li className="text-xl transform transition duration-350 hover:scale-115 mt-8">
              <div className="flex items-center gap-4">
                <DashboardIcon color={theme === "dark" ? "white" : "#818181"} />
                <Link
                  href="/dashboard"
                  className="text-[#818181] dark:text-white"
                >
                  Home
                </Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115 mt-8">
              <div className="flex items-center gap-4">
                <RoadmapIcon color={theme === "dark" ? "white" : "#818181"} />
                <Link
                  href="/roadmap"
                  className="text-[#818181] dark:text-white"
                >
                  Roadmap
                </Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115 mt-8">
              <div className="flex items-center gap-4">
                <MaterialsIcon color={theme === "dark" ? "white" : "#818181"} />
                <Link
                  href="/materials"
                  className="text-[#818181] dark:text-white"
                >
                  Materials
                </Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115 mt-8">
              <div className="flex items-center gap-4">
                <CommunityIcon color={theme === "dark" ? "white" : "#818181"} />
                <Link
                  href="/community"
                  className="text-[#818181] dark:text-white"
                >
                  Community
                </Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115 mt-8">
              <div className="flex items-center gap-4">
                <ContactIcon color={theme === "dark" ? "white" : "#818181"} />
                <Link
                  href="/contact"
                  className="text-[#818181] dark:text-white"
                >
                  Contact
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/*         <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={`fixed top-0 w-[65%] sm:hidden h-screen bg-slate-300 dark:bg-slate-600 p-10 ease-in duration-500 ${
            menuOpen ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
            <div className="flex-col py-4">
            <ul>
              {navLinks.map((navLink) => (
                <li
                  onClick={handleNav}
                  key={navLink.label}
                  className="p-3 w-[60%] hover:border-b cursor-pointer text-lg"
                >
                  <Link href={navLink.href}>{navLink.label}</Link>
                </li>
              ))}
            </ul>
          </div> 
        </div>*/}
      </div>
    </nav>
  );
};

export default Sidebar;
