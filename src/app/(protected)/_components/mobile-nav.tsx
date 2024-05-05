"use client";

import React, { ReactNode, useState, useRef, useEffect } from "react";
import Link from "next/link";

import { UserButton } from "@components/auth/user-button";
import ThemeSwitch from "@components/theme-switch";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import DashboardIcon from "@components/icons/dashboard-icon";
import RoadmapIcon from "@components/icons/roadmap-icon";
import MaterialsIcon from "@components/icons/materials-icon";
import CommunityIcon from "@components/icons/community-icon";
import ContactIcon from "@components/icons/contact-icon";
import ProfileIcon from "@components/icons/profile-icon";
import FeedbackIcon from "@components/icons/feedback-icon";

import { delay, motion, useCycle } from "framer-motion";

type NavItem = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

const navItemsTop: NavItem[] = [
  { icon: DashboardIcon, label: "Dashboard", href: "/dashboard" },
  { icon: RoadmapIcon, label: "Roadmap", href: "/roadmap" },
  { icon: MaterialsIcon, label: "Materials", href: "/materials" },
  { icon: CommunityIcon, label: "Community", href: "/community" },
  { icon: ContactIcon, label: "Contact", href: "/contact" },
];

const navItemsBottom: NavItem[] = [
  { icon: ProfileIcon, label: "Profile", href: "/profile" },
  { icon: FeedbackIcon, label: "Feedback", href: "/feedback" },
];

const sidebar = {
  open: {
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
      delay: 0.35,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.35 },
  },
  closed: {
    transition: { staggerChildren: 0.02, staggerDirection: -1 },
  },
};

const MobileNav = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      className={`fixed inset-0 z-50 w-full md:hidden ${
        isOpen ? "" : "pointer-events-none"
      }`}
      ref={containerRef}
    >
      <motion.div
        className="absolute inset-0 right-0 w-full bg-white"
        variants={sidebar}
      />
      <motion.div
        variants={variants}
        className="absolute flex flex-col justify-between w-full px-10 py-16 h-screen overflow-y-auto"
      >
        <motion.ul variants={variants} className="grid gap-8 justify-center">
          <MenuItem className="mx-auto">
            <Link href={"/landing"} onClick={() => toggleOpen()}>
              <img
                src="/path-to-your-logo.svg"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </MenuItem>

          {navItemsTop.map((item, idx) => {
            const isLastItem = idx === navItemsTop.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                <MenuItem className="flex gap-3 items-center">
                  <item.icon color={theme === "dark" ? "white" : "#434343"} />
                  <Link
                    href={item.href}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${
                      item.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>

                {/* {!isLastItem && (
                <MenuItem className="my-3 h-px w-full bg-gray-300" />
              )} */}
              </div>
            );
          })}
        </motion.ul>
        <motion.ul variants={variants} className="grid gap-8 justify-center">
          {navItemsBottom.map((item, idx) => {
            const isLastItem = idx === navItemsBottom.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                <MenuItem className="flex gap-3 items-center">
                  <item.icon color={theme === "dark" ? "white" : "#434343"} />
                  <Link
                    href={item.href}
                    onClick={() => toggleOpen()}
                    className={`flex w-full text-2xl ${
                      item.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>
              </div>
            );
          })}
        </motion.ul>
      </motion.div>
      <MenuToggle toggle={toggleOpen} />
      <div className="flex flex-row gap-2 pointer-events-auto absolute right-4 top-[12px] z-30">
        <ThemeSwitch />
        <UserButton />
      </div>
    </motion.nav>
  );
};

export default MobileNav;

const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute left-4 top-[14px] z-30"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

const MenuItem = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

const MenuItemVariants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
    transformOrigin: "left",
  },
  closed: {
    scale: 0.5,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.1,
    },
    transformOrigin: "left",
  },
};

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  return dimensions.current;
};
