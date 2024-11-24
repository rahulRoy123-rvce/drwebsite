"use client";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Ensures smooth scrolling
      });
    }
  };

  return (
    <footer className="bg-neutral-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Dr. Amit Singh</h3>
          <Image
            src="/images/pic10.jpg" // Replace with actual image path
            alt="Dr. Amit Singh"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
          <p className="text-neutral-400 mb-4">
            Methodology of Niyantrita Madhumeha Bharata Abhiyaan-2017, a
            nationwide multicentric trial on the effect of a validated
            culturally acceptable lifestyle intervention for primary
          </p>
          <p className="text-neutral-400">
            Partitioning of radiological, stress and biochemical changes in
            pre-diabetic women subjected to Diabetic Yoga Protocol
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Permanent Address</h3>
          <p className="text-neutral-400">
            Room 2 & 3, Chanda Ramji Building, Keshavji Nayak Road, Bhat Bazaar,
            Masjid Bandar, Mumbai (Maharastra), India- 400009
          </p>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
          <p className="text-neutral-400">
            SVYASA Yoga University Prashanti Kutiram, Jigani Hobli, Anekal Taluk,
            Bangalore (Karnataka), India - 560019.
          </p>
          <p className="text-neutral-400 mt-4">Phone: +91 9341854502</p>
          <p className="text-neutral-400">
            E-mail:{" "}
            <a href="mailto:dramits90@gmail.com" className="text-blue-400">
              dramits90@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 border-t border-neutral-700 pt-6 text-center">
        <p className="text-neutral-500">
          Copyright &copy; 2024 <span className="text-white">Dr Amit Singh.</span>
        </p>
      </div>
      <div className="text-center mt-6">
        <button
          onClick={scrollToTop}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
