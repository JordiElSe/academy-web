import React from "react";
import { cn } from "@lib/utils";

const Stops: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(className, "flex justify-center items-center")}>
      <div className="absolute w-9 h-9 bg-blue-300 rounded-xl border-2 border-slate-700  z-40"></div>
      <div className="absolute w-9 h-[2.75rem] bg-blue-500 border-2 border-slate-700 rounded-xl z-30 transform translate-y-1"></div>
      <div className="absolute w-16 h-16 bg-blue-300 rounded-3xl border-2 border-slate-700  z-20"></div>
      <div className="absolute w-16 h-[4.5rem] bg-blue-500 border-2 border-slate-700 rounded-3xl z-10 transform translate-y-1.5"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-3xl animate-pingWithDelay"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-2xl animate-pingWithDelay delay-300"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-3xl animate-pingWithDelay delay-600"></div>
    </div>
  );
};

export default Stops;
