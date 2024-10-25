import Image from "next/image";

export default function Testimonials() {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-5 items-center text-center">
        <h2 className="ud-section-title">Student testimonials</h2>
        <p className="text-lg">
          We've helped lots of people achieve their language goals, but don't
          just take our word for it.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 mt-20">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              If there's one resource that Web3 developers point to, it’s
              Cyfrin’s ultimate tutorials. They’re standout resources that have
              empowered countless developers to learn blockchains, learn
              Solidity, and dive deep into Web3 development.
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e374946a0aac7ff1df8_chainlink.63f6c11c.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Chainlink</div>
                <div>Chainlink</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              The Cyfrin courses were a game-changer for me. They provided a
              well-structured and comprehensive introduction to web3 and
              blockchain development. The knowledge I gained allowed me to
              transition into a full-time role as a blockchain developer. I
              can't recommend these courses enough!
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e375d6b23e17335193b_albert-hu.6d3a3a79.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Albert Hu</div>
                <div>Founding Engineer at DeForm</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center pt-8">
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              I took Cyfrin course and I’ve been working as a solutions
              developer at OpenZeppelin for the last few months. It was by far
              the most comprehensive resource and the one that really teached me
              the fundamentals and made me want to switch from web2 to web3.
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e24ae32e48cd17443d3_gustavo-gonzalez.74890632.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Gustavo Gonzales</div>
                <div>Solutions Engineer at OpenZeppelin</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              I took Cyfrin’s courses, and I took them seriously. At least one
              hour every day, documented the progress, didn’t skip any second.
              Haven’t found a better web3 course since. Now I’m full-time in
              web3, working as Senior Developer Advocate at Ceramic Network.
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e37bb5c7ba993a8311f_radek.57970eda.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Radek</div>
                <div>Lead Developer Relations at WalletConnect</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              Cyfrin Updraft videos on smart contract development have been
              instrumental in my blockchain journey, standing out with their
              clarity and accessibility. Their readiness to support and engage
              with learners makes me excited for more of their interactive and
              insightful content in the Web3 space
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e1723382d1154e7163b_francesco-andreoli.fcd92a07.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Francesco Andreoli</div>
                <div>Lead Developer Relations at Metamask</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 rounded-xl bg-slate-200 dark:bg-slate-700 max-w-96">
            <p className="">
              Cyfrin's course was a cornerstone of my journey into Web3,
              providing me with the fundamentals and hands-on experience that
              have been pivotal to my journey in the blockchain space.
            </p>
            <div className="">
              {/* <Image
              src="https://cdn.prod.website-files.com/657ba316d2b6a27c7d778152/67050e37d0e8738b9c48a7da_raza.499e4925.jpeg"
              loading="lazy"
              alt=""
              className="ud-student-testimonial-image"
            /> */}
              <div>
                <div className="">Raza</div>
                <div>Lead Developer Relations at Scroll</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
