import React from "react";
import Navbar from "../../components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url('../../public/assets/bg2.jpg')] bg-cover bg-center filter blur-3xl"></div>
      <Navbar />
      {children}
    </div>
  );
}
