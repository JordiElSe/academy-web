"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@components/auth/user-button";
import ThemeSwitch from "@components/theme-switch";

import DashboardIcon from "@components/icons/dashboard-icon";
import RoadmapIcon from "@components/icons/roadmap-icon";
import MaterialsIcon from "@components/icons/materials-icon";
import CommunityIcon from "@components/icons/community-icon";
import ContactIcon from "@components/icons/contact-icon";
import ProfileIcon from "@components/icons/profile-icon";
import MenuOpenIcon from "@components/icons/menu-open-icon";
import FeedbackIcon from "@components/icons/feedback-icon";

import { motion, useCycle } from "framer-motion";

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
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const MobileNav = () => {
  return (
    <nav className="fixed top-0 left-0 h-12 w-full flex justify-end bg-white z-40">
      <div className="flex items-center justify-between gap-4 h-full px-10">
        <ThemeSwitch />
        <UserButton />
        <MenuOpenIcon />
      </div>
    </nav>
  );
};

export default MobileNav;
