import React from "react";
import src1 from "../assets/pic10.jpg"; // Ensure this path is correct
import { FloatingDockDemo } from "./FloatingDemo";
const HeroSection: React.FC = () => {
  return (
    <div className ="flex-row">
    <section className="flex flex-col lg:flex-row items-center justify-between min-h-screen  px-6 sm:px-8 lg:px-16 py-10">
      {/* Left Section */}
      <div className="flex flex-col items-start max-w-xl space-y-6">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          Hello, I’m <span className="text-green-600">Dr. Amit Singh</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700">
          15 YEARS OF TEACHING AND CLINICAL EXPERIENCE
        </p>

        {/* Bio */}
        <div className="text-sm md:text-base lg:text-lg text-gray-700 space-y-4">
          <p>
            <strong>Education:</strong> BAMS, MD, PHD, and Integrative Medicine Consultant.
          </p>
          <p>
            <strong>Designation:</strong>
          </p>
          <ul className="list-disc list-inside">
            <li>Associate Professor, SVYASA Yoga University Bangalore.</li>
            <li>Chief Medical Officer, Arogyadham - 350 Bed Integrative Medicine Hospital Bangalore.</li>
            <li>National Coordinator, Stop Diabetes Movement.</li>
            <li>Teaching Faculty in VaYU, USAYMU, China.</li>
          </ul>
          <p>
            64 Publications in International Medical Journals on Yoga and Ayurveda.
          </p>
          <p>
            Received Best Award by American Diabetes Association for &quot;Diabetes Prevention through Yoga-Based Life Style&quot; at San Francisco, 2019.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          >
            Google Scholar
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition"
          >
            Scopus
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          >
            Web of Science
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md shadow hover:bg-gray-300 transition"
          >
            ORCID
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-700">
          <p>
            <strong>Phone:</strong> +91 93418 54502
          </p>
          <p className="hidden md:block">|</p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:dramits90@gmail.com"
              className="text-green-600 hover:underline"
            >
              dramits90@gmail.com
            </a>
          </p>
        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf" // Replace with the actual resume link
          className="inline-block px-8 py-3 bg-green-600 text-white text-sm md:text-base lg:text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition"
          download
        >
          Download My CV
        </a>
      </div>

      {/* Right Section */}
      <div className="mt-10 lg:mt-0 relative">
        <div className="relative">
          <img
            height={450}
            width={450}
            src="/images/pic10.jpg" // Use the imported image directly
            alt="Dr. Amit Singh"
            className="rounded-lg shadow-lg w-[350px] md:w-[450px] object-cover"
          />
          <div className="absolute top-2 -left-6 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-green-100 rounded-full -z-10"></div>
        </div>
      </div>
      
    </section>
    <section>
    <FloatingDockDemo/>
    </section>
    </div>
  );
};

export default HeroSection;
