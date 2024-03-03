import React from "react";
import AuthNav from "../../components/AuthNav";
import Welcome from "../../../public/Untitled.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden flex flex-row dark:bg-gray-900">
      <AuthNav />
      <Image src={Welcome} alt="Welcome" width={400} height={400} />
      {children}
    </div>
  );
}
