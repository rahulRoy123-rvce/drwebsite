"use client";
import React from 'react';
import { FocusCards } from "@/components/ui/focus-cards";

const specialisation: React.FC = () => {
    const cards = [
        {
          title: "AYURVEDIC MEDICINE",
          src: "/images/pic10.jpg",
          description: "Dr Amit Singh has completed his Bachelor of ayurvedic medicine and surgery (BAMS) from one of the top university for medicals in India i.e. Rajiv"
        },
        {
          title: "PANCHAKARMA",
          src: "/images/pic11.jpg",
          description: "Panchakarma is a traditional Indian Ayurvedic treatment that is useful for the cleansing and detoxification of the mind, body and the spirit"
        },
        {
          title: "COUNSELLING",
          src: "/images/pic12.jpg",
          description: "Panchakarma is a traditional Indian Ayurvedic treatment that is useful for the cleansing and detoxification of the mind, body and the spirit"
        },
        {
          title: "DIET and Nutrition",
          src: "/images/pic14_bg.png",
          description: "Health is nothing a result of a healthy diet. Dr. Amit also work on patient Diet  & Nutrition."
        },
        {
          title: "Yoga Counselling",
          src: "/images/pic17.jpg",
          description: "Yoga Counselling is also done by Dr. Amit Singh."
        },
        {
          title: "Rehabiitation",
          src: "/images/pic27.png",
          description: "Dr. Amit went for the Postgraduate degree in Yoga from the best University in the world for yoga named SVYASA*. He joined for MD (Yoga.."
        },
      ];
    
      return (
      <div className="container mt-16 mb-16">
        <div className='flex justify-center items-center text-5xl mt-4 mb-4 font-bold font-sans'>
            Specialisation 
        </div>
      <FocusCards cards={cards} />
      </div>
      );
};

export default specialisation;




