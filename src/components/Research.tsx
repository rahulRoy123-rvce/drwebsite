"use client";

import React from "react";
import { AnimatedPinDemo } from "@/components/Pin3d";

export const Research = () => {
  return (
    <section className="text-gray-600 body-font">
      {/* Title */}
      {/* Card Section */}
      <div
        className="container mx-auto flex px-5 md:flex-row flex-col items-center rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 transition duration-300 hover:shadow-2xl hover:scale-105"
      >
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center p-6">
          {/* Card Content */}
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-gray-900 dark:text-neutral-200">
            Research work/ Thesis/ Dissertation
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
            Methodology of Niyantrita Madhumeha Bharata Abhiyaan-2017, a
            nationwide multicentric trial on the effect of a validated
            culturally acceptable lifestyle intervention for primary..
          </p>
          <a
            href="/researchWork"
            className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200"
          >
            Read More
          </a>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          {/* Pin Animation */}
          <AnimatedPinDemo />
        </div>
      </div>
    </section>
  );
};
