"use client";

import React, { useState, useCallback } from "react";
import AuthNavBar from "@/components/AuthNavBar";
import Sidebar from "@/components/SideBar";
import Welcome from "../../../public/Untitled.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSSsidebar, setShowSSsidebar] = useState(false);

  const handleSSsidebar = useCallback(() => {
    setShowSSsidebar((prevShowSSsidebar) => !prevShowSSsidebar);
  }, []);

  return (
    <div className="bg-light-base-100 dark:bg-dark-base-100 h-screen flex flex-col items-start">
      <AuthNavBar onMenuButtonClick={handleSSsidebar} />
      <div className="w-full h-full flex flex-row">
        <Sidebar showSSsidebar={showSSsidebar} />
        <div>
          <Image src={Welcome} alt="Welcome" width={400} height={400} />
          {children}
        </div>
      </div>
    </div>
  );
}
