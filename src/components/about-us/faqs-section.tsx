"use client";
import { minusV2, plusV2 } from "@/assets/about/svgs/svgExport";
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
    query: "How long does it take to learn driving?",
    answer:
      "The time it takes to learn depends on your experience and the course you choose. On average, it takes around 10 to 20 lessons to become a confident driver. Our flexible courses cater to all levels, so you can learn at your own pace.",
  },
  {
    query: "How does Upride work?",
    answer:
      "Upride is a comprehensive platform that connects learners with certified driving instructors. Simply choose a course, book a session, and track your progress through our user-friendly dashboard.",
  },
  {
    query: "How do I book a class?",
    answer:
      "To book a class, sign in to your account, select an available time slot from your instructor's schedule, and confirm your booking. You’ll receive a confirmation email with the session details.",
  },
  {
    query: "How can I pay for lessons?",
    answer:
      "You can pay for lessons using credit/debit cards, digital wallets, or other secure payment methods available on our platform. We also offer the option to pay for individual lessons or purchase lesson packages.",
  },
  {
    query: "Can I reschedule my lesson?",
    answer:
      "Yes, you can reschedule your lesson up to 24 hours before your session. Simply go to your booking history, select the lesson, and choose a new date and time that works for you.",
  },
  {
    query: "Can I learn with my own car?",
    answer:
      "Yes, learning with your own car is an option. However, we recommend ensuring that your car is insured and equipped with dual controls for safety during the lessons.",
  },
];

const Accordion = ({ query, answer }: { query: string; answer: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className=" border-b-2 border-[#EBCDC79E] py-2">
      <div className="flex justify-between">
        <h4
          className={`${anybody.variable} font-anybody text-[1.563rem] text-black font-bold leading-[1.713rem]`}
        >
          {query}
        </h4>
        <Image
          src={open ? minusV2 : plusV2}
          alt={query}
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <p
          className={`${arimo.variable} max-w-[56.121rem] pt-[1.875rem]  font-arimo text-[1.125rem] text-[#3C3C43D9] leading-[1.575rem]`}
        >
          {answer}
        </p>
      )}
    </li>
  );
};
const FaqsSection = () => {
  return (
    <div className="max-w-[106.188rem] mx-auto bg-[#F2ECEC] rounded-[2.254rem] pb-[4.813rem] pt-[3.438rem]">
      <h2
        className={`${anybody.variable} font-anybody text-[2.75rem] mb-[3.75rem] text-center text-black font-bold leading-[3.5rem]`}
      >
        Frequently Asked Questions?
      </h2>

      <ul className="max-w-[89.496rem] mx-auto flex flex-col gap-[2.063rem] ">
        {faqsArray.map((e, i) => (
          <Accordion query={e.query} answer={e.answer} key={i} />
        ))}
      </ul>
    </div>
  );
};

export default FaqsSection;
