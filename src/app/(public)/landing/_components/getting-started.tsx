import React from "react";
import { Stepline } from "@components/ui/stepline";

export default function GettingStarted() {
  const data = [
    {
      title: "Take a Quick Test to Assess your Level",
      content: (
        <p className="text-xs md:text-sm font-normal">
          Identify where to begin on the roadmap based on your language
          proficiency.
        </p>
      ),
    },
    {
      title: "Try The First Session For Free",
      content: (
        <p className="text-xs md:text-sm font-normal">
          Explore our first roadmap stop for free!
        </p>
      ),
    },
    {
      title: "Access Materials and Track Progress",
      content: (
        <p className="text-xs md:text-sm font-normal">
          Learn through a wide range of podcasts, courses, reading material, and
          optional writing exercises. Monitor your progress, see what materials
          to work on next.
        </p>
      ),
    },
    {
      title: "Achieve Fluency",
      content: (
        <p className="text-xs md:text-sm font-normal">
          Follow the roadmap and practice regularly to achieve fluency in your
          target language.
        </p>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Stepline data={data} />
    </div>
  );
}
