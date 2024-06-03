import React from "react";
import { cn } from "@lib/utils";

const Stops: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(className, "flex justify-center items-center")}>
      <div className="absolute w-16 h-16 bg-blue-300 rounded-full border-black border-2 z-20"></div>
      <div className="absolute w-16 h-[4.5rem] bg-blue-900 border-black border-2  rounded-full z-10 transform translate-y-1"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay delay-300"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay delay-600"></div>
    </div>
  );
};

export default Stops;
