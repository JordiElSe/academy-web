"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dashboardIcon from "../../public/icons/dashboard_icon.svg";
import roadmapIcon from "../../public/icons/roadmap_icon.svg";
import materialsIcon from "../../public/icons/materials_icon.svg";
import communityIcon from "../../public/icons/community_icon.svg";
import contactIcon from "../../public/icons/contact_icon.svg";

const Sidebar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
            <li className="text-xl transform transition duration-350 hover:scale-115">
              <div className="flex items-center">
                <Image
                  src={dashboardIcon}
                  alt="dashboard"
                  width={25}
                  height={25}
                />
                <Link href="/dashboard">Home</Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115">
              <div className="flex items-center">
                <Image src={roadmapIcon} alt="roadmap" width={25} height={25} />
                <Link href="/roadmap">Roadmap</Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115">
              <div className="flex items-center">
                <Image
                  src={materialsIcon}
                  alt="materials"
                  width={25}
                  height={25}
                />
                <Link href="/materials">Materials</Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115">
              <div className="flex items-center">
                <Image
                  src={communityIcon}
                  alt="community"
                  width={25}
                  height={25}
                />
                <Link href="/community">Community</Link>
              </div>
            </li>
            <li className="text-xl transform transition duration-350 hover:scale-115">
              <div className="flex items-center">
                <Image src={contactIcon} alt="contact" width={25} height={25} />
                <Link href="/contact">Contact</Link>
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
