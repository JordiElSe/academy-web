import React from "react";
import AuthNav from "../../components/AuthNav";
import Welcome from "../../../public/Untitled.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#FBFBFB] h-screen dark:bg-[#00040F]  flex flex-row items-start">
      <AuthNav />
      <div className="mt-20">
        <Image src={Welcome} alt="Welcome" width={400} height={400} />
        {children}
      </div>
    </div>
  );
}
