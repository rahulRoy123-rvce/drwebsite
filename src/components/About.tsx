"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";

export default function About() {
  const images = [
    "https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  ];
  return (
    <div>
      <div className="max-w-4xl text-xl leading-loose tracking-wide text-gray-800 dark:text-gray-200 text-justify">
        <Paragraph className="mt-6">
          Dr. Amit Singh is a distinguished Ayurvedic practitioner and Yoga
          expert with a profound dedication to holistic healing. He holds
          memberships in esteemed organizations such as the Indian Yoga
          Association, and he plays vital roles as a member of the AYUSH UP
          Committees for Diabetes and Cancer Prevention and Management
          programs, as well as a Yoga Therapy Consultant for the National
          Health Mission Maharashtra. He has also contributed to the AYUSH
          Video CME on &quot;Yoga for All AYUSH Doctors,&quot; conducted by the
          Telemedicine Department NHM, Mumbai.
        </Paragraph>
        <Paragraph className="mt-6">
          Dr. Amit comes from a family with a rich medical background. His
          grandfather, an allopathic physician, owned a hospital. Growing up in
          the spiritual city of Kashi (now Varanasi), Dr. Amit witnessed the
          healing properties of the holy river Ganga, which flows from the
          Himalayas and carries herbal benefits. This environment inspired his
          deep connection to natural cures and Ayurveda.
        </Paragraph>
        <Paragraph className="mt-6">
          Motivated by his early experiences, Dr. Amit pursued his Bachelor of
          Ayurvedic Medicine and Surgery (BAMS) at Rajiv Gandhi University of
          Health Sciences (RGUHS), one of India&apos;s leading medical
          universities. After practicing Ayurveda, he realized that while
          Ayurveda cleanses and cures the physical body, treating the mind and
          soul requires a deeper understanding of Yoga.
        </Paragraph>
        <Paragraph className="mt-6">
          To deepen his expertise, Dr. Amit earned an MD in Yoga and
          Rehabilitation from SVYASA University, a globally renowned institute
          for Yoga studies. Here, he gained in-depth knowledge about the
          science of the mind and soul. Combining his knowledge of Ayurveda and
          Yoga, Dr. Amit developed holistic treatment methods for his patients,
          achieving exceptional results.
        </Paragraph>
        <Paragraph className="mt-6">
          Dr. Amit&apos;s areas of specialization include:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Ayurvedic Medicine (RGUHS)*</li>
            <li>Counseling &amp; Psychology (Kuvempu University)*</li>
            <li>Diet &amp; Nutrition</li>
            <li>Yoga Counseling</li>
            <li>Yoga Therapy &amp; Rehabilitation (SVYASA)*</li>
            <li>Panchakarma</li>
          </ul>
        </Paragraph>
        <Paragraph className="mt-6">
          Dr. Amit is committed to serving humanity and travels extensively
          across India and abroad to provide treatments, conduct workshops, and
          deliver lectures. His mission is to promote the benefits of Ayurveda
          and Yoga for a healthier mind, body, and soul.
        </Paragraph>
        <Paragraph className="mt-6">
          <strong>Note:</strong> For more information about the institutions:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              SVYASA University:{" "}
              <a
                href="http://www.vyasa.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.vyasa.org
              </a>
            </li>
            <li>
              RGUHS University:{" "}
              <a
                href="http://www.rguhs.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.rguhs.ac.in
              </a>
            </li>
            <li>
              Kuvempu University:{" "}
              <a
                href="http://www.kuvempuuniversitydde.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                www.kuvempuuniversitydde.com
              </a>
            </li>
          </ul>
        </Paragraph>
      </div>
    </div>
  );
}
