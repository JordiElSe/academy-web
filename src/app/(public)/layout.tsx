import React from "react";
import Navbar from "./_components/navbar";
import MobileNav from "./_components/mobile-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-col relative h-screen w-screeen overflow-hidden bg-gradient-to-r from-gray-950 to-gray-700">
      <div className="hidden sm:flex flex-col items-center ">
        <Navbar />
        {children}
      </div>
      <div className="sm:hidden flex flex-col items-center">
        <MobileNav />
        {children}
      </div>
    </main>
  );
}
