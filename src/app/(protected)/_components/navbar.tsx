"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "@components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="flex justify-between items-center p-4 rounded-xl w-full shadow-sm bg-gray-600">
      <div className="flex gap-x-2">
        <Button
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">Server</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">Client</Link>
        </Button>
        <Button
          asChild
          variant={pathname === "/dashboard" ? "default" : "outline"}
        >
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div>
      <UserButton />
    </div>
  );
};
