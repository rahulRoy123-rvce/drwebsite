import React from 'react';
import { cn } from '@/lib/utils';

const WorkshopsPage: React.FC = () => {
  const features = [
    {
      title: "Workshops on Yoga and Ayurveda for Corporate Sectors",
      description:
        "Conducted special workshops on Yoga and Ayurveda for Positive Health and Stress management at SIS India Ltd., IISSM Pvt. Ltd., and NTPC, New Delhi.",
      number: 1,
    },
    {
      title: "Workshops in Singapore",
      description:
        "Visited Singapore to conduct workshops (Oct 2009, Sept-Oct 2010, Oct-Nov 2011) as an invited lecturer for various programs at VYASA Singapore and Wabi-Sabi Holistic Lifestyle.",
      number: 2,
    },
    {
      title: "Lectures in Diploma and Certificate Programs",
      description:
        "Delivered lectures for Diploma in Yoga Therapy and Certificate of Ayurvedic Principles at VYASA Singapore, and Ayurveda Foundation Course at Wabi-Sabi Holistic Lifestyle, Singapore.",
      number: 3,
    },
    {
      title: "Organizing Committee Member - 19th INCOFYRA",
      description:
        "Served in the scientific committee for organizing the 19th International Conference on Frontiers of Yoga Research and its Applications in 2011, organized by VYASA, Bangalore.",
      number: 4,
    },
    {
      title: "Pre-Conference Coordinator - Arogya Expo 2012",
      description:
        "Served as coordinator for the pre-conference of the first International Conference in Yoga – Naturopathy & Arogya Expo-2012, organized by Department of AYUSH, Govt. of Karnataka, Bangalore.",
      number: 5,
    },
    {
      title: "Workshops on Yoga Therapy at Arogya Expo 2012",
      description:
        "Participated in conducting pre and post-conference workshops on Yoga Therapy as part of the first International Conference in Yoga – Naturopathy & Arogya Expo-2012, organized by Department of AYUSH, Govt. of Karnataka, Bangalore.",
      number: 6,
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
  <h1 className="title-font font-bold sm:text-4xl text-3xl mb-4 text-gray-900">
    Workshops
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

export default WorkshopsPage;

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
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
