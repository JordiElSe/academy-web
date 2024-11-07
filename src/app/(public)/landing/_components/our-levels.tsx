import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Level {
  id: string;
  title: string;
  width: string;
  color: string;
}

const levels: Level[] = [
  {
    id: "A1",
    title: "A1: Beginner",
    width: "w-36",
    color: "bg-bg-50",
  },
  {
    id: "A2",
    title: "A2: Elementary",
    width: "w-44",
    color: "bg-bg-50",
  },
  {
    id: "B1",
    title: "B1: Intermediate",
    width: "w-52",
    color: "bg-bg-200",
  },
  {
    id: "B2",
    title: "B2: Upper-Intermediate",
    width: "w-60",
    color: "bg-bg-200",
  },
  {
    id: "C1",
    title: "C1: Advanced",
    width: "w-72",
    color: "bg-bg-400",
  },
  {
    id: "C2",
    title: "C2: Proficient",
    width: "w-80",
    color: "bg-bg-400",
  },
];

export default function OurLevels() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col md:flex-row justify-center gap-20 items-center p-6 w-full md:mt-4 lg:mt-8">
      {/* Left Column - Levels */}
      <div ref={ref} className="flex flex-col space-y-4 order-2 md:order-1">
        {levels.map((level, index) => (
          <motion.div
            key={level.id}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              delay: 0.25 + index * 0.2,
              type: "spring",
              stiffness: 100, // Adjust this for more/less force
              damping: 10, // Adjust this for smoother stop
            }}
            className={`text-white p-4 rounded-lg font-medium ${level.width} ${level.color}`}
          >
            {level.title}
          </motion.div>
        ))}
      </div>

      {/* Right Column - Title and Description */}
      <div className="mt-8 md:mt-0 md:max-w-xl text-left order-1 md:order-2">
        <h2 className="mb-10 text-center md:text-left">
          Understand Our Levels
        </h2>
        <p className="text-base lg:text-lg">
          In <strong>Libra</strong>, we make sure your learning process follows
          a logical path to build a solid language base! <br />
          <br />
          All our material is designed following the CEFR - Common European
          Framework References, widely accepted as the European standard for
          grading an individual's language proficiency.
        </p>
      </div>
    </div>
  );
}
