import Image from 'next/image';
import { FC } from 'react';
import { FloatingDockDemo } from './FloatingDemo';
import { Timeline } from './ui/timeline';

const HeroSection: FC = () => {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-screen flex items-center justify-center bg-gray-100 rounded-lg">
        <div className="max-w-6xl w-full px-6 md:px-10 flex flex-col lg:flex-row items-center lg:items-start justify-between">
          {/* Left Section */}
          <div className="lg:max-w-lg w-full flex flex-col items-start lg:justify-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 leading-none">
               Dr. Amit Singh
            </h1>
            <p className="text-gray-500 text-2xl mt-4 ">15 YEARS OF TEACHING AND CLINICAL EXPERIENCE</p>
            <p className="text-gray-800 text-sm mt-6">
              Education: BAMS, MD, PHD and Integrative Medicine Consultant.
            </p>
            <p className="text-gray-800 text-sm mt-2">
              Designation:
            </p>
            <ul className="text-gray-500 text-xl list-disc list-inside mt-2">
              <li>Associate Professor, SVYASA Yoga University Bangalore.</li>
              <li>Chief Medical Officer, Arogyadham - 350 Bed Integrative Medicine Hospital Bangalore.</li>
              <li>National Coordinator, Stop Diabetes Movement.</li>
              <li>Teaching Faculty in VaYU, USAYMU, China.</li>
              <li>64 Publications in International Medical Journals on Yoga and Ayurveda.</li>
            </ul>
            
          </div>

          {/* Right Section - Image */}
          <div className="relative mt-10 lg:mt-0 w-full lg:w-2/3 h-96 lg:h-auto">
            <Image
              height={500}
              width={500}
              src="/images/pic14_bg.png" // Replace with the actual image path
              alt="Dr. Amit Singh"
              objectFit="cover"
              priority={true}
            />
          </div>
        </div>
      </section>
      <section>
        <FloatingDockDemo />
      </section>
      {/* <Timeline/> */}
      
    </div>
  );
};

export default HeroSection;

// Tailwind CSS styles are used to make the Hero Section responsive
// Import this component in your desired page and use it accordingly