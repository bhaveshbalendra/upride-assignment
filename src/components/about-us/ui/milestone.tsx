import { trafficLight } from "@/assets/about/svgs/svgExport";
import { Anybody, Arimo } from "next/font/google";
import Image from "next/image";
import React from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});

const arimo = Arimo({
  variable: "--fontFamily-arimo",
  subsets: ["latin"],
});

const Milestone = ({
  date,
  heading,
  content,
}: {
  date: string;
  heading: string;
  content: string;
}) => {
  return (
    <div className="flex flex-col max-w-[24rem] items-center md:items-baseline">
      <div className="w-[8.603rem] h-[8.603rem] rounded-full relative bg-[#EBD5D5] flex justify-center items-center">
        <Image src={trafficLight} alt="traffic light" />
        <div className="hidden md:block absolute left-[110%] w-52 2xl:w-80  border-t-2 border-dashed border-black" />
      </div>
      <h4
        className={`${anybody.variable} pt-[1.921rem]  font-anybody text-[1.563rem] leading-[109.6%]  bg-bgRedV1 text-transparent bg-clip-text font-bold`}
      >
        {date}
      </h4>
      <h4
        className={`${anybody.variable} font-anybody text-[1.563rem] py-2 leading-[109.6%] text-colorDarkHeading font-bold`}
      >
        {heading}
      </h4>
      <p
        className={`${arimo.variable} font-anybody text-[1.125rem] pt-[0.375rem] leading-[148%] text-colorDarkHeading `}
      >
        {content}
      </p>
    </div>
  );
};

export default Milestone;
