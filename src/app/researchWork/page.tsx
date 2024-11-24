"use client";
import React, { useState } from "react";
import { useId } from "react";

export default function ToggleSectionsPage() {
  const [activeSection, setActiveSection] = useState("research");

  const researchData = [
    { title: "Textbook of allergy for the clinician", journal: "CRC Press", if: "", year: 2014 },
    { title: "A holistic antenatal model based on yoga, ayurveda, and Vedic guidelines", journal: "Health care for women international", if: 0.95, year: 2015 },
    { title: "Mindfulness and impulsivity in diabetes mellitus", journal: "Diabetes technology & therapeutics", if: 4.488, year: 2015 },
    { title: "Effect of integrated approach of yoga therapy on chronic constipation", journal: "Voice of research", if: 3.522, year: 2016 },
    { title: "Can yoga-based diabetes management studies facilitate integrative medicine in India current status and future directions", journal: "Integrative medicine international", if: 1.9, year: 2017 },
    { title: "Effect of integrated yoga therapy on arterial stiffness: a pilot study on young and older adults with obesity", journal: "Integrative medicine international", if: 1.9, year: 2017 },
    { title: "Effect of 1-week yoga-based residential program on cardiovascular variables of hypertensive patients: a comparative study", journal: "International journal of yoga", if: 1.2, year: 2018 },
    { title: "Impact of yoga on blood glucose level among patients with type 2 diabetes mellitus: a multicenter controlled trial", journal: "Journal of stem cells", if: 1.55, year: 2018 },
    { title: "Yoga in type 2 diabetes mellitus", journal: "Journal of stem cells", if: 1.55, year: 2018 },
    { title: "Partitioning of radiological, stress and biochemical changes in pre-diabetic women subjected to diabetic yoga protocol", journal: "Diabetes & metabolic syndrome: clinical research & reviews", if: 1.94, year: 2019 },
    { title: "Niyantrita madhumeha bharata 2017, methodology for a nationwide diabetes prevalence estimate: part 1", journal: "International journal of yoga", if: 1.2, year: 2019 },
    { title: "Methodology of Niyantrita Madhumeha Bharata Abhiyaan-2017, a Nationwide Multicentric Trial on the Effect of a Validated Culturally Acceptable Lifestyle Intervention for Primary Prevention of Diabetes: Part 2", journal: "International journal of yoga", if: 1.2, year: 2019 },
    { title: "Efficacy of a validated yoga protocol on dyslipidemia in diabetes patients: nmb-2017 India trial", journal: "Medicines", if: 2.13, year: 2019 },
    { title: "129-or: diabetes prevention through yoga-based lifestyle: a pan-India randomized controlled trial", journal: "Diabetes", if: 7.273, year: 2019 },
    { title: "Effect of a Residential Integrated Yoga Program on Blood Glucose Levels, Physiological Variables, and Anti-Diabetic Medication Score of Patients with Type 2 Diabetes Mellitus: A Retrospective Study", journal: "Integrative Medicine International", if: "", year: 2019 },
    { title: "Knowledge, attitude, and practice of yoga in rural and urban India, kapy 2017: a nationwide cluster sample survey", journal: "Medicines", if: 2.13, year: 2020 },
    { title: "Prevalence of diabetes and its determinants in the young adult’s Indian population-call for yoga intervention", journal: "Frontiers in endocrinology", if: 5.1, year: 2020 },
    { title: "Higher perceived stress and poor glycemic changes in prediabetics and diabetics among Indian population", journal: "Journal of medicine and life", if: 1.47, year: 2020 },
    { title: "A composite of BMI and waist circumference may be a better obesity metric in Indians with high risk for type 2 diabetes: an analysis of nmb-2017, a nationwide cross-sectional study", journal: "Diabetes research and clinical practice", if: 3.23, year: 2020 },
    { title: "Potential benefits of yoga in pregnancy-related complications during the covid-19 pandemic and implications for working women", journal: "Work", if: 1.009, year: 2020 },
    { title: "Immediate effect of mind sound resonance technique (MSRT – a yoga-based relaxation technique) on blood pressure, heart rate, and state anxiety in individuals with hypertension: a pilot study", journal: "Journal of complementary and integrative medicine", if: 0.66, year: 2020 },
    { title: "Assessment of risk of diabetes by using Indian diabetic risk score (IDRS) in Indian population", journal: "Diabetes research and clinical practice", if: 3.239, year: 2020 },
    { title: "Perceived stress and depression in prediabetes and diabetes in an Indian population-a call for a mindfulness-based intervention", journal: "General hospital psychiatry", if: 3.22, year: 2020 },
    { title: "Perceptions of benefits and barriers to yoga practice across rural and urban India: implications for workplace yoga", journal: "Work", if: 1.132, year: 2020 },
    { title: "Distribution of glycated hemoglobin and its determinants in Indian young adults", journal: "Diabetes research and clinical practice", if: 3.239, year: 2020 },
    { title: "Depression in high-risk type 2 diabetes adults", journal: "Annals of neurosciences", if: 2.01, year: 2020 },
    { title: "Integrative medicine as a panpharmacon for covid-19 pandemic: a call for global advocacy", journal: "Annals of neurosciences", if: 2.01, year: 2020 },
    { title: "Integrated approach of yoga therapy towards morbid obesity: a case report", journal: "Integrative medicine case reports", if: "", year: 2020 },
    { title: "Conservative and non-surgical management of lumbar disc herniation", journal: "Integrative medicine case report", if: "", year: 2020 },
    { title: "Non-surgical approach towards uterine fibroid and ovarian cyst with yoga practice", journal: "Integrative medicine case report", if: "", year: 2020 },
    { title: "Yoga practice is beneficial for maintaining healthy lifestyle and endurance under restrictions and stress imposed by lockdown during covid-19 pandemic", journal: "Frontiers in psychiatry", if: 3.53, year: 2021 },
    { title: "Physical activity patterns in India stratified by zones, age, region, BMI and implications for covid-19: a nationwide study", journal: "Annals of neuroscience", if: 2.01, year: 2021 },
    { title: "Cost of management of diabetes mellitus: a pan India study", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Effectiveness of a yoga-based lifestyle protocol (YLP) in preventing diabetes in a high-risk Indian cohort: a multicenter cluster-randomized controlled trial (NMB-trial)", journal: "Frontiers in endocrinology", if: 5.1, year: 2021 },
    { title: "Ayurveda body–mind constitutional types and role of yoga intervention among type 2 diabetes mellitus population of Chandigarh and Panchkula regions", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Potential role of yoga in the management of ankylosing spondylitis: a retrospective study", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Is the Indian dietary pattern associated with type 2 diabetes? A pan-India randomized cluster sample study", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Content validity of an integrated yoga module for practice during remission in relapsing–remitting multiple sclerosis patients", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "A recipe for policy research in Aayush educational and research programs.", journal: "Integrative medicine case reports", if: "", year: 2021 },
    { title: "Study protocol for yoga-based lifestyle intervention for healthy ageing phenotype in the older adults (yhap): a two-armed, waitlist randomized controlled trial with multiple primary outcomes", journal: "Bmj open", if: "", year: 2021 },
    { title: "Integrative approach to covid-19: an Indian Facebook recipe for mental health", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Prospective study of different staple diets of diabetic Indian population", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Development and validation of vikrti measuring scale–a pilot study", journal: "Indian journal of ayurveda & integrative medicine kleu", if: "", year: 2021 },
    { title: "Trends of hypertension and neurological diseases in India: a nationwide survey reporting the distribution across geographical areas", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Role of mind–body intervention on lipid profile: a cross-sectional study", journal: "International journal of yoga", if: 1.2, year: 2021 },
    { title: "Sleep disorders in individuals with high risk for diabetes in Indian population", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Ayurveda and yoga therapy for allergy and asthma", journal: "Textbook of allergy for the clinician", if: "", year: 2021 },
    { title: "A prospective study on type-2 diabetic complications and efficacy of integrated yoga: a pan India 2017", journal: "Annals of neurosciences", if: 2.01, year: 2021 },
    { title: "Good laboratory practices: lab orientations, meetings, and value of communication", journal: "Quality assurance implementation in research labs", if: "", year: 2021 },
    { title: "Integrated approach of yoga therapy towards chronic low back pain: a case report", journal: "Integrative medicine case reports", if: "", year: 2021 },
    { title: "Role of integrative medicine in oncology for longevity and quality of life: a case report", journal: "Integrative medicine case reports", if: "", year: 2021 },
    { title: "International conference in integrative medicine ICIM – 2020", journal: "Integrative medicine case reports", if: "", year: 2021 },
    { title: "Designing, validation, and the feasibility of a yoga module for patients with ankylosing spondylitis", journal: "Journal of ayurveda and integrative medicine", if: "", year: 2022 },
    { title: "A study protocol for a randomized controlled trial on the efficacy of yoga as an adjuvant therapy for patients with ankylosing spondylitis amidst covid-19 pandemic", journal: "Advances in integrative medicine", if: "", year: 2022 },
    { title: "Prevalence of non-communicable diseases and its associated factors among urban elderly of six Indian states", journal: "Cureus", if: 1.15, year: 2022 },
    { title: "The deadly duo of hypertension and diabetes in India: further affirmation from a new epidemiological study.", journal: "The journal of the association of physicians of India", if: 0.44, year: 2022 },
    { title: "Yoga-based stress and quality of life management during pregnancy", journal: "Psychosomatic medicine", if: "", year: 2022 },
    { title: "Role of yoga in prevention and management of type 2 diabetes mellitus (t2dm) and its complications", journal: "The principles and practice of yoga in cardiovascular medicine", if: "", year: 2022 },
    { title: "The burden of ‘high-risk ‘of diabetes in the Indian population-findings from a nationwide survey", journal: "SSRN 4242249", if: "", year: 2022 },
    { title: "Integrative treatment on Crohn’s disease: a case report", journal: "Integrative medicine case report", if: "", year: 2022 },
    { title: "Tele-yoga in the management of ankylosing spondylitis amidst covid pandemic: a prospective randomized controlled trial", journal: "Complementary therapies in clinical practice", if: 3.7, year: 2023 },
    { title: "Evaluating the Effectiveness of Yoga as An Adjunct Therapy In Type 1 Diabetes Care: Study Protocol of A Prospective Randomised ", journal: "Advances in integrative medicine", if: "", year: 2023 },
    { title: "A review of vata dosha with respect to Low back pain and its management according to Yoga, Ayurveda, and Traditional Thai Medicine", journal: "Paniniya Journal", if: "", year: 2023 },
    { title: "Exploring the Bioenergy Pathways Affecting the Low Back Pain – A Review", journal: "JACS Journal", if: "", year: 2023 },
    { title: "Yoga and Diet Management for Back pain- Narrative Review", journal: "IOS -YHH 2023 (KKSU)", if: "", year: 2023 },
    { title: "Props in Yoga and Traditional Thai Massage for Back Pain- A Narrative Review", journal: "Panniniya Journal", if: "", year: 2023 },
    { title: "Review study to explore the deeper insights into the pose Bhujangasana and its role in healing back pain.", journal: "Pracya Journal", if: "", year: 2023 },
    { title: "Mind -body practice as a primer to maintain the psychological health among pregnant women -YOGESTA -Randomized Controlled Trial", journal: "Frontiers in Public Health", if: "", year: 2023 },
    { title: "Impact of Mind Sound Resonance Technique (MSRT) as an add on to Integrated Approach of Yoga Therapy (IAYT) in stress-induced insomnia: A single case report", journal: "Integrative medicine case reports", if: "", year: 2023 },
  ];
  

  const booksData = [
    {
      title: "Textbook of Allergy for the Clinician",
      isbn: "9780367854706",
      publisher: "Taylor & Francis Group",
      year: 2020,
    },
    {
      title: "Ayurveda Therapy and It’s Integration with Improvised Modern Methods",
      isbn: "978-93-5493-777-4",
      publisher: "Swami Paramhansa Samsthana Publication",
      year: 2021,
    },
    {
      title: "Yoga, A Journey Within",
      isbn: "978-93-5437-986-4",
      publisher: "Swami Paramhansa Samsthana Publication",
      year: 2021,
    },
    {
      title: "Therapeutic Guidelines of Yoga Therapy and Integrative Medicine",
      isbn: "978-93-5473-045-0",
      publisher: "Swami Paramhansa Samsthana Publication",
      year: 2021,
    },
    {
      title: "Textbook of Allergy for the Clinician",
      isbn: "9780367854706",
      publisher: "Taylor & Francis Group",
      year: 2021,
    },
    {
      title: "Good Laboratory Practices: Lab Orientations, Meetings, and Value of Communication",
      isbn: "78-981-16-3073-6",
      publisher: "Springer, Singapore",
      year: 2021,
    },
    {
      title: "Meditation: A Safe, Feasible and Effective Adjunct Therapy",
      isbn: "978-93-82297-64-2",
      publisher: "Crossbill Publishing Co. New Delhi",
      year: 2021,
    },
    {
      title: "The Principles and Practice of Yoga in Cardiovascular Medicine",
      isbn: "978-981-16-6912-5",
      publisher: "Springer",
      year: 2022,
    },
  ];
  

  const projectsData = [
    {
      title:
        "Changes in prefrontal oxygenation, cardiac activity and executive functions following Mind sound resonance technique",
      designation: "PI",
      year: 2021,
    },
    {
      title:
        "Immediate effect of Kunjal kriya on cardiorespiratory function among asthmatic patients: a pilot study",
      designation: "PI",
      year: 2021,
    },
    {
      title:
        "Effect of three months Yoga Intervention on the management of Type 1 Diabetes – A Randomized Controlled Trial",
      designation: "PI",
      year: 2020,
    },
    {
      title:
        "Effect of yogic practices on phenotypic and molecular bio markers of aging",
      designation: "Co-PI",
      year: 2020,
    },
    {
      title:
        "Efficacy of yoga on frequency of Multiple sclerosis relapse and quality of life",
      designation: "Co-PI",
      year: 2020,
    },
    {
      title: "Management of Type 2 Diabetes through Ayurveda",
      designation: "Co-PI",
      year: 2019,
    },
  ];
  

  const renderContent = () => {
    if (activeSection === "research") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {researchData.map((feature, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {feature.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>Journal:</strong> {feature.journal || "N/A"}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>IF:</strong> {feature.if || "N/A"}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {feature.year}
              </p>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "books") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {booksData.map((book, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {book.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>ISBN:</strong> {book.isbn}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Publisher:</strong> {book.publisher}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {book.year}
              </p>
            </div>
          ))}
        </div>
      );
    } else if (activeSection === "projects") {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden shadow-lg"
            >
              <Grid size={20} />
              <h2 className="text-lg font-bold text-neutral-800 dark:text-white relative z-20">
                {project.title}
              </h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 relative z-20">
                <strong>Designation:</strong> {project.designation}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 relative z-20">
                <strong>Year:</strong> {project.year}
              </p>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="py-20 lg:py-40">
      <div className="max-w-7xl mx-auto mb-10 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveSection("research")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "research"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Research
          </button>
          <button
            onClick={() => setActiveSection("books")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "books"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Books
          </button>
          <button
            onClick={() => setActiveSection("projects")}
            className={`px-8 py-3 rounded-full font-semibold text-sm md:text-base lg:text-lg transition-all duration-300 transform ${
              activeSection === "projects"
                ? "bg-blue-500 text-white shadow-lg scale-105"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            Projects
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">{renderContent()}</div>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};
 
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();
 
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}