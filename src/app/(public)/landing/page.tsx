"use client";

import React from "react";
import Hero from "./_components/hero";
import WhyUs from "./_components/why-us";
import OurMaterials from "./_components/our-materials";
import OurCourses from "./_components/our-courses";
import GettingStarted from "./_components/getting-started";
import OurLevels from "./_components/our-levels";
import Testimonials from "./_components/testimonials";
import FAQS from "./_components/faqs";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <WhyUs />
      <OurLevels />
      <OurMaterials />
      <OurCourses />
      {/* <GettingStarted />
      <Testimonials />
      <FAQS /> */}
    </div>
  );
}
