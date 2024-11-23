import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Early Life and Background",
      content: (
        <div>
          <Image
            src="/images/pic10.jpg" // Replace with your image path
            alt="Early Life and Background"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
    {
      title: "Bachelor of Ayurvedic Medicine",
      content: (
        <div>
          <Image
            src="/images/pic11.jpg" // Replace with your image path
            alt="Bachelor of Ayurvedic Medicine"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
    {
      title: "Specialization in Yoga",
      content: (
        <div>
          <Image
            src="/images/pic17.jpg" // Replace with your image path
            alt="Specialization in Yoga"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
    {
      title: "Advanced Studies and Expertise",
      content: (
        <div>
          <Image
            src="/images/pic21.jpg" // Replace with your image path
            alt="Advanced Studies and Expertise"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
    {
      title: "Memberships and Roles",
      content: (
        <div>
          <Image
            src="/images/pic27.png" // Replace with your image path
            alt="Memberships and Roles"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
    {
      title: "Global Reach",
      content: (
        <div>
          <Image
            src="/images/pic14_bg.png" // Replace with your image path
            alt="Global Reach"
            width={800}
            height={600}
            className="mb-8"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
