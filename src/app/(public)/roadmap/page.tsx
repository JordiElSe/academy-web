// somePage.tsx
import React from "react";
import Path from "../_components/path";

export default function RoadmapPage() {
  // const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col items-center justify-start min-h-full mt-20 overflow-auto">
      <Path />;
    </div>
  );
}
