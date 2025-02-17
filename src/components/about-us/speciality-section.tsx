"use client";
import { tiredWoman } from "@/assets/about/pngs/pngExport";
import { minus, plus } from "@/assets/about/svgs/svgExport";
import { Anybody, Arimo } from "next/font/google";
import Image from "next/image";
import React, { useState } from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});
const arimo = Arimo({
  variable: "--fontFamily-arimo",
  subsets: ["latin"],
});
const faqsArray = [
  {
    query: "GPS-Enabled Vehicles",
    answer:
      "Stay safe and track your progress with our cutting-edge technology that ensures every journey is monitored and secure.",
  },
  {
    query: "Expert Instructors",
    answer:
      "Learn from highly qualified instructors with years of experience, ensuring you receive top-tier driving education and personalized guidance every step of the way.",
  },
  {
    query: "Personalized Classes",
    answer:
      "Tailor your learning experience to fit your needs with customizable lesson plans that adapt to your schedule and skill level for maximum progress.",
  },
  {
    query: "Why Wait",
    answer:
      "Don’t delay your journey to becoming a confident driver! Sign up today to experience a seamless and efficient learning process with immediate results.",
  },
];

const Accordion = ({ query, answer }: { query: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="flex flex-col">
      <div className="flex ">
        <Image
          src={open ? minus : plus}
          alt={query}
          onClick={() => setOpen(!open)}
        />
        <h5
          className={`${arimo.variable} font-arimo text-[1.563rem] font-bold leading-[2.188rem] pl-[1.25rem]`}
        >
          {query}
        </h5>
      </div>
      {open && (
        <p
          className={`${arimo.variable} font-arimo text-[1.375rem] leading-[2.153rem] pl-[2.688rem]`}
        >
          {answer}
        </p>
      )}
    </li>
  );
};

const SpecialitySection = () => {
  return (
    <div className="max-w-[89.313rem] mx-auto mt-[4.658rem] p-4 2xl:p-0">
      <div className="mx-auto text-center">
        <h3
          className={`${anybody.variable} font-anybody text-[2rem] font-bold leading-[2.6rem]`}
        >
          <span className="bg-bgRedV2 text-transparent bg-clip-text">
            OUR SPECIALITY
          </span>
        </h3>
        <p
          className={`${anybody.variable} font-bold max-w-[44.078rem]  mx-auto font-anybody text-[1.4rem] md:text-[2.813rem] text-colorDarkHeading md:leading-[3.875rem]`}
        >
          Why Choose Upride for your Driving Journey?
        </p>
      </div>
      <div className="flex xl:flex-row flex-col items-center mt-[4rem] gap-6 xl:gap-0 justify-between">
        <ul className="2xl:min-w-[46.688rem] mr-[7.625rem] flex flex-col pb-4 md:pb-0 gap-[2.688rem]">
          {faqsArray.map((e, i) => (
            <Accordion query={e.query} answer={e.answer} key={i} />
          ))}
        </ul>
        <Image src={tiredWoman} alt="tired woman" />
      </div>
    </div>
  );
};

export default SpecialitySection;
