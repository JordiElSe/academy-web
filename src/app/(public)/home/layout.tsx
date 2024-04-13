import React from "react";
import Navbar from "@components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative h-screen overflow-hidden bg-gradient-to-r from-gray-950 to-gray-700">
      <Navbar />
      {children}
    </main>
  );
}
