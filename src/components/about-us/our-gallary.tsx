import {
  eight,
  five,
  four,
  one,
  seven,
  six,
  three,
  two,
} from "@/assets/about/pngs/pngExport";
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
const OurGallary = () => {
  return (
    <div className="bg-[#F2EAEA] mx-auto max-w-[106.188rem] rounded-[3.188rem] mt-[4rem] lg:mt-[11.583rem] px-4 2xl:p-0">
      <div className="mx-auto text-center">
        <h3
          className={`${arimo.variable} pt-[5.25rem] font-bold font-arimo text-[1.563rem]  leading-[2.188rem]`}
        >
          <span className="bg-bgRedV2 text-transparent bg-clip-text">
            OUR GALLERY
          </span>
        </h3>
        <h2
          className={`${anybody.variable} font-anybody text-[2rem] md:text-[2.75rem] text-colorDarkHeading font-bold  md:leading-[3.5rem]`}
        >
          Moments That Drive Us Forward
        </h2>
        <p
          className={`${arimo.variable} max-w-[56.121rem] pt-[0.492rem] mx-auto font-arimo text-[1.375rem] text-colorDarkHeading leading-[2.159rem]`}
        >
          Take a glimpse into our journey! From empowering first-time drivers to
          celebrating milestones, our gallery captures the essence of what we
          do.
        </p>
        <p
          className={`${arimo.variable} max-w-[56.121rem] mb-[2.313rem] pt-[0.492rem] mx-auto font-arimo text-[1.375rem] text-colorDarkHeading leading-[2.159rem]`}
        >
          Each photo tells a story of growth, confidence, and success—because at
          Upride, every moment on the road is a moment to celebrate.
        </p>
        <button className="px-6 py-2 mb-[3.313rem] border border-red-500 text-red-500 rounded-full hover:bg-red-100 transition-all duration-200">
          Visit Our Instagram
        </button>
      </div>
      <div className="flex gap-[1.125rem] justify-center flex-wrap lg:flex-nowrap pb-[3.313rem]">
        <div className="flex gap-[1.125rem]">
          <div className="flex flex-col gap-[1.125rem]">
            <Image src={one} alt="one" />
            <Image src={two} alt="two" />
          </div>
          <div className="flex flex-col gap-[1.125rem]">
            <Image src={three} alt="three" />
            <Image src={four} alt="four" />
          </div>
        </div>
        <div className="flex flex-col gap-[1.125rem]">
          <div className="flex gap-[1.125rem]">
            <Image src={five} alt="five" />
            <div className="flex flex-col gap-[1.125rem]">
              <Image src={six} alt="six" />
              <Image src={seven} alt="seven" />
            </div>
          </div>
          <Image src={eight} alt="eight" />
        </div>
      </div>
    </div>
  );
};

export default OurGallary;
