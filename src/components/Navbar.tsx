"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Materials", href: "/materials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-300 dark:bg-slate-600 shadow-md h-24 w-full fixed">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <div> Logo </div>
        </Link>
        <div>
          <ul className="hidden sm:flex">
            {navLinks.map((navLink) => (
              <li
                key={navLink.label}
                className="ml-10 text-xl transform transition duration-350 hover:scale-115"
              >
                <Link href={navLink.href}>{navLink.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="hidden sm:flex">
            <li
              key="Login"
              className="ml-10 transform transition duration-350 hover:scale-115 text-xl"
            >
              <Link href="/login">Login</Link>
            </li>
            <li
              key="Signup"
              className="ml-10 transform transition duration-350 hover:scale-115 text-xl"
            >
              <Link href="/signup">Signup</Link>
            </li>
            <li className="ml-10 transform transition duration-350 hover:scale-115 text-xl">
              <ThemeSwitch />
            </li>
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

export default Navbar;
