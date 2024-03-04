"use client";

import React, { FC, useCallback, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import DashboardIcon from "./icons/DashboardIcon";
import RoadmapIcon from "./icons/RoadmapIcon";
import MaterialsIcon from "./icons/MaterialsIcon";
import CommunityIcon from "./icons/CommunityIcon";
import ContactIcon from "./icons/ContactIcon";
import DoubleArrowLeftIcon from "./icons/DoubleArrowLeft";
import MenuOpenIcon from "./icons/MenuOpenIcon";
import MenuCloseIcon from "./icons/MenuCloseIcon";
import UserIcon from "./icons/UserIcon";
import ThemeSwitch from "./ThemeSwitch";

interface Props {
  fullScreenMenu: boolean;
  onMenuButtonClick: () => void;
}
/* interface AuthNavProps {
  className?: string;
} */

const AuthNav: FC = () => {
  const [fullScreenMenu, setfullScreenMenu] = useState(false);

  const handleClick = useCallback(() => {
    setfullScreenMenu((prevfullScreenMenu) => !prevfullScreenMenu);
  }, []);

  return (
    <div className="dark:bg-[#00040F]">
      <Navbar fullScreenMenu={fullScreenMenu} onMenuButtonClick={handleClick} />
      <Sidebar
        fullScreenMenu={fullScreenMenu}
        onMenuButtonClick={handleClick}
      />
    </div>
  );
};

const Navbar: FC<Props> = ({ fullScreenMenu, onMenuButtonClick }) => {
  const { theme } = useTheme();
  return (
    <nav className="fixed h-20 w-full top-0 left-0 flex justify-between bg-white dark:bg-[#00040F]">
      <div
        onClick={onMenuButtonClick}
        className={`md:invisible ${
          fullScreenMenu ? "invisible" : ""
        } cursor-pointer pl-12 flex items-center`}
      >
        <MenuOpenIcon color={theme === "dark" ? "white" : "#818181"} />
      </div>
      <div className="flex items-center justify-between gap-4 h-full px-10">
        <ThemeSwitch />
        <UserIcon color={theme === "dark" ? "white" : "#818181"} />
        <div className="flex flex-col items-start">
          <span className="text-ml font-bold">John Doe</span>
          <span className="text-ml">johndoe@gmail.com</span>
        </div>
      </div>
    </nav>
  );
};

const Sidebar: FC<Props> = ({ fullScreenMenu, onMenuButtonClick }) => {
  const { theme } = useTheme();
  const [isNarrow, setIsNarrow] = useState(false);
  const toggleIsNarrow = () => {
    setIsNarrow(!isNarrow);
  };

  type NavItem = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  };

  const navItems: NavItem[] = [
    { icon: DashboardIcon, label: "Home", href: "/dashboard" },
    { icon: RoadmapIcon, label: "Roadmap", href: "/roadmap" },
    { icon: MaterialsIcon, label: "Materials", href: "/materials" },
    { icon: CommunityIcon, label: "Community", href: "/community" },
    { icon: ContactIcon, label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <div
        className={`hidden pt-20 md:flex h-screen sticky top-0 left-0 overflow-hidden ${
          isNarrow ? "animate-shrink" : "animate-expand"
        }`}
      >
        <nav className="bg-slate-300 dark:bg-[rgb(31,55,98,0.93)] relative shadow-md h-9/10 w-full rounded-tr-[10px] rounded-br-[10px]">
          <div className="flex flex-col items-center w-full">
            <Link className="mt-10" href="/">
              <div> Logo </div>
            </Link>
            <div>
              <ul className="mt-10 flex flex-col items-start h-full w-full">
                {navItems.map((item) => (
                  <li
                    className="text-xl transform transition duration-350 hover:scale-115 mt-8"
                    key={item.label}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        color={theme === "dark" ? "white" : "#818181"}
                      />
                      {!isNarrow && (
                        <Link
                          href={item.href}
                          className="text-[#818181] dark:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div
            onClick={toggleIsNarrow}
            className="absolute bottom-0 right-0 cursor-pointer mr-5 mb-5"
          >
            <DoubleArrowLeftIcon
              className={`transition transform duration-300 ${
                isNarrow ? "rotate-180" : ""
              }`}
              color={theme === "dark" ? "white" : "#818181"}
            />
          </div>
        </nav>
      </div>
      <div>
        <div
          className={`fixed top-0 w-[65%] md:hidden h-screen bg-slate-300 dark:bg-[rgb(31,55,98,0.93)] p-10 ease-in duration-500 ${
            fullScreenMenu ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={onMenuButtonClick} className="cursor-pointer">
              <MenuCloseIcon color={theme === "dark" ? "white" : "#818181"} />
            </div>
          </div>
          <div className="flex-col py-4">
            <ul>
              {navItems.map((item) => (
                <li
                  className="p-3 w-[60%] hover:border-b cursor-pointer text-xl"
                  key={item.label}
                >
                  <div className="flex items-center gap-4">
                    <item.icon color={theme === "dark" ? "white" : "#818181"} />
                    {!isNarrow && (
                      <Link
                        href={item.href}
                        className="text-[#818181] dark:text-white"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthNav;
