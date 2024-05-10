import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main /* className="grid grid-cols-6 h-full w-full ml-20 overflow-hidden bg-gradient-to-r from-white to-white-700" */
    >
      {children}
    </main>
  );
}
