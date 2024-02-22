import React from "react";
import Sidebar from "../../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden flex flex-row dark:bg-gray-900">
      <Sidebar />
      {children}
    </div>
  );
}
