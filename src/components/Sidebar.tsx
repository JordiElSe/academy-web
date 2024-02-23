"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/dashboard" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Materials", href: "/materials" },
  { label: "Community", href: "/community" },
  { label: "Contact", href: "/contact" },
];

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
    <nav className="bg-slate-300 dark:bg-[#ffffff56] shadow-md w-56 h-full sticky top-0 left-0">
      <div className="flex flex-col items-center h-full w-full">
        <Link href="/">
          <div> Logo </div>
        </Link>
        <div>
          <ul className="mt-10 flex flex-col items-center h-full w-full">
            {navLinks.map((navLink) => (
              <li
                key={navLink.label}
                className="text-xl transform transition duration-350 hover:scale-115"
              >
                <Link href={navLink.href}>{navLink.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
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
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
