"use client";

import React, { useState } from "react";
import Link from "next/link";
import ThemeSwitch from "@components/theme-switch";
import MenuOpenIcon from "@components/icons/menu-open-icon";
import MenuCloseIcon from "@components/icons/menu-close-icon";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@components/auth/login-button";
import { RegisterButton } from "@components/auth/register-button";

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
  const { theme } = useTheme();
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav
      className={` ${
        menuOpen
          ? "bg-[#cbd5e1] dark:bg-[#3b3b3b]"
          : "bg-[#cbd5e1a1] dark:bg-[#3b3b3ba1]"
      } shadow-md h-20 w-full sticky top-0 left-0`}
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Button asChild variant="navbar">
          <Link href="/landing">Logo</Link>
        </Button>
        <div>
          <ul className="hidden lg:flex">
            {navLinks.map((navLink) => (
              <li
                key={navLink.label}
                className="ml-10" /*transform transition duration-350 hover:scale-115" */
              >
                <Button asChild variant="navbar">
                  <Link href={navLink.href}>{navLink.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className="hidden lg:flex">
            <li key="Login" className="ml-10">
              <LoginButton mode="modal" asChild>
                <Button variant="navbar" size="lg">
                  Sign In
                </Button>
              </LoginButton>
            </li>
            <li key="Signup" className="ml-10">
              <RegisterButton mode="modal" asChild>
                <Button variant="navbar" size="lg">
                  Sign Up
                </Button>
              </RegisterButton>
            </li>
            <li className="ml-10 transform transition duration-350 hover:scale-115 text-xl cursor-pointer flex justify-center items-center">
              <ThemeSwitch />
            </li>
          </ul>
        </div>
        {!menuOpen ? (
          <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
            <MenuOpenIcon color={theme === "dark" ? "white" : "#818181"} />
          </div>
        ) : (
          <div onClick={handleNav} className="cursor-pointer">
            <MenuCloseIcon color={theme === "dark" ? "white" : "#818181"} />
          </div>
        )}

        <div
          className={`fixed top-20 left-0 w-full lg:hidden h-screen bg-slate-300 dark:bg-[#3b3b3b] flex flex-col justify-start items-center transition-all duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex-col">
            <ul>
              {navLinks.map((navLink) => (
                <li
                  onClick={handleNav}
                  key={navLink.label}
                  className="p-5 cursor-pointer text-xl"
                >
                  <Link className="hover:border-b" href={navLink.href}>
                    {navLink.label}
                  </Link>
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
