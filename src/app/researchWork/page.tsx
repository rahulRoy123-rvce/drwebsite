"use client";
import React, { useState } from "react";
import { useId } from "react";

export default function ToggleSectionsPage() {
  const [activeSection, setActiveSection] = useState("research");

  const researchData = [
    {
      title: "Textbook of allergy for the clinician",
      journal: "CRC Press",
      if: "",
      year: 2014,
    },
    {
      title:
        "A holistic antenatal model based on yoga, ayurveda, and Vedic guidelines",
      journal: "Health care for women international",
      if: 0.95,
      year: 2015,
    },
    // Remaining research data...
  ];

  const booksData = [
    {
      title: "Textbook of Allergy for the Clinician",
      isbn: "9780367854706",
      publisher: "Taylor & Francis Group",
      year: 2020,
    },
    // Remaining books data...
  ];

  const projectsData = [
    {
      title:
        "Changes in prefrontal oxygenation, cardiac activity and executive functions following Mind sound resonance technique",
      designation: "PI",
      year: 2021,
    },
    // Remaining projects data...
  ];

  const renderContent = () => {
    if (activeSection === "research") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {researchData.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>Journal:</strong> {feature.journal || "N/A"}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>IF:</strong> {feature.if || "N/A"}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {feature.year}
              </p>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "books") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {booksData.map((book, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {book.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {book.year}
              </p>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "projects") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>Designation:</strong> {project.designation}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {project.year}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="py-20 lg:py-40">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveSection("research")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "research"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveSection("books")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "books"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Books
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "projects"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">{renderContent()}</div>
    </div>
  );
}

function Grid({ size }: { size?: number }) {
  const pattern = [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern width={size ?? 20} height={size ?? 20} x="-12" y="4" squares={pattern} />
      </div>
    </div>
  );
}

function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern id={patternId} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]: any) => (
            <rect strokeWidth="0" key={`${sx}-${sy}`} width={width + 1} height={height + 1} x={sx * width} y={sy * height} />
          ))}
        </svg>
      )}
    </svg>
  );
}
