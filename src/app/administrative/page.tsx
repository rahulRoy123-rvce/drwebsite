"use client";
import React from 'react';
import { cn } from '@/lib/utils';

const MedicalComputerPage: React.FC = () => {
  const features = [
    {
      title: "Resident Medical Officer",
      description:
        "In charge Resident Medical Officer, Arogyadhama - A 250-bed hospital of Yoga, Naturopathy, Ayurveda & Conventional medicine of VYASA from May 2011 to till date.",
      number: 1,
    },
    {
      title: "Field Co-ordinator (Medical Programs)",
      description:
        "Field Co-ordinator Medical programs like MD (Doctor of Medicine) & PGDYTD Programs at SVYASA University, Bangalore from 2011 to till date.",
      number: 2,
    },
    {
      title: "Field Co-ordinator (Non-Medical Programs)",
      description:
        "Field Co-ordinator Non-Medical programs for Therapist training like MSc, BSc & PGDYT Programs at SVYASA University, Bangalore from 2011 to till date.",
      number: 3,
    },
    {
      title: "Computer Skills",
      description: "Proficient in Microsoft Office and Computer Basics.",
      number: 4,
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
      <div
  className="container item-center justify-center"
>
  <img
    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded container mt-16 mx-auto flex px-5 py-24 items-center justify-center flex-col rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 transition duration-300 hover:shadow-2xl hover:scale-105"
    alt="hero"
    src="/images/prof.png"
  />
 <div className="flex items-center justify-center text-center lg:w-2/3 w-full">
  <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-900 dark:text-white">
    Administrative Experience
  </h1>
</div>

</div>

      </section>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
};

export default MedicalComputerPage;

const Feature = ({
  title,
  description,
  number,
  index,
}: {
  title: string;
  description: string;
  number: number;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <span className="text-4xl font-bold text-blue-500 dark:text-blue-400">
          {number}
        </span>
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
