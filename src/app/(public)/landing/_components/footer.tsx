import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-200 dark:bg-bg-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 me-3 rounded-full">
                <Image
                  src="/logos/logo_circular.JPG"
                  className="rounded-full"
                  fill
                  alt="Sounds of Catalan logo"
                />
              </div>
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
                Sounds of Catalan
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                Something
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/bookings/kamikawa" className="hover:underline">
                    lorem
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/bookings/furano" className="hover:underline">
                    lorem
                  </Link>
                </li>
                <li>
                  <Link href="/bookings/day-tours" className="hover:underline">
                    lorem
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="/accomodations/kamikawa"
                    className="hover:underline "
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a href="/accomodations/furano" className="hover:underline">
                    Materials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-black dark:text-white">
                Get to know us
              </h2>
              <ul className="text-gray-600 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/yukiumi_house/"
                    target="_blank"
                    className="hover:underline "
                  >
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center text-gray-600 dark:text-gray-400">
            © 2024{" "}
            <Link href="/" className="hover:underline">
              Sounds of Catalan
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/*  <a href="#" className="text-gray-500 hover:text-black dark:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a> */}
            <a
              href="https://www.instagram.com/yukiumi_house/"
              target="_blank"
              className="text-gray-500 hover:text-black dark:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="25"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
              <span className="sr-only">Instagram account</span>
            </a>
            <a
              href="https://t.me/Gerarddmc13"
              target="_blank"
              className="text-gray-500 hover:text-black dark:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="28"
                height="28"
                viewBox="0 0 32 32"
              >
                <path d="M16,4C9.37,4,4,9.37,4,16s5.37,12,12,12s12-5.37,12-12S22.63,4,16,4z M18.852,21.859c-1.162-0.217-2.638-1.108-3.622-2.468 c-0.296-0.409-0.23-0.979,0.14-1.321l2.062-1.901c0.406-0.374,0.432-1.007,0.058-1.413s-1.006-0.431-1.413-0.058l-3.16,2.913 c-0.171,0.157-0.396,0.256-0.628,0.267c-1.166,0.058-2.118-0.074-2.876-0.508c-0.545-0.312-0.676-1.063-0.254-1.528 c2.31-2.547,7.461-5.014,11.856-4.891c0.474,0.013,0.875,0.384,0.929,0.855c0.306,2.664-0.675,7.774-2.135,9.69 C19.587,21.788,19.215,21.927,18.852,21.859z"></path>
              </svg>
              <span className="sr-only">Telegram account</span>
            </a>

            <a
              href="https://wa.me/818019879909"
              target="_blank"
              className="text-gray-500 hover:text-black dark:text-white ms-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width="25"
                height="25"
                viewBox="0 0 30 30"
              >
                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"></path>
              </svg>
              <span className="sr-only">Whatsapp account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
