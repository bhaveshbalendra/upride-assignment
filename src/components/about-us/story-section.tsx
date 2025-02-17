import { arrow } from "@/assets/about/svgs/svgExport";
import { Anybody, Arimo } from "next/font/google";
import Image from "next/image";
import React from "react";
import Milestone from "./ui/milestone";

const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});
const arimo = Arimo({
  variable: "--fontFamily-arimo",
  subsets: ["latin"],
});

const timelineArray = [
  {
    date: "2023",
    heading: "The Idea Takes Shape",
    content:
      "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.",
  },
  {
    date: "Early 2024",
    heading: "Upride is Born",
    content:
      "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.",
  },
  {
    date: "Early 2024",
    heading: "Upride is Born",
    content:
      "Frustrated by outdated driving schools and unsafe practices, our founders came together with a bold vision—to make learning to drive safer, smarter, and more accessible.",
  },
];
const StorySection = () => {
  return (
    <div className="min-h-[54.541rem] bg-[#F2EAEA] relative px-4 ">
      <div className="flex max-w-[107.402rem] mx-auto gap-[1rem] md:pt-[5.721rem] md:gap-[9rem] md:flex-row flex-col ">
        <div className="flex flex-col pt-[2.721rem] ">
          <h3
            className={`${anybody.variable}  font-anybody font-bold text-[1.75rem]  bg-bgRedV1 text-transparent bg-clip-text leading-[128.571%] uppercase `}
          >
            OUR STORY
          </h3>
          <h2
            className={`${anybody.variable} font-anybody text-[#151515] text-[2rem] md:text-[2.75rem] leading-[127.273%] font-bold`}
          >
            Milestones that Define our Success
          </h2>
        </div>
        <p
          className={`${arimo.variable} font-armio pt-[0rem] md:pt-[5.721rem] text-[1rem] md:text-[1.375rem] font-normal leading-[157%] p-[0.625rem] max-w-[64.715rem]`}
        >
          At Upride, we realized driving education in India was stuck in
          reverse. From unprofessional instructors to outdated methods and a
          lack of focus on safety, traditional driving schools were failing
          learners. In 2023, our founders set out to rewrite the rules of driver
          education. That’s how Upride was born—with a mission to make learning
          to drive smarter, safer, and accessible to all.
        </p>
      </div>
      <div className=" max-w-[107.402rem] mx-auto flex justify-center lg:justify-normal gap-[3rem] md:gap-[9.605rem] pt-[1.671rem] md:pt-[6.671rem] flex-wrap">
        {timelineArray.map((e, i) => (
          <Milestone
            key={i}
            content={e.content}
            date={e.date}
            heading={e.heading}
          />
        ))}
      </div>
      <div className="flex max-w-[107.402rem] justify-end pt-[3.092rem] mx-auto">
        <div className="flex">
          <Image src={arrow} alt="arrow" className="rotate-180 opacity-40" />
          <Image src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default StorySection;
