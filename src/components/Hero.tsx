import Image from 'next/image';
import { FC } from 'react';
import { FloatingDockDemo } from './FloatingDemo';

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Card-like Styling */}
      <section className="relative w-full min-h-screen flex items-center justify-center">
        <div
          className="max-w-6xl w-full px-4 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 
                     rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
                     transition duration-300 hover:shadow-2xl hover:scale-105"
        >
          {/* Left Section */}
          <div className="lg:max-w-lg w-full flex flex-col items-start text-center lg:text-left p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-neutral-200 leading-tight">
              Dr. Amit Singh
            </h1>
            <p className="text-gray-500 dark:text-gray-300 text-lg md:text-xl mt-4">
              15 YEARS OF TEACHING AND CLINICAL EXPERIENCE
            </p>
            <p className="text-gray-800 dark:text-neutral-200 text-base md:text-lg mt-6">
              Education: <span className="font-semibold">BAMS, MD, PHD</span> and Integrative Medicine Consultant.
            </p>
            <p className="text-gray-800 dark:text-neutral-200 text-base md:text-lg mt-2 font-semibold">
              Designation:
            </p>
            <ul className="text-gray-500 dark:text-gray-300 text-sm md:text-lg list-disc list-inside mt-2">
              <li>Associate Professor, SVYASA Yoga University Bangalore.</li>
              <li>Chief Medical Officer, Arogyadham - 350 Bed Integrative Medicine Hospital Bangalore.</li>
              <li>National Coordinator, Stop Diabetes Movement.</li>
              <li>Teaching Faculty in VaYU, USAYMU, China.</li>
              <li>64 Publications in International Medical Journals on Yoga and Ayurveda.</li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center w-full lg:w-1/2 p-6">
            <Image
              height={600}
              width={400}
              src="/images/pic14_bg.png" // Ensure the image path is correct
              alt="Dr. Amit Singh"
              className="rounded-lg object-cover "
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Floating Dock Section */}
      <section>
        <FloatingDockDemo />
      </section>
    </div>
  );
};

export default HeroSection;
