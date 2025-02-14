import { cloud } from "@/assets/about/svgs/svgExport";
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

const HeroSection = () => {
  return (
    <section
      className={`bg-[#F3ECE3] flex flex-col min-h-[47.629rem] pt-[4.375rem]`}
    >
      <h3 className="text-center pt-[4.863rem] relative z-20 ">
        <span
          className={`${anybody.variable} bg-bgRedV1 text-transparent bg-clip-text z-20  text-[1.75rem] font-bold  leading-[128.571%] uppercase font-anybody`}
        >
          About Us
        </span>
        <Image
          src={cloud}
          alt="cloud"
          className="absolute -bottom-[225%] z-10 left-[3%]"
        />
        <Image
          src={cloud}
          alt="cloud"
          className="absolute top-[95%] z-10 right-[2%] "
        />
      </h3>
      <h1
        className={`${anybody.variable} text-center max-w-[58.03rem] z-20  bg-black text-transparent bg-clip-text text-[3.313rem] font-bold  leading-[139%] mx-auto font-anybody`}
      >
        Transforming Driving Education Across India
      </h1>

      <p
        className={`${arimo.variable} leading-[157%] text-[1.375rem] z-20 pt-[0.959rem] text-[#191818]  max-w-[65.235rem] mx-auto font-normal font-armio text-center min-h-[6.5rem]`}
      >
        Upride began with a simple yet powerful idea: to redefine how India
        learns to drive. Born from the belief that every individual deserves
        access to safe, reliable, and empowering driver education, Upride has
        grown into a movement that’s transforming lives across the country.
      </p>
    </section>
  );
};

export default HeroSection;
