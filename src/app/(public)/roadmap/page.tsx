import React from "react";
import Path from "../_components/path";
import Stop from "../_components/stop";
import TabSwitch from "../_components/tab-switch";

export default function RoadmapPage() {
  // const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col items-center justify-start w-full">
      <TabSwitch />
      <Path />
      <Stop />
    </div>
  );
}
