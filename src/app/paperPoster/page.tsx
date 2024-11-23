"use client";
import React from "react";

const PaperPosterPage: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Paper/Poster
            {/* <br className="hidden lg:inline-block"/>Paper/Poster */}
          </h1>
          <p className="mb-8 leading-relaxed">
  <strong>From Wheels to her own Feet:</strong> A case of Amyotrophic lateral sclerosis (ALS) after IAYT and Ayurveda therapy 
  (Presented in 19th INCOFYRA, 2011 at SVYASA University & published in Monthly Magazine – Yog Sudha).
</p>
<p className="mb-8 leading-relaxed">
  <strong>Changes in Tridosha and Triguna in type 2 diabetics:</strong> A pilot study (Presented in 19th INCOFYRA at SVYASA University, 2011).
</p>
<p className="mb-8 leading-relaxed">
  <strong>Pilot Study on Psychological Aspects:</strong> Worked on a pilot study to evaluate psychological aspects of Ayurveda on type 2 diabetes 
  patients after 6 weeks of residential treatment – currently under review.
</p>

          
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="/images/paper.png"
          />
        </div>
      </div>
    </section>
  );
};

export default PaperPosterPage;
