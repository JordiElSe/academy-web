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
        <div className="text-center space-y-3 py-12">
          <p className="font-semibold text-primary">Everything you need</p>{" "}
          <h2 className="">Our Materials</h2>
        </div>
        {/* <h1 className="text-3xl font-bold text-center py-12">Our Materials</h1> */}
        <div className="flex flex-row items-start justify-center gap-12 w-full h-full">
          <div className="flex flex-col">
            <BackgroundGradient
              className="rounded-[22px] p-4 sm:p-12 bg-white dark:bg-zinc-900"
              containerClassName=""
            >
              <p className="text-6xl text-center font-bold">60%</p>
              {/* <p className="text-lg text-center pt-4">audio content</p> */}
            </BackgroundGradient>
            <p className="text-lg text-center pt-4">Audio Content</p>
          </div>
          <div className="flex flex-col">
            <BackgroundGradient
              className="rounded-[22px] p-4 sm:p-12 bg-white dark:bg-zinc-900"
              containerClassName=""
            >
              <p className="text-6xl text-center font-bold">40%</p>
              {/* <p className="text-lg text-center pt-4">
              complimentary material to the podcast
            </p> */}
            </BackgroundGradient>
            <p className="text-lg text-center pt-4">
              Complimentary Material <br />
              To The Podcast
            </p>
          </div>
        </div>
      </section>
      <section className="bg-neutral-900 w-full relative h-full">
        <div className="">
          <StickyScroll contentClassName="" content={content} />
        </div>
        {/* <div className="hidden lg:flex h-full  flex-col max-w-7xl mx-auto justify-between relative   p-10 ">
          <div className="my-40  relative grid grid-cols-3 gap-8">
            <div className="w-full">
              <div
                style={{
                  opacity: 0,
                  transform: "translateY(250px) translateZ(0px)",
                }}
              >
                <h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
                  Email Automation
                </h2>
                <p className="text-lg text-neutral-500 font-bold max-w-sm mt-2">
                  With our best in className email automation, you can automate
                  your entire emailing process.
                </p>
              </div>
            </div>
            <div
              className="h-full w-full rounded-md  self-start col-span-2"
              style={{
                opacity: 0,
                transform: "translateY(-200px) translateZ(0px)",
              }}
            >
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
                <Image
                  alt="dashboard"
                  loading="lazy"
                  width="1000"
                  height="1000"
                  decoding="async"
                  data-nimg="1"
                  className="transition duration-300 blur-0 w-full rounded-lg shadow-xl shadow-brand/[0.2]"
                  style={{ color: "transparent" }}
                  src="/assets/dashboard.png"
                />
                <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
              </div>
            </div>
          </div>
          <div className="my-40  relative grid grid-cols-3 gap-8">
          <div className="w-full">
            <div
              className=""
              style={{
                opacity: 0,
                transform: "translateY(250px) translateZ(0px)",
              }}
            >
              <h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
                Cross Platform Marketing
              </h2>
              <p className="text-lg text-neutral-500 font-bold max-w-sm mt-2">
                With our cross platform marketing, you can reach your audience
                on all the platforms they use.
              </p>
            </div>
          </div>
          <div
            className="h-full w-full rounded-md  self-start col-span-2"
            style={{
              opacity: 1,
              transform: "translateY(-200px) translateZ(0px)",
            }}
          >
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
              <img alt="dashboard" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="transition duration-300 blur-0 w-full rounded-lg shadow-xl shadow-brand/[0.2]" style={{color:'transparent'}} srcSet="/_next/image?url=%2Fsecond-backup.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fsecond-backup.png&amp;w=2048&amp;q=75 2x" src="/_next/image?url=%2Fsecond-backup.png&amp;w=2048&amp;q=75">
              <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="my-40  relative grid grid-cols-3 gap-8">
          <div className="w-full">
            <div
              className=""
              style={{
                opacity: 0,
                transform: "translateY(250px) translateZ(0px)",
              }}
            >
              <h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
                Managed CRM
              </h2>
              <p className="text-lg text-neutral-500 font-bold max-w-sm mt-2">
                With our managed CRM, you can manage your leads and contacts in
                one place.
              </p>
            </div>
          </div>
          <div
            className="h-full w-full rounded-md  self-start col-span-2"
            style={{
              opacity: 1,
              transform: "translateY(-200px) translateZ(0px)",
            }}
          >
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
              <img alt="dashboard" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="transition duration-300 blur-0 w-full rounded-lg shadow-xl shadow-brand/[0.2]" style={{color:'transparent'}} srcSet="/_next/image?url=%2Ffourth-backup.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Ffourth-backup.png&amp;w=2048&amp;q=75 2x" src="/_next/image?url=%2Ffourth-backup.png&amp;w=2048&amp;q=75">
              <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
          </div>
        </div>
        <div className="my-40  relative grid grid-cols-3 gap-8">
          <div className="w-full">
            <div
              className=""
              style={{
                opacity: 0,
                transform: "translateY(250px) translateZ(0px)",
              }}
            >
              <h2 className="mt-2 font-bold text-2xl lg:text-4xl inline-block bg-clip-text text-left text-transparent bg-gradient-to-b from-white  to-white">
                Apps Automation
              </h2>
              <p className="text-lg text-neutral-500 font-bold max-w-sm mt-2">
                We have cloned zapier and built our very own apps automation
                platform.
              </p>
            </div>
          </div>
          <div
            className="h-full w-full rounded-md  self-start col-span-2"
            style={{
              opacity: 1,
              transform: "translateY(-200px) translateZ(0px)",
            }}
          >
            <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg relative shadow-2xl">
              <img alt="dashboard" loading="lazy" width="1000" height="1000" decoding="async" data-nimg="1" className="transition duration-300 blur-0 w-full rounded-lg shadow-xl shadow-brand/[0.2]" style={{color:'transparent'}} srcSet="/_next/image?url=%2Fthird.png&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fthird.png&amp;w=2048&amp;q=75 2x" src="/_next/image?url=%2Fthird.png&amp;w=2048&amp;q=75">
              <div className="absolute bottom-0 w-full h-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
              <div className="absolute bottom-0 w-40 mx-auto h-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
          </div>
        </div>
        </div> */}
      </section>
    </div>
  );
}
