"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const Path = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col items-center justify-start h-full overflow-auto">
      <motion.svg
        width="268"
        height="1731"
        viewBox="0 0 268 1731"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          style={{ pathLength: scrollYProgress }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            ease: "linear",
            /* repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1, */
          }}
          d="M133.999 1C310.999 43 310.999 80 133.999 134C-44.0006 188 -41.6249 218.413 133.999 267C307.5 315 307.001 352 134.001 400C-39 448 -39 498 134.001 533C307.001 568 309.501 608 134.001 666C-41.4993 724 -39.9993 765 134.001 799C308.001 833 309.001 879 134.001 932C-40.9993 985 -39.9993 1025 134.001 1065C308.001 1105 306.501 1144.5 134.001 1198C-38.4993 1251.5 -37.4993 1292.5 134.001 1331C305.501 1369.5 304.501 1410 134.001 1464C-36.4993 1518 -34.4993 1561 134.001 1597C302.501 1633 302.501 1694 134.001 1730"
          stroke="black"
          strokeWidth="5"
        />
      </motion.svg>

      {/* <motion.svg
        width="306"
        height="1212"
        viewBox="0 0 306 1212"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 1,
          }}
          d="M153.001 2.99963C353.001 50.2937 353.001 89.7053 153.001 136.999C-46.9994 184.293 -46.9994 223.705 153.001 270.999C353.001 318.293 353.001 357.705 153.001 404.999C-46.9994 452.293 -46.9994 491.705 153.001 538.999M153.001 538.998C353.001 586.292 353.001 625.703 153.001 672.998C-46.9994 720.292 -46.9997 759.704 153 806.998M153 807C353 854.294 353 893.706 153 941M153 940.999C-46.9998 988.293 -47.0002 1027.71 153 1075M153 1075C353 1122.29 353 1161.71 153 1209"
          stroke="black"
          stroke-width="5"
          //   strokeDasharray="0 1"
        />
      </motion.svg> */}

      {/* <svg
        width="306"
        height="548"
        viewBox="0 0 306 548"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M153 271C-47 223 -47 184 153 137C353 89 353 50 153 3.00001"
          stroke="white"
          stroke-width="5"
        />
        <path
          d="M153 545C-47 497 -47 458 153 411C353 363 353 324 153 271.00001"
          stroke="white"
          strokeWidth="5"
        />
      </svg> */}
    </div>
  );
};

export default Path;
