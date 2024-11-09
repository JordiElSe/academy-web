import Link from "next/link";
import CourseCard from "./course-card";

export default function OurCourses() {
  return (
    <div className="flex flex-col">
      <div className="space-y-3 text-center">
        <h3>Path to Catalan mastery</h3>
        <h2>Our Courses</h2>
      </div>
      <p className="text-lg text-center px-16">
        Our extensive catalog of learning materials can feel overwhelming, so
        we've created clear, level-based roadmaps to guide you step by step.
        <br />
        These roadmaps ensure you know exactly what to study and in what order,
        helping you stay on track to reach your language goals.
      </p>
      <h2 className="text-2xl font-bold text-center py-12">
        In each Roadmap Stop you will find
      </h2>
      <div className="flex justify-center items-center gap-6">
        <div>
          <div className="text-4xl font-bold text-center">
            Pedagogical podcast
          </div>
          <div className="text-lg text-center">(average duration 20min)</div>
        </div>

        <span className="text-4xl font-bold text-center py-12">+</span>
        <ul>
          <li>Written lesson with the main concepts of the podcasts</li>
          <li>Short reading exercises</li>
          <li>Optional writting exercises</li>
          <li>Self-evaluation tests</li>
        </ul>
      </div>
      <Link
        href="/roadmap"
        className="self-end mr-20 inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-100 rounded-lg border border-gray-300 hover:bg-slate-100 focus:ring-4 focus:ring-slate-100"
      >
        See the Roadmaps {">>"}
      </Link>
      <div className="py-20 lg:py-40 space-y-20">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            For Beginners
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
            {Acourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">
            For Intermediates
          </h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
            {Bcourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-10 text-center">For Advanced</h2>
          <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-7xl mx-auto">
            {Ccourses.map((course) => (
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const Acourses = [
  {
    title: "Road from A1 to A2",
    description:
      "This course will teach you the basics of Catalan starting from scratch. You will learn the alphabet, numbers, and basic vocabulary, as well as the basics of pronounciation and how to introduce yourself and others. After completing this course, you will be able to understand and use familiar everyday expressions and basic phrases.",
    hours: 20,
    podcasts: 15,
    exercises: 30,
    tests: 5,
  },
  {
    title: "Road from A2 to B1",
    description:
      "This course will teach you the basics of Catalan starting from scratch. You will learn the alphabet, numbers, and basic vocabulary, as well as the basics of pronounciation and how to introduce yourself and others. After completing this course, you will be able to understand and use familiar everyday expressions and basic phrases.",
    hours: 25,
    podcasts: 20,
    exercises: 35,
    tests: 6,
  },
];

const Bcourses = [
  {
    title: "Road from B1 to B2",
    description:
      "This course will teach you the basics of Catalan starting from scratch. You will learn the alphabet, numbers, and basic vocabulary, as well as the basics of pronounciation and how to introduce yourself and others. After completing this course, you will be able to understand and use familiar everyday expressions and basic phrases.",
    hours: 30,
    podcasts: 25,
    exercises: 40,
    tests: 8,
  },
  {
    title: "Road from B2 to C1",
    description:
      "This course will teach you the basics of Catalan starting from scratch. You will learn the alphabet, numbers, and basic vocabulary, as well as the basics of pronounciation and how to introduce yourself and others. After completing this course, you will be able to understand and use familiar everyday expressions and basic phrases.",
    hours: 35,
    podcasts: 28,
    exercises: 45,
    tests: 10,
  },
];

const Ccourses = [
  {
    title: "Road from C1 to C2",
    description:
      "This course will teach you the basics of Catalan starting from scratch. You will learn the alphabet, numbers, and basic vocabulary, as well as the basics of pronounciation and how to introduce yourself and others. After completing this course, you will be able to understand and use familiar everyday expressions and basic phrases.",
    hours: 40,
    podcasts: 30,
    exercises: 50,
    tests: 12,
  },
];
