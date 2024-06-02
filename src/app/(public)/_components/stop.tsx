import React from "react";
import { cn } from "@lib/utils";

const Stops: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn(className, "flex justify-center items-center")}>
      <div className="absolute w-16 h-16 bg-blue-500 rounded-full z-10"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay delay-300"></div>
      <div className="absolute w-16 h-16 bg-blue-200 opacity-50 rounded-full animate-pingWithDelay delay-600"></div>
    </div>
  );
};

export default Stops;
