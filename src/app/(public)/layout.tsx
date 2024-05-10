import React from "react";
import Navbar from "./_components/navbar";
import MobileNav from "./_components/mobile-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-col relative min-h-full w-full bg-slate-300 dark:bg-slate-900">
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
