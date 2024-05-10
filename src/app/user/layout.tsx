"use client";

import React, { useState, useCallback } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import MobileNav from "./_components/mobile-nav";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const [narrow, setNarrow] = useState(false);

  const handleSidebar = useCallback(() => {
    setNarrow((prevShowSSsidebar) => !prevShowSSsidebar);
  }, []);

  return (
    <>
      <div className="hidden bg-light-base-100 dark:bg-dark-base-100 h-screen sm:flex flex-row items-start">
        <Sidebar handleSidebar={handleSidebar} isNarrow={narrow} />
        <div
          className={`${
            narrow ? "animate-ml-shrink" : "animate-ml-expand"
          } w-full h-full flex flex-col`}
        >
          <Navbar />
          {children}
        </div>
      </div>
      <div className="sm:hidden flex flex-col items-center justify-center h-screen w-screen">
        <MobileNav />
        {children}
      </div>
    </>
  );
};

export default ProtectedLayout;
