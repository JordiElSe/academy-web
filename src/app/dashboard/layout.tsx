"use client";

import React, { useState, useCallback } from "react";
import AuthNavBar from "@/components/AuthNavBar";
import Sidebar from "@/components/SideBar";
import Welcome from "../../../public/Untitled.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showSSsidebar, setShowSSsidebar] = useState(false);

  const handleSSsidebar = useCallback(() => {
    setShowSSsidebar(!showSSsidebar);
  }, []);

  return (
    <div className="bg-[#FBFBFB] h-screen dark:bg-[#00040F]  flex flex-col items-start">
      <AuthNavBar onMenuButtonClick={handleSSsidebar} />
      <div className="w-full h-full mt-20 bg-white dark:bg-[#00040F] flex flex-row">
        <Sidebar showSSsidebar={showSSsidebar} />
        <div>
          <Image src={Welcome} alt="Welcome" width={400} height={400} />
          {children}
        </div>
      </div>
    </div>
  );
}
