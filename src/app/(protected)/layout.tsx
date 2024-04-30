"use client";

import React, { useState, useCallback } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const [narrow, setNarrow] = useState(false);

  const handleSidebar = useCallback(() => {
    setNarrow((prevShowSSsidebar) => !prevShowSSsidebar);
  }, []);

  return (
    <div className="bg-light-base-100 dark:bg-dark-base-100 h-screen flex flex-row items-start">
      <Sidebar handleSidebar={handleSidebar} isNarrow={narrow} />
      <div
        className={`${
          narrow ? "ml-[5rem]" : "ml-[14rem]"
        } w-full h-full flex flex-col`}
      >
        <Navbar onMenuButtonClick={handleSidebar} />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
