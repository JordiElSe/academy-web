"use client";

import React from "react";
import Hero from "./_components/hero";
import WhyUs from "./_components/why-us";
import OurMaterials from "./_components/our-materials";
import OurRoadmaps from "./_components/our-roadmaps";
import GettingStarted from "./_components/getting-started";
import OurLevels from "./_components/our-levels";
import Testimonials from "./_components/testimonials";
import FAQ from "./_components/faq";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <OurLevels />
      <OurMaterials />
      <OurRoadmaps />
      <GettingStarted />
      <Testimonials />
      <FAQ />
    </div>
  );
}
