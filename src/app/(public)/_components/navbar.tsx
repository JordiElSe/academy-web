"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
// import Link from "next/link";
import ThemeSwitch from "@components/theme-switch";
/* import MenuOpenIcon from "@components/icons/menu-open-icon";
import MenuCloseIcon from "@components/icons/menu-close-icon";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button"; */
import { LoginButton } from "@components/auth/login-button";
import { RegisterButton } from "@components/auth/register-button";

/* interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Materials", href: "/materials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
]; */

const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial={{ opacity: 0.0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        // delay: -5,
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full"
      // style={{ transform: "none" }}
    >
      <div className="hidden lg:block w-full">
        <div className="w-full flex relative justify-between px-4 py-3 rounded-lg transition duration-200 bg-neutral-100 dark:bg-neutral-900 mx-auto">
          <div className="flex flex-row gap-2 items-center">
            <a
              className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
              href="/"
            >
              {/* <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
              >
                <circle cx="17.5" cy="17.5" r="17.5" fill="white"></circle>
                <path
                  d="M11.0389 19.8912L11.0392 28.5579C12.6769 28.5579 14.0028 27.2273 13.9972 25.5897L13.9712 18.071L13.9899 13.8938C13.9996 11.7406 15.753 10.003 17.9061 10.0126C20.0593 10.0223 21.797 11.7756 21.7873 13.9288L21.7686 18.106L21.7686 18.7764C21.7686 19.3921 22.2677 19.8912 22.8833 19.8911C23.499 19.8911 23.998 19.392 23.998 18.7764L23.998 13.5232C23.998 9.95254 21.1035 7.05796 17.5328 7.05796C13.9735 7.05796 11.0836 9.93487 11.0677 13.4942L11.0389 19.8912Z"
                  fill="#111B21"
                ></path>
              </svg> */}
              <span className="text-black dark:text-white font-bold">
                Sounds of Catalan
              </span>
            </a>
            <div className="flex items-center gap-1.5">
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/about"
              >
                About
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/roadmap"
              >
                Roadmap
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/materials"
              >
                Materials
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/pricing"
              >
                Pricing
              </a>
              <a
                className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                href="/contact"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="ml-10 transform transition duration-350 hover:scale-115 text-xl cursor-pointer flex justify-center items-center">
              <ThemeSwitch />
            </div>
            <LoginButton mode="modal" asChild>
              <a
                className="group hover:-translate-y-0.5 active:scale-[0.98] relative z-10 bg-transparent hover:border-secondary hover:bg-secondary/50 border border-transparent text-black dark:text-white text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center"
                href="/register"
              >
                Log In
              </a>
            </LoginButton>
            <RegisterButton mode="modal" asChild>
              <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset]">
                Sign Up
              </button>
            </RegisterButton>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
