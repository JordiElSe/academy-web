import Link from "next/link";

export default function OurRoadmaps() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center py-12">Our Roadmaps</h1>
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
    </div>
  );
}
