import React from "react";
import Navbar from "./_components/navbar";
import MobileNav from "./_components/mobile-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <MobileNav />
      <main className="relative overflow-hidden">
        <div>{children}</div>
      </main>
    </>
  );
}
