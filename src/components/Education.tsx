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

export function BentoGridDemo() {
  return (
    <div>
         <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        My Education Careers
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
    title: "SVYASA University",
    description: "Pursuing PhD (Yoga) from SVYASA University (Jan 2012 - Jan 2015). VYASA University is a...",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/uni1.png')",
        }}
      ></div>
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kuwempu University",
    description: "Counseling & Psychology from Kuvempu University. Kuvempu University is one of the youngest affiliating Universities...",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/uni2.png')",
        }}
      ></div>
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Rajiv Gandhi University",
    description: "Completed Bachelor of ayurvedic medicine and surgery (BAMS) from one of the top university for...",
    header: (
      <div
        className="h-60 w-full rounded-xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/uni3.png')",
        }}
      ></div>
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
