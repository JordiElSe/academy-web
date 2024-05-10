"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Separator } from "@/components/ui/separator";
import DashboardIcon from "@components/icons/dashboard-icon";
import RoadmapIcon from "@components/icons/roadmap-icon";
import MaterialsIcon from "@components/icons/materials-icon";
import CommunityIcon from "@components/icons/community-icon";
import ContactIcon from "@components/icons/contact-icon";
import DoubleArrowLeftIcon from "@components/icons/double-arrow-left-icon";
import ProfileIcon from "@components/icons/profile-icon";
import FeedbackIcon from "@components/icons/feedback-icon";

interface Props {
  handleSidebar: () => void;
  isNarrow: boolean;
}

const Sidebar: FC<Props> = ({ handleSidebar, isNarrow }) => {
  const { theme } = useTheme();
  const pathname = usePathname();

  type NavItem = {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    href: string;
  };

  const navItemsTop: NavItem[] = [
    { icon: DashboardIcon, label: "Dashboard", href: "/user/dashboard" },
    { icon: RoadmapIcon, label: "Roadmap", href: "/user/roadmap" },
    { icon: MaterialsIcon, label: "Materials", href: "/user/materials" },
    { icon: CommunityIcon, label: "Community", href: "/user/community" },
    { icon: ContactIcon, label: "Contact", href: "/user/contact" },
  ];

  const navItemsBottom: NavItem[] = [
    { icon: ProfileIcon, label: "Profile", href: "/user/profile" },
    { icon: FeedbackIcon, label: "Feedback", href: "/user/feedback" },
  ];

  return (
    <>
      <aside
        className={`hidden sm:flex h-full fixed top-0 overflow-hidden z-50 ${
          isNarrow ? "animate-w-shrink" : "animate-w-expand"
        }`}
      >
        <nav className="bg-slate-300 dark:bg-[rgb(31,55,98,0.93)] relative shadow-md h-full w-full">
          <div className="flex flex-col w-full">
            <Link className="mt-10" href="/">
              <div> Logo </div>
            </Link>
            <Separator className="h-1" />
            <div>
              <ul className="mt-10 flex flex-col h-full w-full">
                {navItemsTop.map((item) => (
                  <li
                    className={`pl-8 text-base transform transition duration-350 hover:scale-115 mt-8 ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-purple-500 to-white"
                        : ""
                    }`}
                    key={item.label}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        color={theme === "dark" ? "white" : "#434343"}
                      />
                      {!isNarrow && (
                        <Link
                          href={item.href}
                          className="text-[#434343] dark:text-white"
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="mt-10 flex flex-col h-full w-full">
                {navItemsBottom.map((item) => (
                  <li
                    className="text-base transform transition duration-350 hover:scale-115 mt-8"
                    key={item.label}
                  >
                    <div className="flex items-center gap-4">
                      <item.icon
                        color={theme === "dark" ? "white" : "#434343"}
                      />
                      {!isNarrow && (
                        <Link
                          href={item.href}
                          className="text-[#434343] dark:text-white"
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
            onClick={handleSidebar}
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
      </aside>
      {/* <div>
        <div
          className={`fixed top-20 w-full md:hidden h-full bg-slate-300 dark:bg-[rgb(31,55,98,0.93)] p-10 ease-in duration-500 ${
            showSSsidebar ? "left-0" : "left-[-100%]"
          }`}
        >
          <div className="flex flex-col items-center">
            <ul>
              {navItemsBottom.map((item) => (
                <li
                  className="p-3 hover:border-b cursor-pointer text-xl"
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
      </div> */}
    </>
  );
};

export default Sidebar;
