import { useId } from "react";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { MdOutlineQuiz } from "react-icons/md";
import Link from "next/link";

interface Course {
  title: string;
  description: string;
  hours: number;
  podcasts: number;
  exercises: number;
  tests: number;
}

export default function CourseCard({ course }: { course: Course }) {
  return (
    <div className="relative bg-gradient-to-b dark:from-neutral-800 from-neutral-200 dark:to-neutral-900 to-neutral-100 p-6 rounded-3xl overflow-hidden w-full md:w-[480px] h-[400px]">
      <Grid size={20} />
      <div className="relative z-20 space-y-4 h-full flex flex-col">
        <div className="pb-2 border-b-[2px] border-neutral-400 dark:border-neutral-700">
          <p className="text-2xl font-bold text-neutral-800 dark:text-white text-center">
            {course.title}
          </p>
        </div>
        <p className="text-neutral-600 dark:text-neutral-400 text-base font-normal flex-grow">
          {course.description}
        </p>
        <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
          <div className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
            <IoMdTime className="text-lg" /> {course.hours} hours
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
            <MdOutlinePodcasts className="text-lg" /> {course.podcasts} podcasts
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
            <HiMiniPencilSquare className="text-lg" /> {course.exercises}{" "}
            exercises
          </div>
          <div className="text-neutral-600 dark:text-neutral-400 flex items-center gap-1">
            <MdOutlineQuiz className="text-lg" /> {course.tests} tests
          </div>
        </div>
        <div className="flex gap-4 mt-auto">
          <Link
            href="/courses/syllabus"
            className="block w-full py-2 px-4 text-center text-black dark:text-white border border-black dark:border-slate-50 hover:bg-gray-300 hover:dark:bg-gray-900 rounded-lg transition-colors"
          >
            Explore Syllabus
          </Link>
          <Link
            href="/courses/start"
            className="block w-full py-2 px-4 text-center text-white bg-primary border border-primary hover:bg-primary/80 rounded-lg transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
