"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@components/ui/aurora-background";
import { ContainerScroll } from "@components/ui/container-scroll-animation";
import Image from "next/image";

export default function Hero() {
  return (
    // <AuroraBackground>
    //   <motion.div
    //     initial={{ opacity: 0.0, y: 40 }}
    //     whileInView={{ opacity: 1, y: 0 }}
    //     transition={{
    //       delay: 0.3,
    //       duration: 0.8,
    //       ease: "easeInOut",
    //     }}
    //     className="flex flex-col min-h-[70rem] md:min-h-[100rem] pt-20 md:pt-40 relative overflow-hidden"
    //   >
    <ContainerScroll
      titleComponent={
        <div className="max-w-7xl mt-28 mx-auto px-4 flex flex-col items-center justify-center">
          <h1 className="tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 dark:from-neutral-600 via-black dark:via-white to-black dark:to-white text-4xl md:text-4xl lg:text-8xl font-medium max-w-6xl mx-auto text-center mt-6 relative z-10 py-6">
            <span
              data-brr="1"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Master Catalan with Ease and Flexibility
            </span>
          </h1>
          <h2 className="my-4 font-normal text-center mt-2 md:mt-6 text-base md:text-xl text-neutral-800 dark:text-neutral-200 max-w-3xl mx-auto relative z-10">
            <span
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                textWrap: "balance",
              }}
            >
              Our platform is designed to guide you all the way and is based on
              learning through listening
            </span>
          </h2>
          <div className="flex items-center gap-4 justify-center my-10 relative z-10">
            <button className="group hover:-translate-y-0.5 active:scale-[0.98] bg-secondary relative z-10 hover:bg-secondary/90 border border-secondary text-black text-sm md:text-sm transition font-medium duration-200 rounded-md px-4 py-2 justify-center shadow-[0px_-1px_0px_0px_#FFFFFF60_inset,_0px_1px_0px_0px_#FFFFFF60_inset] flex space-x-2 items-center group">
              <span>Book a demo</span>{" "}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="text-black group-hover:translate-x-1 stroke-[1px] h-3 w-3 mt-0.5 transition-transform duration-200"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      }
    >
      <Image
        src="/assets/dashboard.png"
        alt="hero"
        height={620}
        width={1200}
        className="mx-auto rounded-2xl object-cover h-full object-left-top"
        draggable={false}
      />
    </ContainerScroll>
    //   </motion.div>
    // </AuroraBackground>
  );
}
