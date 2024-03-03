import React from "react";
import AuthNav from "../../components/AuthNav";
import Welcome from "../../../public/Untitled.svg";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 h-screen dark:bg-gray-900 grid grid-cols-5 grid-rows-[auto,1fr]">
      <AuthNav className="col-span-full row-span-1" />
      <div className="col-start-2 col-span-4 row-start-2 row-span-1">
        <Image src={Welcome} alt="Welcome" width={400} height={400} />
        {children}
      </div>
    </div>
  );
}
