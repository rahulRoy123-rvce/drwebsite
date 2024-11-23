"use client"; 
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer
        title="/Research Work"
        href="/researchWork"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Thesis
          </h3>
          
          {/* Replacing gradient background with an image */}
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/pic27.png')",
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
