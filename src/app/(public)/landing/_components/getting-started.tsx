import React from "react";
import { Stepline } from "@components/ui/stepline";

export default function GettingStarted() {
  const data = [
    {
      title: "Take a Quick Test to Assess your Level",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Explore our first roadmap stop for free!
          </p>
        </div>
      ),
    },
    {
      title: "Access Materials and Track Progress",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal">
            Follow the roadmap and practice regularly to achieve fluency in your
            target language.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Stepline data={data} />
    </div>
  );
}
