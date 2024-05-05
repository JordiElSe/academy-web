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
  const { theme } = useTheme();

  return (
    <nav
      className={
        "bg-[#cbd5e1a1] dark:bg-[#3b3b3ba1] shadow-md h-20 w-full sticky top-0 left-0 z-10"
      }
    >
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Button asChild variant="navbar">
          <Link href="/landing">Logo</Link>
        </Button>
        <div>
          <ul className="flex">
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
          <ul className="flex">
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
      </div>
    </nav>
  );
};

export default Navbar;
