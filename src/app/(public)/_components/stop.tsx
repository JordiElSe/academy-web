import React from "react";

const Stops: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="absolute w-16 h-16 bg-blue-600 rounded-full z-10"></div>
      <div className="absolute w-16 h-16 bg-blue-500 opacity-50 rounded-full animate-pingWithDelay"></div>
      <div className="absolute w-16 h-16 bg-blue-500 opacity-50 rounded-full animate-pingWithDelay delay-300"></div>
      <div className="absolute w-16 h-16 bg-blue-500 opacity-50 rounded-full animate-pingWithDelay delay-600"></div>
    </div>
  );
};
/* return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <div className="absolute w-full h-full rounded-full border-[3px] border-blue-100 animate-fade-in-out"></div>
      <div className="absolute w-5/6 h-5/6 rounded-full border-[3px] border-blue-700 animate-fade-in-out"></div>
      <div className="absolute w-2/3 h-2/3 rounded-full border-[3px] border-blue-400 animate-fade-in-out"></div>
      <div className="absolute w-1/2 h-1/2 rounded-full bg-blue-600 opacity-100"></div>
    </div>
  ); 
};*/

export default Stops;
