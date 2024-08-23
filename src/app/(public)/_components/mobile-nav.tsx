"use client";

import React, { ReactNode, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { UserButton } from "@components/auth/user-button";
import ThemeSwitch from "@components/theme-switch";
// import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { motion, useCycle } from "framer-motion";

interface NavLink {
  label: string;
  href: string;
}

const navItemsTop: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Materials", href: "/materials" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const navItemsBottom: NavLink[] = [
  { label: "Log In", href: "/login" },
  { label: "Sign Up", href: "/signup" },
];

const navbar = {
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

const variants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

/* const MobileNav = () => {
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

export default MobileNav; */

const MobileNav = () => {
  // const { theme } = useTheme();
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
        variants={navbar}
      />
      <motion.div
        variants={variants}
        className="absolute flex flex-col justify-between w-full px-10 py-16 h-screen overflow-y-auto"
      >
        <motion.ul variants={variants} className="grid gap-3">
          <MenuItem className="mx-auto">
            <Link href={"/landing"} onClick={() => toggleOpen()}>
              <Image
                src="/path-to-your-logo.svg"
                alt="Logo"
                className="h-12 w-auto"
                width={200}
                height={50}
              />
            </Link>
          </MenuItem>

          {navItemsTop.map((item, idx) => {
            const isLastItem = idx === navItemsTop.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                <MenuItem>
                  <Link
                    href={item.href}
                    onClick={() => toggleOpen()}
                    className={`flex justify-center w-full text-2xl text-black${
                      item.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>

                {!isLastItem && (
                  <MenuItem className="my-3 h-px w-full bg-gray-300 text-black" />
                )}
              </div>
            );
          })}
        </motion.ul>
        <motion.ul variants={variants} className="grid gap-3">
          {navItemsBottom.map((item, idx) => {
            const isLastItem = idx === navItemsBottom.length - 1; // Check if it's the last item

            return (
              <div key={idx}>
                <MenuItem>
                  <Link
                    href={item.href}
                    onClick={() => toggleOpen()}
                    className={`flex justify-center w-full text-2xl text-black${
                      item.href === pathname ? "font-bold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </MenuItem>

                {!isLastItem && (
                  <MenuItem className="my-3 h-px w-full bg-gray-300" />
                )}
              </div>
            );
          })}
        </motion.ul>
      </motion.div>
      <MenuToggle toggle={toggleOpen} />
    </motion.nav>
  );
};

export default MobileNav;

const MenuToggle = ({ toggle }: any) => (
  <button
    onClick={toggle}
    className="pointer-events-auto absolute right-4 top-[14px] z-30"
  >
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      className="text-black dark:text-white"
    >
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "currentColor" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#000000" }, // Black stroke in open variant
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, stroke: "currentColor" },
          open: { opacity: 0, stroke: "#000000" }, // Black stroke in open variant
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346", stroke: "currentColor" },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#000000" }, // Black stroke in open variant
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
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
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
