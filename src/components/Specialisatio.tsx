import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function SpecialisationDemo() {
  return (
    <div>
         <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Specialisation
      </h2>
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
