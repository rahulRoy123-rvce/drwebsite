"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

const Education = () => {
  const data = [
    {
      title: "Doctor of Medicine in Yoga & Rehabilitation",
      content: (
       <div
  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
  transition duration-300 hover:shadow-2xl hover:scale-105"
>
  <Image
    src="/images/pic10.jpg" // Replace with your image path
    alt="MD in Yoga & Rehabilitation"
    width={800}
    height={600}
    className="mb-8 rounded-lg"
  />
  <p className="text-justify text-lg leading-relaxed text-gray-800 dark:text-gray-300">
    MD (Y&R) from SVYASA University, completed in January 2019.
  </p>
</div>

      ),
    },
    {
      title: "Bachelor in Ayurvedic Medicine and Surgery (BAMS)",
      content: (
        <div  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
        transition duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/images/pic11.jpg" // Replace with your image path
            alt="Bachelor in Ayurvedic Medicine and Surgery"
            width={800}
            height={600}
            className="mb-8"
          />
          <p className="text-justify text-lg leading-relaxed">
            BAMS from Rajiv Gandhi University of Health Sciences (RGUHS),
            completed in May 2007.
          </p>
        </div>
      ),
    },
    {
      title: "PhD (Yoga)",
      content: (
        <div  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
        transition duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/images/pic12.jpg" // Replace with your image path
            alt="PhD (Yoga)"
            width={800}
            height={600}
            className="mb-8"
          />
          <p className="text-justify text-lg leading-relaxed">
            PhD in Yoga from Swami Vivekananda Yoga Anusandhana Samsthana
            (S-VYASA University), Bangalore, completed in January 2019.
          </p>
        </div>
      ),
    },
    {
      title: "Yoga Therapy Orientation Training",
      content: (
        <div  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
        transition duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/images/pic17.jpg" // Replace with your image path
            alt="Yoga Therapy Orientation Training"
            width={800}
            height={600}
            className="mb-8"
          />
          <p className="text-justify text-lg leading-relaxed">
            Completed Yoga Therapy Orientation Training for Doctors from SVYASA
            University (September - November 2006).
          </p>
        </div>
      ),
    },
    {
      title: "Yoga Instructor's Course",
      content: (
        <div  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
        transition duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/images/pic21.jpg" // Replace with your image path
            alt="Yoga Instructor's Course"
            width={800}
            height={600}
            className="mb-8"
          />
          <p className="text-justify text-lg leading-relaxed">
            An intensive training program from SVYASA University, completed in
            August 2006.
          </p>
        </div>
      ),
    },
    {
      title: "Memberships",
      content: (
        <div  className="p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
        transition duration-300 hover:shadow-2xl hover:scale-105">
          <Image
            src="/images/pic27.png" // Replace with your image path
            alt="Memberships"
            width={800}
            height={600}
            className="mb-8"
          />
          <ul className="text-justify text-lg leading-relaxed list-disc list-inside space-y-2">
            <li>Life Member of Indian Yoga Association (IYA/LM/033).</li>
            <li>Life Member of Vishwa Ayurveda Parishad (MH-7557).</li>
            <li>
              Honorary Membership of Strategic Institute for Public Health
              Education and Research (SIPHER).
            </li>
            <li>
              Member of Babasaheb Bhimrao Ambedkar University, Lucknow.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className=" text-8xl font-sans font-extrabold max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10">
        <div className="font-bold md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </div>
        <div className="text-neutral-700  dark:text-neutral-300 md:text-base max-w-sm">
          I&apos;ve 15 YEARS OF TEACHING AND CLINICAL EXPERIENCE.
        </div>
      </div>
      <Timeline data={data} />
    </div>
  );
};

export default Education;
