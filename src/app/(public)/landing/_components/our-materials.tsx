import { BackgroundGradient } from "@components/ui/background-gradient";
import { StickyScroll } from "@components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Podcasts",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Written lessons",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Exercises",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Self evaluation tests",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
];

export default function OurMaterials() {
  return (
    <div>
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-center py-12">Our Materials</h1>
        <div className="flex flex-row items-center justify-center gap-8 w-[50%] mx-auto">
          <BackgroundGradient
            className="rounded-[22px] p-4 sm:p-12 bg-white dark:bg-zinc-900"
            containerClassName=""
          >
            <p className="text-6xl text-center font-bold">60%</p>
            <p className="text-xl text-center pt-4">audio content</p>
          </BackgroundGradient>
          <BackgroundGradient
            className="rounded-[22px] p-4 sm:p-12 bg-white dark:bg-zinc-900"
            containerClassName=""
          >
            <p className="text-6xl text-center font-bold">40%</p>
            <p className="text-xl text-center pt-4">audio content</p>
          </BackgroundGradient>
        </div>
      </section>
      <section>
        <div className="">
          <StickyScroll content={content} />
        </div>
      </section>
    </div>
  );
}
