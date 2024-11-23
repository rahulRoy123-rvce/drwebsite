import Image from 'next/image';
import { FC } from 'react';
import { FloatingDockDemo } from './FloatingDemo';
import { Timeline } from './ui/timeline';

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-6xl w-full px-4 md:px-8 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Left Section */}
          <div className="lg:max-w-lg w-full flex flex-col items-start text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Dr. Amit Singh
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mt-4">
              15 YEARS OF TEACHING AND CLINICAL EXPERIENCE
            </p>
            <p className="text-gray-800 text-base md:text-lg mt-6">
              Education: <span className="font-semibold">BAMS, MD, PHD</span> and Integrative Medicine Consultant.
            </p>
            <p className="text-gray-800 text-base md:text-lg mt-2 font-semibold">
              Designation:
            </p>
            <ul className="text-gray-500 text-sm md:text-lg list-disc list-inside mt-2">
              <li>Associate Professor, SVYASA Yoga University Bangalore.</li>
              <li>Chief Medical Officer, Arogyadham - 350 Bed Integrative Medicine Hospital Bangalore.</li>
              <li>National Coordinator, Stop Diabetes Movement.</li>
              <li>Teaching Faculty in VaYU, USAYMU, China.</li>
              <li>64 Publications in International Medical Journals on Yoga and Ayurveda.</li>
            </ul>
          </div>

          {/* Right Section - Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <Image
              height={600}
              width={400}
              src="/images/pic14_bg.png" // Ensure the image path is correct
              alt="Dr. Amit Singh"
              className="rounded-lg object-cover shadow-md"
              priority={true}
            />
          </div>
        </div>
      </section>

      {/* Floating Dock Section */}
      <section>
        <FloatingDockDemo />
      </section>

      {/* Timeline Section */}
      {/* Uncomment below if needed */}
      {/* <section>
        <Timeline />
      </section> */}
    </div>
  );
};

export default HeroSection;
