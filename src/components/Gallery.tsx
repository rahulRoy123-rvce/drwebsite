"use client";

import React from "react";
import { Tabs } from "./ui/tabs";
import { LayoutGridDemo } from "@/components/Layout""; // Assuming LayoutGrid is from the Layout file provided

export function Gallery() {
  const galleryTabs = [
    {
      title: "Photogallery",
      value: "photogallery",
      content: (
        <LayoutGridDemo
          cards={[
            {
              id: 1,
              content: "Photo 1",
              className: "bg-gray-100",
              thumbnail: "/assets/photo1.jpg",
            },
            {
              id: 2,
              content: "Photo 2",
              className: "bg-gray-200",
              thumbnail: "/assets/photo2.jpg",
            },
            {
              id: 3,
              content: "Photo 3",
              className: "bg-gray-300",
              thumbnail: "/assets/photo3.jpg",
            },
          ]}
        />
      ),
    },
    {
      title: "Conference",
      value: "conference",
      content: (
        <LayoutGrid
          cards={[
            {
              id: 1,
              content: "Conference 1",
              className: "bg-gray-100",
              thumbnail: "/assets/conference1.jpg",
            },
            {
              id: 2,
              content: "Conference 2",
              className: "bg-gray-200",
              thumbnail: "/assets/conference2.jpg",
            },
            {
              id: 3,
              content: "Conference 3",
              className: "bg-gray-300",
              thumbnail: "/assets/conference3.jpg",
            },
          ]}
        />
      ),
    },
    {
      title: "Awards",
      value: "awards",
      content: (
        <LayoutGrid
          cards={[
            {
              id: 1,
              content: "Award 1",
              className: "bg-gray-100",
              thumbnail: "/assets/award1.jpg",
            },
            {
              id: 2,
              content: "Award 2",
              className: "bg-gray-200",
              thumbnail: "/assets/award2.jpg",
            },
            {
              id: 3,
              content: "Award 3",
              className: "bg-gray-300",
              thumbnail: "/assets/award3.jpg",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <div className="h-full w-full max-w-7xl mx-auto p-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-8">My Portfolio</h2>
      <Tabs tabs={galleryTabs} />
    </div>
  );
}
