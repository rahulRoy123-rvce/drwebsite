import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
} from "@tabler/icons-react";

export function SpecialisationDemo() {
  return (
    <div
      className="max-w-7xl mx-auto mt-10 p-6 rounded-lg shadow-lg bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-600 
      transition duration-300 hover:shadow-2xl hover:scale-105"
    >
      {/* Title */}
      <h2 className="text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans mb-8">
        Specialisation
      </h2>

      {/* Bento Grid */}
      <BentoGrid className="max-w-6xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
      <a href="/specialisation" className="flex justify-center items-center mt-10">
        <button className="shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">
          Read More
        </button>
      </a>
    </div>
  );
}

const items = [
  {
    title: "AYURVEDIC MEDICINE",
    description: "",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/spec1.png')",
        }}
      ></div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PANCHAKARMA",
    description: "",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/spec2.png')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "COUNSELLING",
    description: ".",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/spec3.png')",
        }}
      ></div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
