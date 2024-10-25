import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function GettingStarted() {
  const data = [
    {
      title: "Take a Quick Test to Assess your LEvel",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Identify where to begin on the roadmap based on your language
            proficiency.
          </p>
        </div>
      ),
    },
    {
      title: "Try The First Session For Free",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Explore our first roadmap stop for free!
          </p>
        </div>
      ),
    },
    {
      title: "Access Materials and Track Progress",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Learn through a wide range of podcasts, courses, reading material,
            and optional writing exercises. Monitor your progress, see what
            materials to work on next.
          </p>
        </div>
      ),
    },
    {
      title: "Achieve Fluency",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Follow the roadmap and practice regularly to achieve fluency in your
            target language.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
