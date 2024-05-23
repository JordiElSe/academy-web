// somePage.tsx
import React from "react";
import Path from "../_components/path";

export default function RoadmapPage() {
  // const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <Path />
      {/* <svg
        width="1220"
        height="1687"
        viewBox="0 0 1220 1687"
        fill="none"
        className="pointer-events-none absolute left-10  top-28 hidden select-none md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
          stroke="#3887FD"
          stroke-opacity="0.15"
          stroke-width="10"
        ></path>
        <path
          d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
          stroke="black"
          stroke-opacity="1"
          stroke-linecap="round"
          stroke-width="10"
          pathLength="1"
          stroke-dashoffset="0px"
          stroke-dasharray="1px 1px"
        ></path>
      </svg> */}
    </div>
  );
}
