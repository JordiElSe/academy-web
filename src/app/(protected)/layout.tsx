"use client";

import React, { useState, useCallback } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const [showSSsidebar, setShowSSsidebar] = useState(false);

  const handleSSsidebar = useCallback(() => {
    setShowSSsidebar((prevShowSSsidebar) => !prevShowSSsidebar);
  }, []);

  return (
    <div className="bg-light-base-100 dark:bg-dark-base-100 h-screen flex flex-col items-start">
      <Navbar onMenuButtonClick={handleSSsidebar} />
      <div className="w-full h-full flex flex-row">
        <Sidebar showSSsidebar={showSSsidebar} />
        {children}
      </div>
    </div>
  );
};

export default ProtectedLayout;
