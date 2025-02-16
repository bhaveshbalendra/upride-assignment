import { video } from "@/assets/about/pngs/pngExport";
import { Anybody } from "next/font/google";
import Image from "next/image";
import React from "react";
const anybody = Anybody({
  variable: "--fontFamily-anybody",
  subsets: ["latin"],
});
// const arimo = Arimo({
//   variable: "--fontFamily-arimo",
//   subsets: ["latin"],
// });

const FounderPerpectiveSection = () => {
  return (
    <div className="w-full min-h-[68.534rem] flex justify-center items-center">
      <div className="text-center max-w-[107.07rem]">
        <h3
          className={`${anybody.variable} font-anybody  text-[2rem] font-bold leading-[41.6px]`}
        >
          <span className="bg-bgRedV1 text-transparent bg-clip-text">
            Founder Perspective
          </span>
        </h3>
        <p
          className={`${anybody.variable} mx-auto mb-[2.375rem]  max-w-[50.39rem] text-[2.813rem] leading-[62px] font-bold`}
        >
          From the Founder’s Wheel – The Vision Behind Upride
        </p>
        <Image src={video} alt="video" className="mx-auto" />
      </div>
    </div>
  );
};

export default FounderPerpectiveSection;
